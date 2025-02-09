import NavBar from "../components/navigation"

export default function Home(){
    return(
        <>
            <NavBar></NavBar>
            <iframe className="m-10 w-3/4 justify-self-center" src="https://open.spotify.com/embed/track/0xMaU17or2mTPbGGyM9eqU?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

            <div className="grid grid-cols-2 m-10 g-5 w-full">
                
                <img className="-mt-10" src="public/bio.png" />
            </div>


            
    
        </>
    )
}