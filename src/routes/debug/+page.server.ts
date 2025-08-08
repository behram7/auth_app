import { db } from '$lib';
import { users } from '$lib/db/schema';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async () => {
  const allUsers = await db.select().from(users);
  return { users: allUsers };
};
