import { fail, redirect } from '@sveltejs/kit';
import type { Actions, ServerLoad } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { db, withRetry, checkDatabaseConnection } from '$lib';
import { users } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import { createSession } from '$lib/server/session';

export const load: ServerLoad = async ({ locals }) => {
  // Redirect if already logged in
  if (locals.user) {
    throw redirect(303, '/dashboard');
  }
  
  return {};
};

// Input validation function
function validateRegistrationInput(email: string, password: string, name: string) {
  const errors: string[] = [];
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Password validation
  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }
  
  // Name validation
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  
  return errors;
}

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    // Check database connection first
    const isConnected = await checkDatabaseConnection();
    if (!isConnected) {
      return fail(500, { error: 'Database connection failed. Please try again later.' });
    }

    const form = await request.formData();
    const email = (form.get('email') as string)?.trim();
    const password = form.get('password') as string;
    const name = (form.get('name') as string)?.trim();

    // Validate input
    const validationErrors = validateRegistrationInput(email, password, name);
    if (validationErrors.length > 0) {
      return fail(400, { error: validationErrors.join(', ') });
    }

    try {
      // Check if user already exists with retry
      const existingUser = await withRetry(async () => {
        const [user] = await db
          .select()
          .from(users)
          .where(eq(users.email, email));
        return user;
      });

      if (existingUser) {
        return fail(400, { error: 'User with this email already exists' });
      }

      // Hash password and create user with retry
      const hashedPassword = await bcrypt.hash(password, 12); // Increased salt rounds for better security

      const [newUser] = await withRetry(async () => {
        return await db
          .insert(users)
          .values({
            email,
            password: hashedPassword,
            name
          })
          .returning();
      });

      // Create session with user data
      const userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };

      const sessionId = await createSession(userData);
      
      // Set session cookie with enhanced security
      cookies.set('session', sessionId, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7 // 7 days
      });

      console.log('User registered successfully:', { email, userId: newUser.id });
      
    } catch (error) {
      console.error('Registration error:', error);
      
      // Handle specific database errors
      if (error instanceof Error) {
        if (error.message.includes('DATABASE_URL')) {
          return fail(500, { error: 'Database configuration error. Please contact support.' });
        }
        if (error.message.includes('connection')) {
          return fail(500, { error: 'Database connection failed. Please try again later.' });
        }
      }
      
      return fail(500, { error: 'An unexpected error occurred. Please try again.' });
    }

    // Redirect after successful registration (outside try-catch)
    throw redirect(303, '/dashboard');
  }
};
