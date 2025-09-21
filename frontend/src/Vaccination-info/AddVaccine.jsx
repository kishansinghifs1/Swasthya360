import { X } from "lucide-react";
import { useRef } from "react";
import useVaccineStore from "../Store/VaccineStore";
const AddVaccine = () => {
  const { myVaccines, setVaccines, addVaccine } = useVaccineStore();
  const vaccineName = useRef();
  const dueDate = useRef();

  const handleVaccine = (e) => {
    const name = vaccineName.current.value.trim();
    const date = dueDate.current.value;
    if (!name || !date) {
      alert("Please enter both vaccine name and due date");
      return;
    }

    // Add to Zustand store
    addVaccine({ name: name, dueDate: date });

    // Clear inputs
    vaccineName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className=" relative bg-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg p-5 max-w-md mx-auto">
      {/* <button className="absolute top-3 right-3 text-gray-600 hover:text-red-600">
        <X size={20} />
      </button> */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-5"
      >
        <h1 className="text-xl font-semibold text-center">
          Schedule your Vaccine
        </h1>
        <div className="flex items-center justify-between gap-6">
          <label className="font-medium whitespace-nowrap">Vaccine : </label>
          <input
            ref={vaccineName}
            type="text"
            placeholder="Add Your Vaccine Name"
            className="border-2 border-gray-600 p-2 rounded-lg w-full"
          />
        </div>

        <div className="flex items-center justify-between gap-3">
          <label className="font-medium whitespace-nowrap">Due Date :</label>
          <input
            ref={dueDate}
            type="date"
            className="border-2 border-gray-600 p-2 rounded-lg flex-1"
          />
        </div>

        <button
          type="submit"
          onClick={handleVaccine}
          className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};
export default AddVaccine;
