import { Link } from "react-router-dom"

export default function NavBar(){
    return(
         <ul className="w-full flex text-4xl gap-10 m-10 align-top">
            <li>
                 <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/stream">Stream</Link>
            </li>
            <li>
                <Link to="/gallery">Gallery</Link>
            </li>
        </ul>
    )
}