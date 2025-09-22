import React from "react";
import { X, Home, Info, Phone, User, LogOut, Briefcase, HelpCircle } from "lucide-react";

const Dashboard = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: "Your Profile >", icon: <User className="w-5 h-5" /> },
    { name: "Home >", icon: <Home className="w-5 h-5" /> },
    { name: "About Us >", icon: <Info className="w-5 h-5" /> },
    { name: "Services >", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Contact Us >", icon: <Phone className="w-5 h-5" /> },
    { name: "Log out >", icon: <LogOut className="w-5 h-5" /> },
    { name: "Help >", icon: <HelpCircle className="w-5 h-5" /> },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-72 bg-cyan-300 text-white p-6 rounded-r-2xl shadow-2xl transform 
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} 
        transition-all duration-500 ease-in-out z-50`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition"
        onClick={onClose}
      >
        <X size={26} />
      </button>

      {/* Logo + Title */}
      <div className="flex items-center space-x-3 mb-8">
        <img
          src="/Swasthya360.png"
          alt="Swasthya360 Logo"
          className="h-14 w-14 object-cover rounded-full border-2 border-white shadow-lg shadow-cyan-500/50"
        />
        <h1 className="text-2xl font-serif font-extrabold tracking-wide">
          Swasthya360
        </h1>
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-3 bg-cyan-700 hover:bg-cyan-800 p-3 rounded-lg cursor-pointer transition transform hover:translate-x-2 hover:scale-105"
          >
            <span className="text-white">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
