import 'dotenv/config'; 
import { pgTable, serial, varchar, timestamp,jsonb } from 'drizzle-orm/pg-core';
// <-- This is important and loads your .env file

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  name: varchar('name', { length: 255 }),
  created_at: timestamp('created_at').defaultNow(),
});




export const sessions = pgTable('sessions', {
  id: varchar('id').primaryKey(),
  userData: jsonb('user_data').notNull(),
  expiresAt: timestamp('expires_at', { mode: 'date' }).notNull()
});