import { X } from "lucide-react";
import useVaccineStore from "../Store/VaccineStore";

const ShedVaccineCard = ({ vaccine }) => {
  const { vaccineName, description, type, dateAdministered, id } = vaccine;
  const { removeVaccine } = useVaccineStore();

  // Extract just the date part
  const dateOnly = dateAdministered.split("T")[0];
  const vaccineDate = new Date(dateAdministered);
  const today = new Date();

  // Compare date (ignoring time)
  const isPast = vaccineDate < today.setHours(0, 0, 0, 0);

  return (
    <div className="relative flex justify-between items-center m-3 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-200">
      {/* X Button */}
      <button
        onClick={() => removeVaccine(id)}
        className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
      >
        <X size={18} />
      </button>

      {/* Left Side */}
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-gray-800">{vaccineName}</h1>
        <p className="text-sm text-gray-600">{description}</p>

        <span
          className={`mt-2 w-fit font-medium border rounded-full px-3 py-1 text-xs ${
            isPast
              ? "bg-red-100 text-red-700 border-red-300"
              : "bg-green-100 text-green-700 border-green-300"
          }`}
        >
          {dateOnly}
        </span>
      </div>

      {/* Right Side */}
      <button
        className={`px-4 py-2 rounded-lg text-sm font-semibold shadow transition ${
          isPast
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isPast ? "Missed" : "Upcoming"}
      </button>
    </div>
  );
};

export default ShedVaccineCard;
