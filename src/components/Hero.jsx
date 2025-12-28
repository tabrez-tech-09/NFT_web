import heroArt from "../assets/hero.img.jpg";
import EllipseArt from "../assets/ellipseArt.png";
import Ellipse from "../assets/Ellipse.png";
import herosec from "../assets/herosec.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white flex items-center px-10 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Discover Rare <br />
            Collections Of <br />
            <span className="text-purple-500">Art & NFT’s</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg max-w-md">
            Create, Explore, & Collect Digital Art NFTs
          </p>

          <button className="mt-8 px-10 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold hover:scale-105 transition-all shadow-lg">
            EXPLORE
          </button>

          <div className="flex gap-14 mt-16">
            <Stat value="32K+" label="Artwork" />
            <Stat value="20K+" label="Auctions" />
            <Stat value="10K+" label="Artists" />
          </div>
        </div>

        {/* ================= RIGHT CARDS ================= */}
        <div className="relative flex justify-center items-center">

          {/* Glow */}
          <div className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"></div>

          {/* Back Blue Card */}
          <div className="absolute -left-20 top-8 w-72 h-96 rounded-2xl overflow-hidden rotate-[-14deg] border-4 border-white shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <img src={herosec} className="w-full h-full object-cover" />
          </div>

          {/* Bottom Bid Card */}
          <div className="absolute -bottom-12 left-12 w-72 p-4 rounded-xl bg-gradient-to-r from-purple-700 to-pink-600 rotate-[-6deg] shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 mb-2">
              <img src={Ellipse} className="w-7 h-7 rounded-full border border-white" />
              <p className="text-sm">Current Bid</p>
            </div>
            <p className="font-bold flex items-center gap-1 text-lg">⟠ 2.8 ETH</p>
          </div>

          {/* Main NFT Card */}
          <div className="relative z-10 w-80 bg-white rounded-2xl overflow-hidden border-4 border-white shadow-[0_40px_120px_rgba(0,0,0,0.7)]">

            <img src={heroArt} className="w-full h-64 object-cover" />

            <div className="p-5 bg-gradient-to-r from-purple-600 to-pink-500">

              <div className="flex justify-between text-sm">
                <div className="flex items-center gap-2">
                  <img src={EllipseArt} className="w-9 h-9 rounded-full border-2 border-white" />
                  <div>
                    <p className="font-semibold">Laura</p>
                    <p className="text-xs opacity-80">0.21 Weth</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs opacity-80">Remaining Time</p>
                  <p className="font-bold">18h : 57m : 14s</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-5">
                <div>
                  <p className="text-xs opacity-80">Current Bid</p>
                  <p className="font-bold flex items-center gap-1 text-lg">⟠ 2.8 ETH</p>
                </div>

                <button className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition shadow-md">
                  PLACE A BID
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="text-gray-400">{label}</p>
    </div>
  );
}
