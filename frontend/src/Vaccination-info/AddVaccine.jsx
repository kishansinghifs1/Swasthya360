import { useRef, useState, useEffect } from "react";
import useVaccineStore from "../Store/VaccineStore";
import { X } from "lucide-react";

const AddVaccine = () => {
  const { addVaccine, myVaccines } = useVaccineStore();
  const vaccineName = useRef();
  const dueDate = useRef();
  const desc = useRef();
  const [priority, setPriority] = useState("Optional");

  // NEW: state to control visibility
  const [visible, setVisible] = useState(true);

  const handleVaccine = () => {
    const name = vaccineName.current.value.trim();
    const date = dueDate.current.value;
    const description = desc.current.value.trim();

    if (!name || !date) {
      alert("Please enter both vaccine name and due date");
      return;
    }

    addVaccine({
      vaccineName: name,
      description,
      type: priority,
      dateAdministered: new Date(date).toISOString(),
      userId: "cmftgtnac0000vbdskpnd5smm",
    });

    vaccineName.current.value = "";
    dueDate.current.value = "";
    desc.current.value = "";
    setPriority("Optional");
  };

  useEffect(() => {
    console.log("Updated vaccines:", myVaccines);
  }, [myVaccines]);

  // If not visible, render nothing
  if (!visible) return null;

  return (
    <div className="absolute z-10 top-0 right-0 bg-white shadow-lg rounded-2xl p-6 max-w-md mx-auto border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">
          Schedule Your Vaccine
        </h1>
        <button
          onClick={() => setVisible(false)} // 👈 hides the box
          className="p-1 rounded-full hover:bg-gray-200 transition"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-4"
      >
        {/* Vaccine Name */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Vaccine</label>
          <input
            ref={vaccineName}
            type="text"
            placeholder="Enter vaccine name"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">
            Description
          </label>
          <input
            ref={desc}
            type="text"
            placeholder="e.g. Protects against flu"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Due Date</label>
          <input
            ref={dueDate}
            type="date"
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
          >
            <option>Optional</option>
            <option>Compulsory</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          onClick={handleVaccine}
          className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition shadow-md"
        >
          Save Vaccine
        </button>
      </form>
    </div>
  );
};

export default AddVaccine;
