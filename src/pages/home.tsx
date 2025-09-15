"use client"
import { useEffect, useState } from "react";
//import { BiCheck } from "react-icons/bi";
import { getComments, addComment } from "../api/comments"
import Stream from "./stream";



interface commentType{
    id: number;
    comment: string;
    createdAt: Date;
    likes: number|null;
}


export default function Home(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [msg, setMsg] =useState('')
    const [newcomments, setNewComments] = useState<commentType[]|null[]>([])
    
    
    async function comment(){
        setLoading(true)
        if(msg.length > 10){
            await addComment(msg)
            await getComments().then(data => {
                    console.log("Fetching new comments")
                    setNewComments(data)
                    console.log("New data:", data)
                }).catch(err => {
                    console.error(err)
                    setError("Failed to load comments")
                    setTimeout(() => setError(""), 3000)
                }).finally(() => {
                    setLoading(false)
                })
        }else{
            setError("Comment must be at least 10 characters!")
            setTimeout(() => setError(""), 3000)
            setLoading(false)
        }
    }
    useEffect(()=>{
        async function getData(){
            if(loading){
                await getComments().then(data => {
                    console.log("Fetching new comments")
                    setNewComments(data)
                    console.log("New data:", data)
                }).catch(err => {
                    console.error(err)
                    setError("Failed to load comments")
                    setTimeout(() => setError(""), 3000)
                }).finally(() => {
                    setLoading(false)
                })
            }
    }
    getData()
    }, [loading])

    return(
        <>
            <iframe className="m-10 w-3/4 justify-self-center shadow-lg rounded-lg" src="https://open.spotify.com/embed/track/0xMaU17or2mTPbGGyM9eqU?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-10">
            {newcomments? (newcomments.map((c, i) => (
                    <div key={i} className="transition-shadow duration-300 text-xs text-gray-700">
                        <p className="text-sm ">{c?.comment}</p>
                    </div>
                ))
            ) : (
                <p className="m-10 text-sm text-gray-500">No comments.</p>
            )}
             {loading && <p className="text-sm text-gray-500">Loading...</p> }
            
            </div>

            <Stream />

            <div className="p-20 text-sm">
                {loading?null:
                <input 
                onKeyDown={e => {
                    if(e.key === 'Enter')
                    {
                        comment()
                    }
                }} onChange={e => setMsg(e.currentTarget.value)} className=" w-full bg-gray-50  p-3 focus:outline-0 rounded-lg text-black " placeholder="Leave a comment"></input>}
                {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
            </div>
 
        </>
    )
}

