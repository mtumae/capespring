import Footer from "../components/footer"
import NavBar from "../components/navigation"


export default function Home(){
    return(
        <>
            <NavBar></NavBar>
            <iframe className="m-10 w-3/4 justify-self-center shadow-lg rounded-lg" src="https://open.spotify.com/embed/track/0xMaU17or2mTPbGGyM9eqU?utm_source=generator" width="100%" height="352" frameBorder="0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <div className="flex w-full">
            <Footer></Footer>
            </div>
        </>
    )
}