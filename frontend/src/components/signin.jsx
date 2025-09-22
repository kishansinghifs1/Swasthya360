import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useUserStore from "../store/userStore.js"; // import your Zustand store

const SignIn = ({ onClose, onSwitch }) => {
  const navigate = useNavigate();
  const setUser = useUserStore((state) => state.setUser);
  const setToken = useUserStore((state) => state.setToken);

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://swasthya360-7.onrender.com/api/v1/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      // Save user in Zustand
      setUser(data.user);
      setToken(data.token);

      // Save token in localStorage as Bearer
      localStorage.setItem("token", `Bearer ${data.token}`);

      onClose?.();
      navigate("/landing");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="relative group w-full max-w-2xl px-4">
        {/* Glow */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 opacity-40 blur-2xl animate-movingShadow group-hover:opacity-60"></div>

        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-10 flex flex-col gap-6 w-full">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
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
            <h1 className="text-blue-950 text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-blue-700 outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-blue-700 outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-700 placeholder-gray-400"
            />
            <button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white py-3 rounded-lg font-semibold transition-all"
            >
              Sign In
            </button>
          </form>

          {/* Forgot Password */}
          <p className="text-sm text-gray-500 cursor-pointer hover:underline text-center">
            Forgot Password?
          </p>

          {/* Switch to Sign Up */}
          <div className="flex justify-center items-center gap-2 text-sm">
            <p className="text-gray-600">Don’t have an account?</p>
            <button
              onClick={onSwitch}
              className="text-cyan-700 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
