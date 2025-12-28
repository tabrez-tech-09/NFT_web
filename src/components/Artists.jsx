import Ellipse434 from "../assets/Ellipse434.png";
import Ellipse435 from "../assets/Ellipse426.png";
import Ellipse436 from "../assets/Ellipse436.png";
import Ellipse437 from "../assets/Ellipse437.png";

export default function Artists() {
  const artists = [
    { name: "Ferhat Deniz", img: Ellipse434 },
    { name: "Sebastian", img: Ellipse435 },
    { name: "Javier Miranda", img: Ellipse436 },
    { name: "Erick Butler", img: Ellipse437 },
  ];

  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-black via-purple-900 to-black text-white px-12 py-28">
      
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center mb-24">
          <h2 className="text-5xl font-bold">Popular Artists</h2>
          <button className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
            View all Artists ↗
          </button>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-center">
          {artists.map((artist, i) => (
            <div key={i} className="group cursor-pointer">

              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-transparent 
                              group-hover:border-purple-500 transition-all duration-300 shadow-xl">
                <img
                  src={artist.img}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <p className="mt-6 text-2xl font-medium tracking-wide">
                {artist.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
