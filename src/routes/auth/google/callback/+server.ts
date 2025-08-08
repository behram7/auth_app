import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_TOKEN_URL, GOOGLE_USER_INFO_URL } from '$lib/auth';
import { db, withRetry } from '$lib';
import { users } from '$lib/db/schema';
import { eq } from 'drizzle-orm';
import { createSession } from '$lib/server/session';
import bcrypt from 'bcrypt';

export const GET: RequestHandler = async ({ url, cookies }) => {
  try {
    const code = url.searchParams.get('code');
    
    if (!code) {
      throw redirect(302, '/login?error=oauth_failed');
    }

    // Exchange code for access token
    const tokenResponse = await fetch(GOOGLE_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: `${process.env.BASE_URL || 'http://localhost:5173'}/auth/google/callback`,
      }),
    });

    if (!tokenResponse.ok) {
      console.error('Google token error:', await tokenResponse.text());
      throw redirect(302, '/login?error=oauth_failed');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user info from Google
    const userResponse = await fetch(GOOGLE_USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!userResponse.ok) {
      throw redirect(302, '/login?error=oauth_failed');
    }

    const googleUser = await userResponse.json();
    
    // Check if user exists in database
    const existingUser = await withRetry(async () => {
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, googleUser.email));
      return user;
    });

    let userData;

    if (existingUser) {
      // User exists, use existing data
      userData = {
        id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name
      };
    } else {
      // Create new user
      const [newUser] = await withRetry(async () => {
        return await db
          .insert(users)
          .values({
            email: googleUser.email,
            name: googleUser.name || googleUser.email.split('@')[0],
            password: await bcrypt.hash(Math.random().toString(36), 12) // Generate random password
          })
          .returning();
      });

      userData = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
      };
    }

    // Create session
    const sessionId = await createSession(userData);
    
    // Set session cookie
    cookies.set('session', sessionId, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    console.log('Google OAuth login successful:', { email: userData.email, userId: userData.id });
    throw redirect(302, '/dashboard');

  } catch (error) {
    console.error('Google OAuth error:', error);
    throw redirect(302, '/login?error=oauth_failed');
  }
};
