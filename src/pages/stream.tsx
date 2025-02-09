import Footer from "../components/footer";
import NavBar from "../components/navigation";

const covers = [
    {id:'1',name:'2020.jpg', alt:'2020 cover', link:'https://open.spotify.com/album/7106h5eEzFFzF2SQCiazrn'},
    {id:'2',name:'fewfarbetween.jpg', alt:'few & far between album cover', link:'https://open.spotify.com/album/1TsOQ7nu8nuEPYTZ3Xx6qK'},
    {id:'3',name:'vanity.jpg', alt:'vanity cover', link:'https://open.spotify.com/album/6JgvhDCWYLwDbrNWkfUhAF'},
    {id:'4',name:'jaan.jpg', alt:'jaan cover', link:'https://open.spotify.com/album/0H6KQODTwu33DQeoZooyFG'},
    {id:'5',name:'lieidle.jpg', alt:'lie idle cover', link:'https://open.spotify.com/album/6sEq8PuLMIviUvg7hriipl'},
    {id:'6',name:'silkteeth.jpg', alt:'silk teeth cover', link:'https://open.spotify.com/album/6kv6W10vRfjODZ7Yhbsdhc'},
    {id:'7',name:'zaya.jpg', alt:'zaya cover', link:'https://open.spotify.com/album/0auExQ7XYqY6fEgYtZYWWp'},
    {id:'8',name:'legroom.jpg', alt:'leg room cover', link:'https://open.spotify.com/album/6dkbidb9B6Xn3D62dhxloJ'},

]


export default function Stream(){
    return(
        <div>
            <NavBar></NavBar>
            <div className="flex m-10 g-5 ">
            {covers.map(cover => {
                return(
                    <a key={cover.id} href={cover.link}><img alt={cover.alt} src={"covers/"+cover.name}  /></a>
                )
            })}
            </div>
            <Footer></Footer>
        </div>
    )
}