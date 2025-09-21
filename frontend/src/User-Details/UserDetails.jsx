import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import MedicalDetails from "./MedicalDetails";

const UserDetails = () => {
  const [step, setStep] = useState(1);
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
    emergencyContact: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    profileImage: "",
    medicalConditions: [],
    allergies: "",
    currentMedications: [],
  });

  const handleReset = () => {
    setUserDetails({
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      emergencyContact: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      profileImage: "",
      medicalConditions: [],
      allergies: "",
      currentMedications: [],
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex justify-center items-start py-10 px-4">
      <div className="w-full max-w-4xl p-8 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl border border-gray-200">
        <h1 className="text-3xl font-bold text-[#001F3F] mb-6 text-center">
          User Setup
        </h1>

        {step === 1 ? (
          <PersonalDetails userDetails={userDetails} setUserDetails={setUserDetails} />
        ) : (
          <MedicalDetails userDetails={userDetails} setUserDetails={setUserDetails} />
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold"
            >
              Previous
            </button>
          )}
          {step < 2 && (
            <button
              onClick={() => setStep(step + 1)}
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition font-semibold"
            >
              Next
            </button>
          )}
          {step === 2 && (
            <button
              className="px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition font-semibold"
            >
              Complete Setup
            </button>
          )}
          <button
            onClick={handleReset}
            className="px-6 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition font-semibold"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
