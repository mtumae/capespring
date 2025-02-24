
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import { usersTable } from './db/schema';
import { commentsTable } from '../db/schema';


const db = drizzle(import.meta.env.VITE_DATABASE_URL)


async function addComment(){
    const comment: typeof commentsTable.$inferInsert = {
        comment: 
    }
}