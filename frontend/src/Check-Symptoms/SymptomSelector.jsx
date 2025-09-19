import { useState } from "react";

const symptoms = [
  "Fever",
  "Cough",
  "Headache",
  "Sore throat",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Chest pain",
  "Shortness of breath",
  "Fatigue",
  "Dizziness",
  "Rash",
];

const SymptomSelector = () => {
  const [selected, setSelected] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelected(
      (prev) =>
        prev.includes(symptom)
          ? prev.filter((s) => s !== symptom) // remove if already selected
          : [...prev, symptom] // add if not selected
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Select Your Symptoms
      </h2>
      <div className="flex flex-wrap gap-3">
        {symptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`px-4 py-2 rounded-full border transition 
              ${
                selected.includes(symptom)
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {symptom}
          </button>
        ))}
      </div>

      {/* Selected list */}
      {selected.length > 0 && (
        <div className="mt-6">
          <h3 className="font-medium text-gray-700">Selected:</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {selected.map((s) => (
              <span
                key={s}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomSelector;
