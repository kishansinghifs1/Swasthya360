import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative shadow-md border-t-4 border-[#008080] overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-10 -left-10 w-56 h-56 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400 opacity-25 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-green-400 opacity-20 rounded-full blur-3xl"></div>

      {/* Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-xs md:text-sm">
        {/* LEFT: Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold font-serif bg-gradient-to-r from-[#008080] via-[#00FFFF] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h2>
          <p className="text-gray-700 mt-1">AI-Driven Public Health Chatbot</p>
        </div>

        {/* CENTER: Links & Info */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-gray-700">
          <a href="#privacy" className="hover:text-[#008080] transition">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-[#008080] transition">
            Terms of Service
          </a>
          <div id="contactus" className="mt-2">
            📞 Contact:{" "}
            <a href="tel:9511963749" className="hover:text-[#008080]">
              9511963749
            </a>
          </div>

          <div id="about" className="mt-2">
            ℹ️ About Us: We are dedicated to making healthcare more accessible
            through AI-driven solutions.
          </div>
        </div>

        {/* RIGHT: Copyright */}
        <p className="text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Swasthya360. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
