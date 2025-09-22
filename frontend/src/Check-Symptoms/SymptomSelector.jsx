import useSymptomStore from "../Store/SysmptomStore";

const symptomsList = [
  "Fever",
  "Cough",
  "Headache",
  "Sore throat",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Chest pain",
  "Shortness of breath",

  "Dizziness",
  "Rash",
];

const SymptomSelector = () => {
  const { symptoms, addSymptom } = useSymptomStore();

  const handleToggle = (symptom) => {
    // update store
    addSymptom(symptom);
  };

  return (
    <div className="w-full max-w-2xl mx-auto ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Select Your Symptoms
      </h2>
      <div className="flex flex-wrap gap-3">
        {symptomsList.map((symptom) => (
          <button
            key={symptom}
            onClick={() => handleToggle(symptom)}
            className={`px-4 py-1 rounded-full border transition 
              ${
                symptoms.includes(symptom)
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
          >
            {symptom}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymptomSelector;
