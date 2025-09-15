
import { useState } from "react";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";


export default function NavBar() {
    const params = useLocation();
    const [active , setActive] = useState(params.pathname.slice(1) || "home");
    return (
        <nav>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center text-lg gap-4 sm:gap-10 m-10">
                <Link to='/' className="mb-4 sm:mb-0">
                    <img className="w-32 sm:w-1/2 mx-auto" src="/logo.png" alt="capespring logo" />
                </Link>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                    <Link to="/about" className={`hover:underline ${active === "about" ? "underline" : ""}`} onClick={() => setActive("about")}>about</Link>
                    <Link to="/gallery" className={`hover:underline ${active === "gallery" ? "underline" : ""}`} onClick={() => setActive("gallery")}>gallery</Link>
                    <a className={`hover:underline ${active === "donate" ? "underline" : ""}`} href='https://www.gofundme.com/f/help-me-fund-my-spring-semester-at-calarts' onClick={() => setActive("donate")}>donate</a>
                </div>
            </div>
        </nav>
    );
}