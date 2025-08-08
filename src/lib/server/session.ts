// src/lib/server/session.ts
import { db } from '$lib';
import { sessions } from '$lib/db/schema';
import { randomBytes } from 'crypto';
import { add } from 'date-fns';
import { eq } from 'drizzle-orm';

const SESSION_DURATION_DAYS = 7;

export async function createSession(userData: any): Promise<string> {
  const id = randomBytes(32).toString('hex');
  const expiresAt = add(new Date(), { days: SESSION_DURATION_DAYS });

  await db.insert(sessions).values({ id, userData, expiresAt });
  return id;
}

export async function getSession(sessionId: string) {
  const [session] = await db
    .select()
    .from(sessions)
    .where(eq(sessions.id, sessionId));

  if (!session || new Date() > session.expiresAt) {
    return null;
  }

  return session.userData;
}

export async function deleteSession(sessionId: string) {
  await db.delete(sessions).where(eq(sessions.id, sessionId));
}
