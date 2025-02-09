import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <>
         <ul className="justify-self-center flex text-2xl gap-10 m-10 ">
            <li>
                 <Link to="/"><img className="w-1/2" src="public/capespringlogo.jpg"/></Link>

            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/stream">stream</Link>
            </li>
            <li>
                <Link to="/gallery">gallery</Link>
            </li>
        
        </ul>
       
        </>
    )
}