import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Syringe,
  AlertTriangle,
  MessageCircle,
  Phone,
  UserCircle,
} from "lucide-react";

// Each card now has its own accent color 🎨
const agents = [
  {
    name: "Symptom Checker",
    route: "/check-symptoms",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600",
  },
  {
    name: "Vaccination Info",
    route: "/vaccination-info",
    icon: <Syringe className="w-8 h-8" />,
    color: "bg-green-50 text-green-600",
  },
  {
    name: "Disease Outbreaks",
    route: "/disease-outbreaks",
    icon: <AlertTriangle className="w-8 h-8" />,
    color: "bg-red-50 text-red-600",
  },
  {
    name: "Health Chatbot",
    route: "/health-chatbot",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "WhatsApp Chatbot",
    route: "/whatsapp-chatbot",
    icon: <Phone className="w-8 h-8" />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "User Details",
    route: "/user-details",
    icon: <UserCircle className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600",
  },
];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 md:py-28 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-[28rem] h-[28rem] bg-indigo-200 opacity-25 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-200 opacity-15 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center space-y-8">
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Welcome to Swasthya360
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl"
        >
          Your trusted health companion. Check symptoms, explore vaccination
          info, track disease outbreaks, and chat with AI-powered assistants –
          all in one place.
        </motion.p>

        {/* Agent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 w-full">
          {agents.map((agent, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <Link
                to={agent.route}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
              >
                <div
                  className={`w-16 h-16 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${agent.color}`}
                >
                  {agent.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {agent.name}
                </h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
