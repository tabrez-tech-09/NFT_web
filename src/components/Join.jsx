import joinImg from "../assets/ctaimg.png";
export default function Join() {
  return (
    <section className="bg-gradient-to-br from-black via-purple-900 to-black px-12 py-32 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={joinImg}
          className="rounded-3xl shadow-xl"
        />

        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Join The Community And Get The Best NFT Collection
          </h2>

          <button className="mt-10 px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl font-semibold">
            Join Community
          </button>
        </div>
      </div>
    </section>
  );
}
