"use client"
import { useEffect, useState } from "react";
import Footer from "../components/footer"
import NavBar from "../components/navigation"
//import { BiCheck } from "react-icons/bi";
import { getComments, addComment } from "../api/comments"


interface comment{
    id: number;
    comment: string;
    createdAt: Date;
    likes: number|null;
}


export default function Home(){
    const [msg, setMsg] =useState('')
    const [newcomments, setNewComments] = useState<comment[]|null[]>([])


    async function comment(){
        if(msg.length > 0){
            await addComment(msg)
        }
    }


    useEffect(()=>{
        getComments().then((data)=>{
            setNewComments(data)
        })
    }, [msg])

    return(
        <>
            <NavBar></NavBar>
            <iframe className="m-10 w-3/4 justify-self-center shadow-lg rounded-lg" src="https://open.spotify.com/embed/track/0xMaU17or2mTPbGGyM9eqU?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 m-10">
            {newcomments && newcomments.length > 0 ? (
                newcomments.map((c, index) => (
                    <div key={index} className="transition-shadow duration-300 text-xs text-gray-700">
                        <p className="text-sm ">{c?.comment}</p>
                    </div>
                ))
            ) : (
                <p className="m-10 text-sm text-gray-500">No comments.</p>
            )}
               </div>
            <div className="p-10 text-sm">
                <input 
                onKeyDown={e => {
                    if(e.key === 'Enter')
                    {
                        console.log(e.currentTarget.value)
                        setMsg(e.currentTarget.value)
                        comment()
                    }
                }} className=" w-full border border-gray-700 p-2 focus:outline-0 rounded-lg text-gray-500 shadow-sm" placeholder="Leave a comment"></input>
            </div>
            <Footer></Footer>
        </>
    )
}

