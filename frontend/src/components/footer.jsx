import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer  className="bg-[#001F3F] text-gray-200 relative overflow-hidden pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* LEFT: Brand Info */}
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-bold font-serif bg-gradient-to-r from-[#008080] via-[#00CED1] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h2>
          <p className="text-gray-300">
            AI-Driven Public Health Chatbot bringing accessible healthcare through AI.
          </p>
        </div>

        {/* CENTER: Links & Contact */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="font-semibold text-gray-100 mb-1">Quick Links</h3>
          <a href="#privacy" className="hover:text-[#00CED1] transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-[#00CED1] transition">Terms of Service</a>
          <div id="contactus" className="mt-2">
            📞 Contact:{" "}
            <a href="tel:9511963749" className="hover:text-[#00CED1]">9511963749</a>
          </div>
        </div>

        {/* RIGHT: Social & About */}
        <div className="text-center md:text-right space-y-3">
          <h3 className="font-semibold text-gray-100 mb-1">Follow Us</h3>
          <div className="flex justify-center md:justify-end gap-4 text-gray-300">
            <a href="#" className="hover:text-[#00CED1] transition"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#00CED1] transition"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#00CED1] transition"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#00CED1] transition"><Linkedin className="w-5 h-5" /></a>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} Swasthya360. All rights reserved.
          </p>
        </div>

      </div>

      {/* Optional: subtle top wave */}
      <div className="absolute -top-10 left-0 w-full h-10 bg-gradient-to-b from-[#001F3F] to-transparent"></div>
    </footer>
  );
};

export default Footer;
