import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative shadow-md border-b-2 border-gray-200 bg-white">
      {/* Background Blobs */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-[28rem] h-[28rem] bg-teal-400 opacity-25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-400 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        {/* LEFT: Logo + Title */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/Swasthya360.png"
            alt="Swasthya360 Logo"
            className="h-20 w-20 object-cover rounded-full border border-cyan-400 shadow-sm"
          />
          <h1 className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-[#008080] via-[#00CED1] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h1>
        </Link>

        {/* CENTER: Navigation Menu */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a
            href="#home"
            className="text-gray-700 hover:text-[#008080] transition"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-[#008080] transition"
          >
            Features
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-[#008080] transition"
          >
            Services
          </a>
          <a
            href="#aboutus"
            className="text-gray-700 hover:text-[#008080] transition"
          >
            About Us
          </a>
          <a
            href="#contactus"
            className="text-gray-700 hover:text-[#008080] transition"
          >
            Contact
          </a>
        </nav>

        {/* RIGHT: Auth Buttons */}
        <div className="flex items-center space-x-3">
          <button className="text-gray-700 hover:text-[#008080] text-base font-medium">
            Sign In
          </button>
          <button className="px-4 py-2 bg-[#008080] text-white text-base font-medium rounded-md hover:bg-[#00CED1] transition">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
