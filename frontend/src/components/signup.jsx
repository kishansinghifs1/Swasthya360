import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link, redirect } from "react-router-dom";
import { BACKEND_URL } from "../config/config.js";
import { useNavigate } from "react-router-dom";
const SignUp = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Basic validation
      if (!formData.fullName.trim()) {
        throw new Error("Full name is required");
      }
      if (!formData.email.trim()) {
        throw new Error("Email is required");
      }
      if (!formData.password.trim()) {
        throw new Error("Password is required");
      }
      if (formData.password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      // Make API request
      const response = await fetch(`${BACKEND_URL}/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || "Failed to create account");
      }

      // Store token in localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
      }

      setSuccess("Account created successfully! You are now logged in.");
      
      // Close modal after a short delay
      setTimeout(() => {
        onClose();
        // Optionally redirect or refresh the page
        navigate("/landing")
      }, 1500);

    } catch (error) {
      console.error("Sign up error:", error);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="relative group w-full max-w-2xl px-4">
        {/* ✨ Animated glow layer */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-40 blur-2xl animate-movingShadow group-hover:opacity-60"></div>

        {/* Sign Up Card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-10 flex flex-col gap-6 w-full">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
            disabled={loading}
          >
            <X size={22} />
          </button>

          {/* Logo + Title */}
          <div className="flex flex-col items-center gap-2">
            <img
              src="/Swasthya360.png"
              alt="Swasthya360 Logo"
              className="h-20 w-20 object-cover rounded-full border-4 border-cyan-400 shadow-md"
            />
            <h1 className="text-blue-950 text-2xl font-bold">Create Account</h1>
            <p className="text-gray-600 text-sm">Fill the details to sign up</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-cyan-700 outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent text-gray-700 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-cyan-700 outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent text-gray-700 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border border-cyan-700 outline-none focus:ring-2 focus:ring-cyan-500 bg-transparent text-gray-700 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
              required
              minLength={6}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Already have account */}
          <div className="flex justify-center items-center gap-2 text-sm">
            <p className="text-gray-600">Already have an account?</p>
            <Link
              to="/signin"
              onClick={onClose}
              className="text-cyan-700 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;