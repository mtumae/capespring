import { Link } from "react-router-dom"



export default function NavBar() {
    return (
        <nav>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center text-lg gap-4 sm:gap-10 m-10">
                <Link to='/' className="mb-4 sm:mb-0">
                    <img className="w-32 sm:w-1/2 mx-auto" src="/logo.png" alt="capespring logo" />
                </Link>
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
                    <Link to="/about" className="hover:underline">about</Link>
          
                    <Link to="/gallery" className="hover:underline">gallery</Link>
                    <a className="text-sky-500 hover:underline" href='https://www.gofundme.com/f/help-me-fund-my-spring-semester-at-calarts'>donate</a>
                </div>
            </div>
        </nav>
    );
}