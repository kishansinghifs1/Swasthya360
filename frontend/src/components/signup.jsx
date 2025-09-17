import { useState } from "react";
import { Link } from "react-router-dom";

import PersonalInfo from "./PersonalInfo.jsx";
import ContactInfo from "./ContactInfo.jsx";
import MedicalInfo from "./MedicalInfo.jsx";

const SignUp = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div class="grid place-items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-6 w-full h-[90vh] max-w-lg p-8 rounded-2xl shadow-lg">
        {step === 1 && (
          <div className="flex items-center gap-2">
            {/* Logo */}
            <img
              src="/Swasthya360.png"
              alt="Swasthya360 Logo"
              className="h-30 w-30 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
            {/* Heading */}
            <div className="text-center space-y-2">
              <h1 className="text-green-800 text-4xl font-bold">
                Create Account
              </h1>
              <h2 className="text-gray-600 text-lg">
                Fill the details to sign up
              </h2>
            </div>
          </div>
        )}
        <h1 className="text-green-800 text-2xl font-bold mb-3">
          Health Profile Setup
        </h1>
        <div className="flex items-center justify-center mb-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                  step >= num ? "bg-green-700" : "bg-gray-300"
                }`}
              >
                {num}
              </div>
              {num < 3 && (
                <div
                  className={`w-12 h-1 ${
                    step > num ? "bg-green-700" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        {step === 1 && <PersonalInfo />}

        {step === 2 && <ContactInfo />}

        {step === 3 && <MedicalInfo />}

        {/* next prev buttons */}
        <div className="flex justify-between mt-3 w-full">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded-lg font-semibold"
            >
              Previous
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold ml-auto"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Submit
            </button>
          )}
        </div>

        <div className="flex justify-center items-center gap-2 text-sm">
          <p className="text-gray-600">Already have an account?</p>
          <Link to="/signin">
            {" "}
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
  );
};

export default SignUp;
