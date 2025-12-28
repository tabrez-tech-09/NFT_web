export default function About() {
  return (
    <div className="bg-black text-white">

      {/* Hero Section */}
      <section className="min-h-[70vh] bg-gradient-to-br from-black via-purple-900 to-black flex items-center px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="text-6xl font-extrabold leading-tight">
              Discover, Collect <br /> & Sell Digital Art
            </h1>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              We are building the future of digital ownership — empowering creators and collectors
              through decentralized NFT technology.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-2 bg-purple-600 rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative bg-black rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-semibold">Why Choose Us?</h3>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li>🚀 Secure blockchain marketplace</li>
                <li>🎨 Premium curated collections</li>
                <li>🤝 Direct artist collaboration</li>
                <li>💎 Transparent royalty system</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            ["120K+", "Active Users"],
            ["45K+", "NFT Artworks"],
            ["9K+", "Artists"],
            ["320M+", "Trade Volume"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-purple-400">{value}</h3>
              <p className="mt-2 text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 px-12 bg-gradient-to-br from-black via-purple-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold">Our Vision</h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            To create the world’s most trusted and creative NFT ecosystem — 
            where technology meets art, and passion meets possibility.
          </p>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-5xl font-bold">Built for Creators</h2>
            <p className="mt-6 text-gray-300 text-lg leading-relaxed">
              Artists get full control over their work, royalties, and audience.
              Collectors gain access to exclusive, rare, and authenticated art.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-semibold">Join Our Community</h3>
            <p className="mt-4 text-gray-100">
              Become part of a global creative movement.
            </p>
            <button className="mt-8 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Start Creating ↗
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

