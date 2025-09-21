const medicalConditions = [
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Heart Disease",
  "Allergies",
  "Kidney Disease",
  "Liver Disease",
  "Cancer",
  "Other",
];

const medicationsList = [
  "Painkiller",
  "Antibiotic",
  "Vitamin Supplements",
  "Insulin",
  "Blood Pressure Meds",
  "Inhaler",
  "Other",
];

const MedicalDetails = ({ userDetails, setUserDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (name, value) => {
    setUserDetails((prev) => {
      const list = prev[name];
      if (list.includes(value)) {
        return { ...prev, [name]: list.filter((v) => v !== value) };
      } else {
        return { ...prev, [name]: [...list, value] };
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-2">
          <label className="block font-medium text-gray-700 mb-1">Medical Conditions</label>
          <div className="flex flex-wrap gap-3">
            {medicalConditions.map((cond) => (
              <button
                key={cond}
                type="button"
                onClick={() => handleCheckbox("medicalConditions", cond)}
                className={`px-4 py-2 rounded-full border transition ${
                  userDetails.medicalConditions.includes(cond)
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {cond}
              </button>
            ))}
          </div>
        </div>
        <div className="col-span-2">
          <label className="block font-medium text-gray-700 mb-1">Allergies</label>
          <input
            type="text"
            name="allergies"
            value={userDetails.allergies}
            onChange={handleChange}
            placeholder="Peanuts, Dust, etc."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div className="col-span-2">
          <label className="block font-medium text-gray-700 mb-1">Current Medications</label>
          <div className="flex flex-wrap gap-3">
            {medicationsList.map((med) => (
              <button
                key={med}
                type="button"
                onClick={() => handleCheckbox("currentMedications", med)}
                className={`px-4 py-2 rounded-full border transition ${
                  userDetails.currentMedications.includes(med)
                    ? "bg-blue-500 text-white border-blue-800"
                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                }`}
              >
                {med}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalDetails;
