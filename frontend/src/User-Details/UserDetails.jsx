const medicalConditionsList = [
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Heart Disease",
  "Kidney Disease",
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
      const list = prev[name] || [];
      if (list.includes(value)) {
        return { ...prev, [name]: list.filter((v) => v !== value) };
      } else {
        return { ...prev, [name]: [...list, value] };
      }
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6">
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Main Medical Condition
        </label>
        <input
          type="text"
          name="medicalCondition"
          value={userDetails.medicalCondition}
          onChange={handleChange}
          placeholder="e.g. Diabetes"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        />
      </div>
      <div>
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
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Current Medication
        </label>
        <input
          type="text"
          name="currentMedication"
          value={userDetails.currentMedication}
          onChange={handleChange}
          placeholder="e.g. Insulin"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Other Medical Conditions
        </label>
        <div className="flex flex-wrap gap-3">
          {medicalConditionsList.map((cond) => (
            <button
              key={cond}
              type="button"
              onClick={() => handleCheckbox("medicalConditions", cond)}
              className={`px-4 py-2 rounded-full border transition ${
                userDetails.medicalConditions?.includes(cond)
                  ? "bg-red-500 text-white border-red-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {cond}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Common Medications
        </label>
        <div className="flex flex-wrap gap-3">
          {medicationsList.map((med) => (
            <button
              key={med}
              type="button"
              onClick={() => handleCheckbox("currentMedication", med)}
              className={`px-4 py-2 rounded-full border transition ${
                userDetails.currentMedication?.includes(med)
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
  );
};

export default MedicalDetails;