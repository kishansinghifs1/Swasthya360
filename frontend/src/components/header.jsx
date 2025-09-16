import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/Swasthya360.png" alt="Swasthya360 Logo" className="h-10 w-10 object-contain" />
          <h1 className="text-xl font-bold text-blue-700">Swasthya360</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition">About Us</a>
          <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition">Services</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition">Contact</a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
