import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Syringe,
  PhoneCall,
  AlertTriangle,
  Languages,
  FileText,
} from "lucide-react";

const agents = [
  {
    name: "Check Symptoms",
    route: "/check-symptoms",
    icon: <ShieldCheck size={40} />,
  },
  {
    name: "Vaccination Info",
    route: "/vaccination-info",
    icon: <Syringe size={40} />,
  },
  {
    name: "Emergency Help",
    route: "/emergency-help",
    icon: <PhoneCall size={40} />,
  },
  {
    name: "Disease Outbreaks",
    route: "/disease-outbreaks",
    icon: <AlertTriangle size={40} />,
  },
  {
    name: "Language Help",
    route: "/language-help",
    icon: <Languages size={40} />,
  },
  {
    name: "Health Records",
    route: "/health-records",
    icon: <FileText size={40} />,
  },
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 via-pink-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-orange-300 opacity-25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-400 opacity-15 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col space-y-8">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-[#001F3F] text-center"
        >
          Welcome to Swasthya360
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-[#001F3F] mx-auto text-center max-w-3xl opacity-90"
        >
          Health guidance you can trust – simple, clear, and in your language.
          Check symptoms, get vaccination info, or find emergency help anytime!
        </motion.p>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {agents.map((agent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <Link
                to={agent.route}
                className="flex flex-col justify-center items-center p-8 rounded-3xl shadow-xl bg-gradient-to-br from-orange-200 via-pink-100 to-white border border-orange-300 hover:scale-105 hover:shadow-2xl transform transition"
              >
                <div className="mb-4">{agent.icon}</div>
                <span className="font-semibold text-lg text-center text-[#001F3F]">
                  {agent.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
