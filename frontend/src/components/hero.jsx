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
    <section className="relative overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-24 flex flex-col space-y-8">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-orange-500 text-center"
        >
          Welcome to Swasthya360
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-black mx-auto text-center max-w-3xl"
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
                className={`flex flex-col justify-center items-center p-8 rounded-2xl shadow-lg bg-orange-200 text-black border-2 border-orange-500 hover:scale-105 hover:shadow-2xl transform transition`}
              >
                <div className="mb-4">{agent.icon}</div>
                <span className="font-semibold text-lg text-center">
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
