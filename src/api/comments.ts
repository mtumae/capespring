
import { neon } from "@neondatabase/serverless";




export async function getComments(){
    const sql = neon(import.meta.env.VITE_DATABASE_URL);
    const posts = await sql('SELECT * FROM capespringpost');

    return posts
}


