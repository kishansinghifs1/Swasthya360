import React from "react";
import { Shield, Brain, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-to-r from-orange-50 via-pink-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-orange-300 opacity-25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-400 opacity-15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* LEFT CONTENT */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-[#001F3F]">
            Your <span className="text-[#008080]">AI-Powered</span>{" "}
            <span className="text-orange-500">Health Assistant</span>
          </h1>
          <p className="text-[#001F3F] text-base md:text-lg opacity-90">
            Get instant, personalized health guidance 24/7 with Swasthya360.
            Our advanced AI provides accurate health insights, symptom analysis,
            and wellness recommendations tailored just for you.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="px-3 py-1 rounded-full border border-[#001F3F]/30 text-sm font-medium flex items-center space-x-2 text-[#001F3F]">
              <Brain className="w-4 h-4 text-orange-500" />
              <span>AI-Powered</span>
            </span>
            <span className="px-3 py-1 rounded-full border border-[#001F3F]/30 text-sm font-medium flex items-center space-x-2 text-[#001F3F]">
              <Users className="w-4 h-4 text-green-600" />
              <span>24/7 Available</span>
            </span>
            <span className="px-3 py-1 rounded-full border border-[#001F3F]/30 text-sm font-medium flex items-center space-x-2 text-[#001F3F]">
              <Shield className="w-4 h-4 text-teal-600" />
              <span>Secure & Private</span>
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg shadow-md transition">
              Start Free Consultation
            </button>
            <button className="px-6 py-3 bg-white border border-[#001F3F]/30 text-[#001F3F] font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start mt-6">
            <div>
              <h3 className="text-3xl font-bold text-orange-500">50K+</h3>
              <p className="text-[#001F3F] text-sm opacity-80">Users Helped</p>
            </div>
            <div>
              <h3 className="text-3xl font-extrabold text-green-600">99.9%</h3>
              <p className="text-[#001F3F] text-sm opacity-80">Accuracy Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#008080]">24/7</h3>
              <p className="text-[#001F3F] text-sm opacity-80">Support</p>
            </div>
          </div>
        </div>

<div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
  <div className="relative flex items-center justify-center">
    {/* Image */}
    <img
      src="/landingpage.jpg"
      alt="AI Health Assistant"
      className="rounded-3xl shadow-xl w-5/6 relative z-10"
    />
    <div className="absolute -top-1 -right-1 w-24 h-24 bg-orange-300 rounded-full  opacity-30 "></div> 
    <div className="absolute -bottom-1 -left-1 w-20 h-20 bg-pink-400 rounded-full opacity-25 "></div>

    {/* Floating AI-Powered Badge */}
    <div
      className="absolute bg-orange-500 rounded-2xl px-3 py-1 shadow-md flex items-center space-x-2 z-20 animate-float"
      style={{ top: '10%', left: '10%' }}
    >
      
      <span className="text-lg font-medium text-white">AI-Powered</span>
    </div>

    {/* Floating 24/7 Support Badge */}
    <div
      className="absolute bg-green-600 rounded-xl px-3 py-1 shadow-md flex items-center space-x-2 z-20 animate-float"
      style={{ bottom: '10%', right: '10%' }}
    >
      <span className="text-sm font-medium text-white">Always Available</span>
    </div>
  </div>
</div>



      </div>
    </section>
  );
};

export default HeroSection;
