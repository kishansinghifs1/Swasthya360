// src/App.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaLink,
  FaStethoscope,
  FaSyringe,
  FaClinicMedical,
  FaBiohazard,
} from "react-icons/fa";
import Header from "./header";

const WhatsappBot = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("https://wa.me/15551234567");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <main className="flex flex-col items-center px-6 py-16 mt-10 text-center max-w-5xl mx-auto">
        <span className="inline-block text-sm bg-green-50 text-green-700 px-3 py-1 rounded-full mb-4">
          WhatsApp Chatbot
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Chat with our health assistant on WhatsApp
        </h2>
        <p className="text-gray-600 mb-10">
          Use WhatsApp to ask health questions, check symptoms, get vaccine
          reminders, and more. Tap the button below to continue in WhatsApp.
        </p>

        {/* Continue to WhatsApp box */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full">
          <h3 className="text-lg font-semibold mb-4">Continue to WhatsApp</h3>
          <p className="text-gray-600 mb-6">
            You’ll be redirected to a secure WhatsApp chat with our assistant.
            No account signup needed.
          </p>
          <div className="flex gap-4 mb-6">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium shadow"
            >
              <FaWhatsapp className="mr-2" /> Open WhatsApp Chat
            </a>
            <button
              onClick={handleCopy}
              className="flex-1 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium shadow"
            >
              <FaLink className="mr-2" /> {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>

        {/* What you can ask */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-6 text-left w-full">
          <h4 className="font-semibold text-green-800 mb-3">
            What you can ask
          </h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <FaStethoscope /> “I have a fever and cough. What should I do?”
            </li>
            <li className="flex items-center gap-2">
              <FaSyringe /> “Remind me of my child’s vaccine schedule.”
            </li>
            <li className="flex items-center gap-2">
              <FaClinicMedical /> “Nearest clinic for evening hours?”
            </li>
            <li className="flex items-center gap-2">
              <FaBiohazard /> “Any flu outbreaks in my area?”
            </li>
          </ul>
        </div>

        {/* Help section */}
        <div className="bg-white shadow rounded-xl p-6 mt-6 text-left w-full text-gray-600">
          <h4 className="font-semibold text-gray-800 mb-2">
            Having trouble opening WhatsApp?
          </h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              On mobile: The button opens the WhatsApp app. If it doesn’t,
              ensure WhatsApp is installed and try again.
            </li>
            <li>
              On desktop: You’ll be taken to WhatsApp Web. Keep your phone
              nearby to link your account.
            </li>
          </ul>
          <p className="mt-3">
            If you still can’t connect, use this link:{" "}
            <a
              href="https://wa.me/15551234567"
              className="text-teal-600 underline"
            >
              https://wa.me/15551234567
            </a>
          </p>
        </div>

        {/* Privacy */}
        <div className="bg-white shadow rounded-xl p-6 mt-6 text-left w-full text-gray-600">
          <h4 className="font-semibold text-gray-800 mb-2">Privacy & safety</h4>
          <p>
            We don’t store conversations without consent. For emergencies,
            contact local emergency services. This chat provides informational
            support and is not a substitute for professional medical advice.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-8 py-6 bg-gray-50 border-t text-gray-500 text-sm">
        <span>MediCare</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-teal-600">
            Help
          </a>
          <a href="#" className="hover:text-teal-600">
            Privacy
          </a>
          <a href="#" className="hover:text-teal-600">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WhatsappBot;
