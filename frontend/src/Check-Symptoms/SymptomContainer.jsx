import { Calendar, Clock } from "lucide-react";
import SeveritySlider from "./SeveritySlider";
import SymptomSelector from "./SymptomSelector";
import useSymptomStore from "../Store/SysmptomStore";

const SymptomContainer = () => {
  const {
    symptoms,
    severity,
    otherSymptom,
    setOtherSymptom,
    setDuration,
    duration,
    onset,
    setOnset,
    reset,
    setQueryMsg,
    setAPIMsg,
  } = useSymptomStore();

  function buildSymptomMessage() {
    let message = "Patient reported the following:\n";

    if (symptoms.length > 0) {
      message += `• Symptoms: ${symptoms.join(", ")}\n`;
    }

    if (otherSymptom) {
      message += `• Other Symptom: ${otherSymptom}\n`;
    }

    if (duration) {
      message += `• Duration: ${duration}\n`;
    }

    if (severity) {
      message += `• Severity: ${severity}\n`;
    }

    if (onset) {
      message += `• Onset: ${onset}\n`;
    }

    return message.trim();
  }
  const handleSympData = async () => {
    const myMsg = buildSymptomMessage();
    setQueryMsg(myMsg);

    try {
      const response = await fetch(
        "https://symtoms.kishansingh956196.workers.dev/api/v1/swasthya360/symptoms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: myMsg,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        console.log("API Response:", data);
        setAPIMsg(data.assessment);
      } else {
        console.error("API Error:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <div className="p-5 h-[85vh] w-1/2  shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg">
      <h2 className="text-xl font-semibold">Tell us about your symptoms</h2>
      <p className="text-gray-600 mb-4">
        Select from common symptoms or add your own. Then specify duration and
        severity.
      </p>
      <SymptomSelector />

      {/* Custom symptom */}
      <div className="w-full max-w-2xl mx-auto my-4">
        <h2 className="text-lg font-medium text-gray-700 mb-3">
          Other Symptoms
        </h2>
        <input
          type="text"
          placeholder="Type another symptom..."
          value={otherSymptom}
          onChange={(e) => setOtherSymptom(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4"
        />
      </div>
      {/* Duration & Onset */}
      <div className="flex w-full max-w-2xl mx-auto gap-2 -mt-5">
        {/* Duration */}
        <div className="flex flex-col w-1/2">
          <label className="text-lg font-medium  text-gray-700 mb-1">
            Duration
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
            <Calendar className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="e.g., 3 days"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Onset */}
        <div className="flex flex-col w-1/2">
          <label className="text-lg font-medium text-gray-700 mb-1">
            Onset
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
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
      </div>

      {/* Severity */}

      <SeveritySlider />
      {/* Buttons */}
      <div className="flex justify-between items-center">
        <button
          onClick={() => reset()}
          className="px-4 py-2 border border-gray-400 rounded-lg"
        >
          Reset
        </button>
        <button
          onClick={handleSympData}
          className="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Check
        </button>
      </div>
    </div>
  );
};
export default SymptomContainer;
