import Footer from "../components/footer";
import NavBar from "../components/navigation";



export default function About() {
    return (
        <div>
            <NavBar />
            <div className="flex flex-col sm:flex-row p-4 sm:p-10 gap-6 sm:gap-10 items-center w-full sm:items-start justify-self-center">
                <section className="w-full sm:w-1/2 text-base sm:text-lg mb-4 sm:mb-0">
                    capespring. is ever-evolving. The Nairobi-born artist has fostered a close relationship with music from a young age, teaching himself to produce at the age of 13.

                    With a keen interest in exploring vulnerability, capespring. combines influences ranging from genres such as Neo-Soul, post-punk, Jazz, and Flamenco. capespring. is a manifestation of how it feels to be wholeheartedly yourself.

                    Drawing inspiration from various facets of the music industry, and sometimes intentionally going against common practice, his work results in a unique mix of R&B-tinged avant-garde sounds with hints of tecno, folk, big band, and pop.
                    Major influences include the likes of Dijon, Vegyn, D’Angelo, Moses Sumney, Bon Iver, and many others. His work has been published in numerous blogs, Spotify editorial playlists, and earned him a publishing deal with esteemed French label Kitsuné musique.
                    <br />
                    <br />
                    <br />
                    Early encounters with Garageband on his dad's laptop at the age of 10 sparked capespring.’s interest in music. “I had my dad's laptop which had Garageband on it. And I used to use apple loops all the time and then think I'm the best producer,” he recounts.
                    Later on in high school, through being enrolled in music class, the young doyen was given access to Logic. “I asked my music teacher, “Can you hook me up with a version of logic?” And that's still the same one I use today,” he recounts.
                    The release of berries which was his official introduction to releasing music professionally. - <a href="https://tangazamagazine.com/features/2021/3/20/capespring-releases-diodrama" className="font-bold hover:underline">capesprings diodrama encourages us to find peace within ourselves - Monica Kemoli Savanne</a>
                </section>
                <img className="w-full sm:w-1/2 max-w-xs sm:max-w-none rounded shadow-md object-cover" src="capespring.jpg" alt="capespring portrait" />
            </div>
            <Footer />
        </div>
    );
}