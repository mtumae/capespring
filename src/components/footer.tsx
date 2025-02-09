import { FaInstagram, FaSoundcloud, FaSpotify, FaYoutube } from "react-icons/fa"



export default function Footer(){
    return(
        <div className="text-gray-400 m-10 w-full animate-pulse flex sm:flex-wrap gap-10">
            <a>capesp®ing 2025</a>
            <a href=""><FaInstagram></FaInstagram></a>
            <a href=""><FaYoutube></FaYoutube></a>
            <a href=""><FaSoundcloud></FaSoundcloud></a>
            <a href=""><FaSpotify></FaSpotify></a>
        </div>
    )
}