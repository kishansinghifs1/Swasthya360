import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, Activity } from "lucide-react"; 

const AboutSwasthya = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#001F3F]">
            Your AI Health Companion
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-blue-600">Swasthya360</span> is your 
            personal AI assistant for health. Whether you need to check symptoms, 
            get vaccination updates, track nearby disease outbreaks, or even chat 
            directly on WhatsApp — we’ve got you covered.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">✅ Symptom Checker & Health Guidance</li>
            <li className="flex items-center gap-2">✅ Vaccination Information & Reminders</li>
            <li className="flex items-center gap-2">✅ Disease Outbreak Alerts</li>
            <li className="flex items-center gap-2">✅ WhatsApp Health Chatbot</li>
            <li className="flex items-center gap-2">✅ Multilingual Support</li>
          </ul>

          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all">
            Explore Features
          </button>
        </motion.div>

        {/* Right Image + Floating Badges */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          <img
            src="hero.jpg"
            alt="Swasthya360 AI Assistant"
            className="rounded-2xl shadow-lg w-full max-w-lg"
          />

          {/* Floating AI-Powered Icon */}
          <div className="absolute -top-6 right-6 bg-pink-100 rounded-full w-18 h-18 shadow-md flex items-center justify-center animate-float">
            <HeartPulse className="w-6 h-6 text-pink-600" />
          </div>

          {/* Floating 24/7 Available Icon */}
          <div className="absolute -bottom-6 left-6 bg-green-100 rounded-full w-17 h-17 shadow-md flex items-center justify-center animate-float">
            <Activity className="w-6 h-6 text-green-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSwasthya;
