import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative shadow-md border-t-4 border-[#008080] overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 opacity-25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* LEFT: Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold  font-serif bg-gradient-to-r from-[#008080] via-[#00FFFF] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h2>
          <p className="text-gray-700 text-xs md:text-sm mt-1">
            AI-Driven Public Health Chatbot for Disease Awareness
          </p>
        </div>

        {/* CENTER: Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
          <Link to="#privacy" className="text-gray-700 hover:text-[#008080] text-xs md:text-sm transition">
            Privacy Policy
          </Link>
          <Link to="#terms" className="text-gray-700 hover:text-[#008080] text-xs md:text-sm transition">
            Terms of Service
          </Link>
          <Link to="#contact" className="text-gray-700 hover:text-[#008080] text-xs md:text-sm transition">
            Contact
          </Link>
        </div>

        {/* RIGHT: Copyright */}
        <p className="text-gray-500 text-xs md:text-sm text-center md:text-right mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Swasthya360. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
