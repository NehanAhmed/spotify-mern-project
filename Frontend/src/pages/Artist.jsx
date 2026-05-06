import ArtistImageBanner from "../components/ArtistImageBanner"
import SongsList from "../components/SongsList"

const Artist = () => {
  return (
    <div className="w-full min-h-screen px-26 py-14 bg-black">
        <div className="bg-gray-950 w-full rounded-2xl overflow-hidden">
            <ArtistImageBanner />
            <h3 className="text-white text-2xl font-bold mt-4">Songs:</h3>
            <div className="flex flex-col">
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            <SongsList />
            </div>
        </div>
    </div>
  )
}

export default Artist
