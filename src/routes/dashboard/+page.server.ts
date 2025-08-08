import { redirect } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ locals }) => {
  // Redirect if not logged in
  if (!locals.user) {
    throw redirect(303, '/login');
  }
  
  return {
    user: locals.user
  };
};
