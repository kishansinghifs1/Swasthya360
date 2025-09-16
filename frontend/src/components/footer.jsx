import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Swasthya360</h2>
          <p className="text-blue-100 text-sm">AI-Driven Public Health Chatbot for Disease Awareness</p>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#privacy" className="text-blue-100 hover:text-white text-sm">Privacy Policy</a>
          <a href="#terms" className="text-blue-100 hover:text-white text-sm">Terms of Service</a>
          <a href="#contact" className="text-blue-100 hover:text-white text-sm">Contact</a>
        </div>

        {/* Copyright */}
        <p className="text-blue-100 text-sm">&copy; {new Date().getFullYear()} Swasthya360. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
