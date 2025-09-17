import React from "react";
import { Link } from "react-router-dom";
import { UserCircle, Menu } from "lucide-react";
import EmergencyButton from "./EmergencyButton";

const Header = ({ onMenuClick }) => {
  return (
    <header className="relative shadow-md border-b-5 border-[#008080]">
      {/* 🎨 Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-orange-400 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 opacity-25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-green-400 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full flex justify-between items-center h-36 md:h-40 relative px-6 md:px-8">
        {/* LEFT: Dashboard + Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Sidebar Trigger */}
          <button onClick={onMenuClick}>
            <Menu className="h-12 w-12 text-[#008080] hover:text-[#00CED1] transition" />
          </button>

          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/Swasthya360.png"
              alt="Swasthya360 Logo"
              className="h-29 w-29 md:h-29 md:w-29 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
            <h1 className="text-6xl md:text-4xl font-extrabold font-serif bg-gradient-to-r from-[#008080] via-[#00FFFF] to-[#228B22] bg-clip-text text-transparent tracking-wide">
              Swasthya360
            </h1>
          </Link>
        </div>

        {/* RIGHT: Emergency + Profile + Sign In/Sign Up */}
        <div className="flex items-center space-x-4">
          <EmergencyButton />


          <button className="px-4 py-3 bg-[#008080] text-white rounded-lg hover:bg-[#00CED1] transition font-semibold">
            Sign In
          </button>

          <button className="px-4 py-3 bg-gradient-to-r from-[#7CFC00] to-[#228B22] text-white rounded-lg hover:opacity-90 transition font-semibold shadow-md">
            Sign Up
          </button>
          <Link to="/profile">
            <UserCircle className="h-13 w-16 md:h-10 md:w-15 text-[#008080] hover:text-[#00CED1] transition" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
