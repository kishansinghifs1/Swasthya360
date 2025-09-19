import React from 'react';
import {
  Brain, MessageSquare, LineChart, Calendar, Shield, Smartphone, Stethoscope, Users
} from 'lucide-react';

const features = [
  {
    title: 'AI Symptom Analysis',
    description: 'Advanced AI analyzes your symptoms and provides preliminary assessments based on medical knowledge.',
    icon: Brain,
    color: 'text-orange-500',
  },
  {
    title: '24/7 Chat Support',
    description: 'Get instant responses to your health questions anytime, anywhere with our intelligent chatbot.',
    icon: MessageSquare,
    color: 'text-green-500',
  },
  {
    title: 'Health Monitoring',
    description: 'Track vital signs, symptoms, and health metrics with personalized insights and recommendations.',
    icon: LineChart,
    color: 'text-blue-500',
  },
  {
    title: 'Appointment Scheduling',
    description: 'Seamlessly schedule appointments with healthcare providers based on AI recommendations.',
    icon: Calendar,
    color: 'text-yellow-500',
  },
  {
    title: 'Privacy Protected',
    description: 'Ensuring your personal health data is kept secure and confidential with robust privacy measures.',
    icon: Shield,
    color: 'text-red-500',
  },
  {
    title: 'Mobile Optimized',
    description: 'Access all features smoothly on any device, providing a seamless user experience on the go.',
    icon: Smartphone,
    color: 'text-green-500',
  },
  {
    title: 'Medical Insights',
    description: 'Receive data-driven insights to better understand your health trends and make informed decisions.',
    icon: Stethoscope,
    color: 'text-blue-500',
  },
  {
    title: 'Family Care',
    description: 'Easily manage health profiles for your entire family in one convenient place.',
    icon: Users,
    color: 'text-sky-500',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features"className="relative bg-green-50 py-16 px-4 font-sans text-center overflow-hidden">
      
      {/* Optional: Floating background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-green-200/30 rounded-full -top-16 -left-16 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-green-300/20 rounded-full top-10 right-0 blur-3xl"></div>
        <div className="absolute w-80 h-80 bg-green-100/30 rounded-full bottom-0 left-1/2 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-semibold text-gray-800">Powerful Features for Your Health</h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          Discover how Swasthya360's advanced AI technology can transform your healthcare experience with intelligent, personalized, and accessible health solutions.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-lg flex flex-col items-start text-left"
            >
              <div className={`p-3 rounded-full ${feature.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
