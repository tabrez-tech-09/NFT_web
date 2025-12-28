import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black via-purple-900 to-fuchsia-600 text-white px-12 py-16">
      
      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        
        <h2 className="text-3xl font-bold">NFTme</h2>

        <div className="flex gap-10 text-lg">
          <a className="hover:text-purple-300">Explore</a>
          <a className="hover:text-purple-300">Marketplace</a>
          <a className="hover:text-purple-300">Artists</a>
          <a className="hover:text-purple-300">Contact</a>
        </div>

        <div className="flex gap-4">
          {[FaInstagram, FaFacebookF, FaTwitter].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/20 my-10"></div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm text-gray-200">
        <p>Privacy policy</p>
        <p>Copyright © Kartik Bansal 2022. All Rights Reserved.</p>
        <p>Terms of service</p>
      </div>
    </footer>
  );
}
