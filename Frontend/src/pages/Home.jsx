import ArtistCard from "../components/ArtistCard"
import ArtistHeading from "../components/ArtistHeading"
import PopularHeading from "../components/PopularHeading"
import RecentHeading from "../components/RecentHeading"
import RecommendedHeading from "../components/RecommendedHeading"
import SongsCard from "../components/SongsCard"

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-black px-30 py-20">
        <div className="h-100">
            <PopularHeading />
            <div className="w-full h-full py-4 flex overflow-x-scroll scrollbar-hide">
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
            </div>
        </div>

        <div className="h-100">
            <RecommendedHeading />
            <div className="w-full h-full py-4 flex overflow-x-scroll scrollbar-hide">
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
            </div>
        </div>

        <div className="h-100">
            <ArtistHeading />
            <div className="w-full h-full py-4 flex overflow-x-scroll scrollbar-hide">
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
                <ArtistCard />
            </div>
        </div>

        <div className="h-100">
            <RecentHeading />
            <div className="w-full h-full py-4 flex overflow-x-scroll scrollbar-hide">
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
                <SongsCard />
            </div>
        </div>

       
    </div>
  )
}

export default Home
