import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            AI-Driven Public Health Chatbot <br />
            <span className="text-blue-600">for Disease Awareness</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed">
            A multilingual AI chatbot that empowers rural and semi-urban
            populations with preventive healthcare knowledge, disease symptom
            awareness, and vaccination schedules — available anytime via
            WhatsApp or SMS.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              🚀 Start Chatting
            </button>
            <button className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Content / Illustration */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="/health-chatbot.png" // Place an image in public folder
            alt="AI Health Chatbot"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
