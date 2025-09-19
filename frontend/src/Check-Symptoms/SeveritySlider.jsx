import { useState } from "react";

const SeveritySlider = () => {
  const [severity, setSeverity] = useState(3);

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Select Severity
      </h2>

      {/* Slider */}
      <input
        type="range"
        min="1"
        max="5"
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        className="w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-lg appearance-none cursor-pointer"
      />

      {/* Labels */}
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>

      {/* Selected Value */}
      <div className="mt-4 text-center">
        <span
          className={`px-4 py-2 rounded-full font-bold text-white ${
            severity <= 2
              ? "bg-green-500"
              : severity == 3
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          Severity: {severity}
        </span>
      </div>
    </div>
  );
};

export default SeveritySlider;
