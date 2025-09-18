// src/App.jsx
import { useState } from "react";
import { Calendar, Clock } from "lucide-react";

const commonSymptoms = [
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
const Symptoms = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customSymptom, setCustomSymptom] = useState("");
  const [duration, setDuration] = useState("");
  const [onset, setOnset] = useState("");
  const [severity, setSeverity] = useState(3);
  const [chatMessages, setChatMessages] = useState([]);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const startChat = () => {
    const symptoms = [...selectedSymptoms];
    if (customSymptom.trim()) symptoms.push(customSymptom);

    const msg = `Symptoms: ${symptoms.join(
      ", "
    )}; Duration: ${duration}; Severity: ${severity}/5.`;

    setChatMessages([
      "Hi, I’m your health assistant. I’ll ask a few quick questions.",
      msg,
      "Do you have shortness of breath or chest pain?",
      "Any existing conditions like asthma, diabetes, or heart disease?",
      "If severe symptoms occur, use the Emergency option above.",
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl w-full bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Left Panel */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">
            Tell us about your symptoms
          </h2>
          <p className="text-gray-600 mb-4">
            Select from common symptoms or add your own. Then specify duration
            and severity.
          </p>

          <div className="grid grid-cols-2 gap-3 mb-4">
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
                setChatMessages([]);
              }}
              className="px-4 py-2 border border-gray-400 rounded-lg"
            >
              Reset
            </button>
            <button
              onClick={startChat}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg"
            >
              Start Chat
            </button>
          </div>
        </div>

        {/* Right Panel */}
        <div className="p-6 bg-gray-50 border-l border-gray-200">
          <div className="flex justify-between mb-4">
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              WhatsApp
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
              Emergency
            </button>
          </div>

          <div className="space-y-3">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg text-sm ${
                  i === 1
                    ? "bg-orange-100 text-gray-700"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <p className="absolute bottom-4 text-xs text-gray-500 max-w-2xl text-center">
        Disclaimer: This tool does not replace a medical professional. If you
        think you may be experiencing a medical emergency, call your local
        emergency number.
      </p>
    </div>
  );
};
export default Symptoms;
