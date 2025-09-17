import React from "react";
import { Link } from "react-router-dom";

const agents = [
  { name: "Check Symptoms", route: "/check-symptoms" },
  { name: "Vaccination Info", route: "/vaccination-info" },
  { name: "Emergency Help", route: "/emergency-help" },
  { name: "Disease Outbreaks", route: "/disease-outbreaks" },
  { name: "Language Help", route: "/language-help" },
  { name: "Health Records", route: "/health-records" },
];

// Mid-tone colors for cards (contrast against background)
const headerColors = [
  "bg-teal-500",
  "bg-sky-500",
  "bg-lime-500",
  "bg-green-600",
  "bg-orange-500",
  "bg-yellow-500",
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-200 via-blue-150 to-blue-100 shadow-md overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-800 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-800 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-green-800 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-10 w-80 h-80 bg-orange-800 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col space-y-8">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-blue-900 text-center md:text-left">
          Welcome to Swasthya360
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-black max-w-3xl text-center md:text-left">
          Health guidance you can trust – simple, clear, and in your language.  
          Check symptoms, get vaccination info, or find emergency help anytime!
        </p>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {agents.map((agent, idx) => (
            <Link
              key={idx}
              to={agent.route}
              className={`flex flex-col justify-center items-center p-6 rounded-xl shadow-md border-2 border-blue-900 ${headerColors[idx % headerColors.length]} hover:scale-105 transform transition cursor-pointer`}
            >
              <img
                src="/health-chatbot.png"
                alt={agent.name}
                className="w-16 h-16 mb-4"
              />
              {/* Updated span for proper wrapping */}
              <span className="font-semibold text-white text-center break-words">
                {agent.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
