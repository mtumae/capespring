import NavBar from "../components/navigation"

export default function Home(){
    return(
        <>
            <NavBar></NavBar>

            <div className="grid grid-cols-2 m-10 g-5 w-full">
                <img src="public/capespringlogo.jpg"/>
                <img className="-mt-10" src="public/bio.png" />
            </div>


            
    
        </>
    )
}