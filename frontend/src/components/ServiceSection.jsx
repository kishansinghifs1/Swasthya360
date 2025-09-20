import React from 'react';
import {
  Brain, Languages, FileText
} from 'lucide-react';

const cards = [
  {
    title: 'Symptom Checker',
    description: 'Quickly analyze your symptoms with our AI-powered tool to get instant insights and advice.',
    icon: Brain,
    color: 'text-blue-500',
  },
  {
    title: 'Language Help',
    description: 'Get real-time translation and support for medical terms in multiple languages for clear communication.',
    icon: Languages,
    color: 'text-green-500',
  },
  {
    title: 'Health Record',
    description: 'Securely store and access your personal health records anytime, anywhere for easy management.',
    icon: FileText,
    color: 'text-purple-500',
  },
];

const ServiceSection = () => {
  return (
    <section  id="services" className="bg-gray-50 py-16 px-4 font-sans text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Service We Provide</h2>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Unlock a new level of health management with our premium, personalized features.
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className={`p-4 rounded-full ${card.color} bg-gray-100`}>
                <Icon className="w-12 h-12" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-gray-800">{card.title}</h3>
              <p className="mt-2 text-gray-600">{card.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceSection;