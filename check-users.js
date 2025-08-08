import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function checkUsers() {
  try {
    console.log('Checking users in database...');
    
    const result = await pool.query('SELECT id, email, name, created_at FROM users');
    
    if (result.rows.length === 0) {
      console.log('No users found in database.');
    } else {
      console.log('Users found:');
      result.rows.forEach(user => {
        console.log(`- ID: ${user.id}, Email: ${user.email}, Name: ${user.name}, Created: ${user.created_at}`);
      });
    }
  } catch (error) {
    console.error('Error checking users:', error);
  } finally {
    await pool.end();
  }
}

checkUsers();
