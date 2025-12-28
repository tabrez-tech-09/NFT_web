export default function Featured() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black flex items-center px-10 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Artwork */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e"
            alt="Bitcoin NFT"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold">
            Bitcoin <br /> Art Work
          </h1>

          <p className="mt-4 text-gray-300">
            Created by <span className="text-purple-400">Jonathan Borba</span>
          </p>

          <div className="flex flex-wrap items-center gap-10 mt-10">
            <div>
              <p className="text-gray-400">Current Bid</p>
              <h3 className="text-3xl font-bold mt-1">1.09 ETH</h3>
              <p className="text-gray-400">$1,835</p>
            </div>

            <div className="h-14 w-px bg-gray-600"></div>

            <div>
              <p className="text-gray-400 mb-2">Auction Ends In</p>
              <div className="flex gap-6">
                {["18", "57", "14"].map((v, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-bold">{v}</p>
                    <p className="text-gray-400 text-sm">
                      {["Hours", "Minutes", "Seconds"][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="mt-12 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
            View Art Work ↗
          </button>
        </div>

      </div>
    </section>
  );
}
