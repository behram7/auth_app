import { redirect } from '@sveltejs/kit';
import type { Actions } from '@sveltejs/kit';
import { deleteSession } from '$lib/server/session';

export const actions: Actions = {
  default: async ({ cookies }) => {
    const sessionId = cookies.get('session');
    
    if (sessionId) {
      await deleteSession(sessionId);
    }
    
    // Clear the session cookie
    cookies.delete('session', { path: '/' });
    
    throw redirect(303, '/');
  }
};
