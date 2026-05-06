
const SongsList = () => {
  return (
    <div className="w-full h-full flex justify-between items-center px-4 text-xl font-semibold mt-2 hover:bg-gray-900">
        <div className="flex w-60 items-center gap-8">
        <p className="text-gray-700">1</p>
        <div><img className="h-20 object-cover w-20 rounded-xl" src="https://imgs.search.brave.com/b161DrvgyzmK4J6VIB2Tl3V8dDeSkGoo-4VnJgi0WcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNjg0/ODU5NS5qcGc" alt="" /></div>
        <p className="text-white">Name</p>
        </div>
        <p  className="text-gray-700">Length</p>
    </div>
  )
}

export default SongsList
