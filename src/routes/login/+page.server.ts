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
function validateLoginInput(email: string, password: string) {
  const errors: string[] = [];
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please enter a valid email address');
  }
  
  // Password validation
  if (!password || password.length < 1) {
    errors.push('Password is required');
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

    // Validate input
    const validationErrors = validateLoginInput(email, password);
    if (validationErrors.length > 0) {
      return fail(400, { error: validationErrors.join(', ') });
    }

    try {
      // Find user by email with retry
      const user = await withRetry(async () => {
        const [foundUser] = await db
          .select()
          .from(users)
          .where(eq(users.email, email));
        return foundUser;
      });

      if (!user) {
        // Use generic error message for security
        return fail(400, { error: 'Invalid email or password' });
      }

      // Verify password
      const passwordValid = await bcrypt.compare(password, user.password);
      if (!passwordValid) {
        // Use generic error message for security
        return fail(400, { error: 'Invalid email or password' });
      }

      // Create session with user data
      const userData = {
        id: user.id,
        email: user.email,
        name: user.name
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

      console.log('User logged in successfully:', { email, userId: user.id });
      
    } catch (error) {
      console.error('Login error:', error);
      
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

    // Redirect after successful login (outside try-catch)
    throw redirect(303, '/dashboard');
  }
};
