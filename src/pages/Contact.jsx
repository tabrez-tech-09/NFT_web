export default function Contact() {
  return (
    <div className="bg-black text-white">

      {/* Hero */}
      <section className="min-h-[50vh] bg-gradient-to-br from-black via-purple-900 to-black flex items-center px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-extrabold">Contact Us</h1>
          <p className="mt-6 text-gray-300 max-w-xl text-lg">
            Have a question, partnership idea, or need support?  
            Our team is always ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Info */}
          <div>
            <h2 className="text-4xl font-bold">Get in Touch</h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Whether you are an artist, collector, investor, or simply curious —  
              we’d love to hear from you.
            </p>

            <div className="mt-10 space-y-6 text-gray-300">
              <p>📧 support@nftmarket.io</p>
              <p>📞 +91 82711 96675</p>
              <p>📍 New Delhi, India</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-semibold mb-8">Send a Message</h3>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-black/40 outline-none border border-white/10"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-black/40 outline-none border border-white/10"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl bg-black/40 outline-none border border-white/10"
              ></textarea>

              <button className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-105 transition">
                Send Message ↗
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
