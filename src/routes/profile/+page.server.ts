import { fail, redirect } from '@sveltejs/kit';
import type { Actions, ServerLoad } from '@sveltejs/kit';
import bcrypt from 'bcrypt';
import { db } from '$lib';
import { users } from '$lib/db/schema';
import { eq } from 'drizzle-orm';

export const load: ServerLoad = async ({ locals }) => {
  // Redirect if not logged in
  if (!locals.user) {
    throw redirect(303, '/login');
  }
  
  return {
    user: locals.user
  };
};

export const actions: Actions = {
  default: async ({ request, locals, cookies }) => {
    if (!locals.user) {
      throw redirect(303, '/login');
    }

    const form = await request.formData();
    const name = form.get('name') as string;
    const email = form.get('email') as string;
    const currentPassword = form.get('currentPassword') as string;
    const newPassword = form.get('newPassword') as string;

    if (!name || !email) {
      return fail(400, { error: 'Name and email are required' });
    }

    // Get current user data
    const [currentUser] = await db
      .select()
      .from(users)
      .where(eq(users.id, locals.user.id));

    if (!currentUser) {
      return fail(400, { error: 'User not found' });
    }

    // Check if email is being changed and if it's already taken
    if (email !== currentUser.email) {
      const [existingUser] = await db
        .select()
        .from(users)
        .where(eq(users.email, email));

      if (existingUser) {
        return fail(400, { error: 'Email already taken' });
      }
    }

    // If password is being changed, verify current password
    if (newPassword) {
      if (!currentPassword) {
        return fail(400, { error: 'Current password is required to change password' });
      }

      const passwordValid = await bcrypt.compare(currentPassword, currentUser.password);
      if (!passwordValid) {
        return fail(400, { error: 'Current password is incorrect' });
      }
    }

    // Update user
    const updateData: any = { name, email };
    if (newPassword) {
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    const [updatedUser] = await db
      .update(users)
      .set(updateData)
      .where(eq(users.id, locals.user.id))
      .returning();

    // Update session with new user data
    const userData = {
      id: updatedUser.id,
      email: updatedUser.email,
      name: updatedUser.name
    };

    // Create new session
    const { createSession } = await import('$lib/server/session');
    const sessionId = await createSession(userData);
    
    // Set new session cookie
    cookies.set('session', sessionId, {
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return { success: true, name, email };
  }
};
