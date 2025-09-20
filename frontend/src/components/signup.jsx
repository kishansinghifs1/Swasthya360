import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";

import PersonalInfo from "./PersonalInfo.jsx";
import ContactInfo from "./ContactInfo.jsx";
import MedicalInfo from "./MedicalInfo.jsx";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => step < 3 && setStep(step + 1);
  const prevStep = () => step > 1 && setStep(step - 1);

  return (
    <>
      {/* Hero Section in background */}
      <div className="relative">
        <Header />
        <section className="relative min-h-screen">
          {/* Here you can include your Hero component */}
          {/* <Hero /> */}
        </section>
      </div>

      {/* Overlay for blur + highlight sign-up card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
        <div className="relative group">
          {/* ✨ Animated shadow/glow layer */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-50 blur-2xl animate-movingShadow group-hover:opacity-70"></div>

          {/* SignUp Card */}
          <div className="relative flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
            {/* Logo & Heading */}
            <div className="flex items-center gap-2">
              <img
                src="/Swasthya360.png"
                alt="Swasthya360 Logo"
                className="h-16 w-16 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
              />
              <div className="text-center space-y-1">
                <h1 className="text-green-800 text-3xl font-bold">
                  Create Account
                </h1>
                <h2 className="text-gray-600 text-base">
                  Fill the details to sign up
                </h2>
              </div>
            </div>

            <h1 className="text-green-800 text-xl font-bold mb-3">
              Health Profile Setup
            </h1>

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-4">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex items-center">
                  <div
                    className={`w-7 h-7 flex items-center justify-center rounded-full text-white font-bold ${
                      step >= num ? "bg-green-700" : "bg-gray-300"
                    }`}
                  >
                    {num}
                  </div>
                  {num < 3 && (
                    <div
                      className={`w-10 h-1 ${
                        step > num ? "bg-green-700" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Step Forms */}
            {step === 1 && <PersonalInfo />}
            {step === 2 && <ContactInfo />}
            {step === 3 && <MedicalInfo />}

            {/* Buttons */}
            <div className="flex justify-between mt-3 w-full">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 hover:bg-gray-400 px-5 py-2 rounded-lg font-semibold"
                >
                  Previous
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold ml-auto"
                >
                  Next
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg font-semibold ml-auto"
                >
                  Submit
                </button>
              )}
            </div>

            {/* Already have account */}
            <div className="flex justify-center items-center gap-2 text-sm">
              <p className="text-gray-600">Already have an account?</p>
              <Link to="/signin">
                <button
                  type="button"
                  className="text-green-700 font-semibold hover:underline"
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
