import { Link } from "react-router-dom"



export default function NavBar(){
    return(
        <>
        <div className="justify-self-center flex text-lg gap-10 m-10">
                <Link className="" to='/'><img className="sm:w-1/2" src="/logo.png" /></Link>
                <Link to="/about" className="hover:underline">about</Link>
                <Link to="/stream" className="hover:underline">stream</Link>
                <Link to="/gallery" className="hover:underline">gallery</Link>
        </div>
        </>
    )
}