import React from "react";
import { X, Home, Info, Phone,User,LogOut, Briefcase,HelpCircle } from "lucide-react";

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
      className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-teal-600 to-teal-700 text-white p-6 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg z-50`}
    >
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white hover:text-gray-200" onClick={onClose}>
        <X size={26} />
      </button>

      {/* Logo + Title */}
      <div className="flex items-center space-x-3 mb-10">
        <img
          src="/Swasthya360.png"
          alt="Swasthya360 Logo"
          className="h-14 w-14 object-cover rounded-full border-2 border-cyan-300 shadow-md"
        />
        <h1 className="text-2xl font-serif bg-blend-color-burn font-extrabold tracking-wide">Swasthya360</h1>
      </div>

      {/* Menu Items */}
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center space-x-3 bg-teal-800 bg-opacity-40 hover:bg-opacity-70 p-3 rounded-lg cursor-pointer transition"
          >
            <span className="text-cyan-300">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
