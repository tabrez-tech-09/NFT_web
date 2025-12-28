import Rectangle22742 from "../assets/Rectangle22742.png";
 import Rectangle22743 from "../assets/Rectangle22743.png";
 import Rectangle22744 from "../assets/Rectangle22744.png";
 import Rectangle22745 from "../assets/Rectangle22745.png";
  import Rectangle22746 from "../assets/Rectangle22746.png";
   import Rectangle22747 from "../assets/Rectangle22747.png";

export default function TrendingSection() {
 const items = [
  {
    name: "Sebastian",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22742,
  },
  {
    name: "Farhat Deniz",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22743,
  },
  {
    name: "Javier Miranda",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22744,
  },
  {
    name: "Polina Kondrashova",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22745,
  },
  {
    name: "Milad Fakurian",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22746,
  },
  {
    name: "Erick Butler",
    subtitle: "Golden Flower",
    price: "2.3 ETH",
    img: Rectangle22747,
  },
];


  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black px-10 py-28 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-xl mb-24">
          <h2 className="text-5xl font-bold leading-tight">Trending This Week</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-2 gap-20">

          {/* Left Column */}
          <div className="space-y-24">
            {[items[0], items[2], items[4]].map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-24 pt-32">
            {[items[1], items[3], items[5]].map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

        </div>

        {/* Explore Button */}
        <div className="flex justify-end mt-28">
          <button className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
            Explore More ↗
          </button>
        </div>

      </div>
    </section>
  );
}

function Card({ item }) {
  return (
    <div>
      <div className="flex justify-between items-end mb-4">
        <div>
          <h3 className="text-xl font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-400">{item.subtitle}</p>
        </div>
        <span className="text-purple-400 font-semibold">{item.price}</span>
      </div>

      <div className="rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[380px] object-cover hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
}
