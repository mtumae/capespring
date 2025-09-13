import { FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa"



export default function Footer(){
    return(
        <div className="text-gray-400 p-5 w-full items-center justify-center text-xs flex  gap-10">
            <a>capesp®ing</a>
            <a href="https://www.instagram.com/c.3.p.o/"><FaInstagram></FaInstagram></a>
            <a href=""><FaYoutube></FaYoutube></a>
            <a href=""><FaSoundcloud></FaSoundcloud></a>
            <a href=""><FaSpotify></FaSpotify></a>
        </div>
    )
}