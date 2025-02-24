
import { useState } from "react";
import Footer from "../components/footer"
import NavBar from "../components/navigation"
import { BiCheck } from "react-icons/bi";
import { drizzle } from 'drizzle-orm/neon-http';
import { commentsTable } from '../db/schema';

import {getComments} from "../api/comments";


const post = await getComments();

const db = drizzle(import.meta.env.VITE_DATABASE_URL)



export default function Home(){
    const [commentNew, SetCommentNew] = useState('')
    
    async function addComment(){
        const comment: typeof commentsTable.$inferInsert = {
            comment: commentNew
        }
        await db.insert(commentsTable).values(comment)
        console.log("Lets go, it worked!")
    }


    return(
        <>
            <NavBar></NavBar>
            <iframe className="m-10 w-3/4 justify-self-center shadow-lg rounded-lg" src="https://open.spotify.com/embed/track/0xMaU17or2mTPbGGyM9eqU?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
         
              
                <div className="m-20 text-sm">

                    {post.map((data)=>(
                        <>
                        <a key={data.id}>{data.comment}</a><br></br>
                        </>

                    ))}

                    

                    <a className="border-b-2 border-b-blue-950 font-bold">{commentNew}</a><br></br>
                   

                   
                    <input onChange={e => SetCommentNew(e.target.value)} className=" w-auto p-1 mt-20 mr-10 shadow-md rounded-md " placeholder="say something nice..."></input>
                    <button onClick={addComment} className="p-2 rounded-md shadow-md text-sm hover:border-stone-300 hover:shadow-lg "><BiCheck/></button>
                   
                  
                </div>
                
              
            <Footer></Footer>
        </>
    )
}

