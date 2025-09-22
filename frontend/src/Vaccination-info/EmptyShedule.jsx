import React from "react";
import Lottie from "lottie-react";
import emptyAnimation from "../assets/No-Data.json"; // your downloaded Lottie file

const EmptySchedule = () => {
  return (
    <div className="flex flex-col items-center mt-15  h-full text-gray-600">
      {/* Animation */}
      <Lottie
        animationData={emptyAnimation}
        loop={true}
        className="w-40 h-40"
      />

      {/* Message */}
      <p className="mt-4 text-lg font-semibold">No vaccines scheduled yet</p>
      <p className="text-sm text-gray-500">Click below to add your first one</p>

      {/* Button */}
      {/* <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        ➕ Add Vaccine
      </button> */}
    </div>
  );
};

export default EmptySchedule;
