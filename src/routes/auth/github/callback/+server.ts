import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GITHUB_TOKEN_URL, GITHUB_USER_INFO_URL } from '$lib/auth';
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
    const tokenResponse = await fetch(GITHUB_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    if (!tokenResponse.ok) {
      console.error('GitHub token error:', await tokenResponse.text());
      throw redirect(302, '/login?error=oauth_failed');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get user info from GitHub
    const userResponse = await fetch(GITHUB_USER_INFO_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'Your-App-Name',
      },
    });

    if (!userResponse.ok) {
      throw redirect(302, '/login?error=oauth_failed');
    }

    const githubUser = await userResponse.json();
    
    // Get user email from GitHub
    const emailResponse = await fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'User-Agent': 'Your-App-Name',
      },
    });

    let email = githubUser.email;
    if (emailResponse.ok) {
      const emails = await emailResponse.json();
      const primaryEmail = emails.find((e: any) => e.primary);
      if (primaryEmail) {
        email = primaryEmail.email;
      }
    }

    if (!email) {
      throw redirect(302, '/login?error=email_required');
    }
    
    // Check if user exists in database
    const existingUser = await withRetry(async () => {
      const [user] = await db
        .select()
        .from(users)
        .where(eq(users.email, email));
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
            email: email,
            name: githubUser.name || githubUser.login || email.split('@')[0],
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

    console.log('GitHub OAuth login successful:', { email: userData.email, userId: userData.id });
    throw redirect(302, '/dashboard');

  } catch (error) {
    console.error('GitHub OAuth error:', error);
    throw redirect(302, '/login?error=oauth_failed');
  }
};
