import { useRef, useState, useEffect } from "react";
import useVaccineStore from "../Store/VaccineStore";
import { BACKEND_URL } from "../config/config";
import { X } from "lucide-react";
import useUserStore from "../Store/userStore.js";

const AddVaccine = () => {
  const { addVaccine, myVaccines } = useVaccineStore();
  const { token } = useUserStore();
    console.log(token);
  const vaccineName = useRef();
  const dueDate = useRef();
  const desc = useRef();
  const [priority, setPriority] = useState("Optional");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // NEW: state to control visibility
  const [visible, setVisible] = useState(true);

  const handleVaccine = async () => {
    const name = vaccineName.current.value.trim();
    const date = dueDate.current.value;
    const description = desc.current.value.trim();
    if (!name || !date) {
      alert("Please enter both vaccine name and due date");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Get token from localStorage for authentication

      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Please sign in to add vaccines");
      }
      console.log(name, date);

      // API call to backend
      const response = await fetch(
        "https://swasthya360-7.onrender.com/api/v1/vaccinations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            vaccineName: name,
            description,
            type: priority,
            dateAdministered: new Date(date).toISOString(),
            // Remove hardcoded userId, let backend get it from token
          }),
        }
      );


      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to add vaccine");
      }

      // Update local store (Zustand)
      addVaccine({
        vaccineName: name,
        description,
        type: priority,
        dateAdministered: new Date(date).toISOString(),
        userId: data.userId || "user", // Use userId from response

        id: data.id, // Add ID from backend response

      });

      // Clear form
      vaccineName.current.value = "";
      dueDate.current.value = "";
      desc.current.value = "";
      setPriority("Optional");

      setSuccess("Vaccine added successfully!");

      // Hide success message after 3 seconds
      setTimeout(() => {

    } catch (error) {
      console.error("Error adding vaccine:", error);
      setError(error.message || "Failed to add vaccine. Please try again.");
    } finally {
      setLoading(false);
    }
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
          onClick={() => setVisible(false)}
          className="p-1 rounded-full hover:bg-gray-200 transition"
          disabled={loading}
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
          {success}
        </div>
      )}

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
            disabled={loading}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            required
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
            disabled={loading}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        {/* Due Date */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Due Date</label>
          <input
            ref={dueDate}
            type="date"
            disabled={loading}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            required
          />
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            disabled={loading}
            className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option>Optional</option>
            <option>Compulsory</option>
          </select>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          onClick={handleVaccine}
          disabled={loading}
          className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Saving...
            </>
          ) : (
            "Save Vaccine"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddVaccine;