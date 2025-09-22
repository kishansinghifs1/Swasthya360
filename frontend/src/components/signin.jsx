import { X } from "lucide-react";

const SignIn = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="relative group w-full max-w-2xl px-4">
        {/* ✨ Animated glow layer */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 opacity-40 blur-2xl animate-movingShadow group-hover:opacity-60"></div>

        {/* Sign In Card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-10 flex flex-col gap-6 w-full">
          {/* Close Button */}
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
            <h1 className="text-blue-950  text-2xl font-bold">Welcome Back</h1>
            <p className="text-gray-600 text-sm">Sign in to your account</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-lg border border-blue-700 outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-gray-700 placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
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

          {/* Sign Up Link */}
          <div className="flex justify-center items-center gap-2 text-sm">
            <p className="text-gray-600">Don’t have an account?</p>
            <button
              onClick={onClose} 
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
