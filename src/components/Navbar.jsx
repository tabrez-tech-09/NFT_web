import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 text-white absolute top-0 w-full z-50">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold tracking-wide">
        CR
      </Link>

      {/* Navigation */}
      <div className="hidden md:flex gap-10 text-gray-300 text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white transition"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-white transition"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* CTA */}
      <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
        Connect Wallet
      </button>

    </nav>
  );
}
