import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";

// Dummy step components
const PersonalInfo = () => (
  <div className="flex flex-col gap-4 w-full">
    <label>
      Full Name:
      <input
        type="text"
        placeholder="Enter your Full name"
        className="border border-gray-400 p-2 rounded-lg w-full"
      />
    </label>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col gap-4 w-full">
    <label>
      Email:
      <input
        type="email"
        placeholder="Enter your Email"
        className="border border-gray-400 p-2 rounded-lg w-full"
      />
    </label>
    <label>
      Password:
      <input
        type="password"
        placeholder="Enter your Password"
        className="border border-gray-400 p-2 rounded-lg w-full"
      />
    </label>
  </div>
);

const MedicalInfo = () => (
  <div className="flex flex-col gap-4 w-full">
    <label>
      Age:
      <input
        type="number"
        placeholder="Enter your Age"
        className="border border-gray-400 p-2 rounded-lg w-full"
      />
    </label>
    <label>
      Gender:
      <select className="border border-gray-400 p-2 rounded-lg w-full">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </label>
  </div>
);

const SignUp = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <>
      <div className="relative">
        <Header />
        <section className="relative min-h-screen"></section>
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
        <div className="relative group w-full max-w-md">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-50 blur-2xl animate-movingShadow group-hover:opacity-70"></div>

          <div className="relative flex flex-col justify-center items-center gap-6 p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
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

            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-4 w-full">
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
            <form className="flex flex-col gap-4 w-full">
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
            </form>

            {/* Already have account */}
            <div className="flex justify-center items-center gap-2 text-sm mt-4">
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
