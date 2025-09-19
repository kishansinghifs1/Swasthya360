import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { commonSymptoms } from "../Utils/Constants";

const SymptomContainer = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [onset, setOnset] = useState("");
  const [severity, setSeverity] = useState(3);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  return (
    <div className="p-5 h-full w-2/5  shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg">
      <h2 className="text-xl font-semibold">Tell us about your symptoms</h2>
      <p className="text-gray-600 mb-4">
        Select from common symptoms or add your own. Then specify duration and
        severity.
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {commonSymptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => toggleSymptom(symptom)}
            className={`px-3 py-2 border rounded-lg text-sm ${
              selectedSymptoms.includes(symptom)
                ? "bg-orange-500 text-white border-orange-500"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {symptom}
          </button>
        ))}
      </div>
      {/* Custom symptom */}
      <input
        type="text"
        placeholder="Type another symptom..."
        value={customSymptom}
        onChange={(e) => setCustomSymptom(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
      />
      {/* Duration & Onset */}
      <div className="flex gap-3 mb-4">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/2">
          <Calendar className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="e.g., 3 days"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full outline-none"
          />
        </div>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-1/2">
          <Clock className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="e.g., sudden or gradual"
            value={onset}
            onChange={(e) => setOnset(e.target.value)}
            className="w-full outline-none"
          />
        </div>
      </div>
      {/* Severity */}
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Severity</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setSeverity(num)}
              className={`w-10 h-10 rounded-full border ${
                severity === num
                  ? "bg-orange-500 text-white border-orange-500"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            setSelectedSymptoms([]);
            setCustomSymptom("");
            setDuration("");
            setOnset("");
            setSeverity(3);
          }}
          className="px-4 py-2 border border-gray-400 rounded-lg"
        >
          Reset
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
          Check
        </button>
      </div>
    </div>
  );
};
export default SymptomContainer;
