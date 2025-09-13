
import { drizzle } from 'drizzle-orm/neon-http';
//import { neon } from "@neondatabase/serverless";
import {commentsTable} from '../db/schema';


const db = drizzle(import.meta.env.VITE_DATABASE_URL)



export async function getComments(){
        const data = await db.select().from(commentsTable).orderBy(commentsTable.createdAt)
        return data
}

export async function addComment(commentNew:string){
    const comment: typeof commentsTable.$inferInsert = {
        comment: commentNew
    }
    await db.insert(commentsTable).values(comment)
}