import { X } from "lucide-react";

const SignUp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="relative group w-full max-w-lg px-2">
        {/* ✨ Animated shadow/glow layer */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-40 blur-2xl animate-movingShadow group-hover:opacity-60"></div>

        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-8 flex flex-col gap-6">
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
              className="h-16 w-16 object-cover rounded-full border-4 border-cyan-400 shadow-md"
            />
            <h1 className="text-blue-950 text-2xl font-bold">Create Account</h1>
            <p className="text-gray-600 text-sm">Fill in your details to sign up</p>
          </div>

          {/* Form */}
          <form className="space-y-4 w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-800 text-white font-semibold py-2 rounded-lg transition-all"
            >
              Sign Up
            </button>
          </form>

          {/* Already have account */}
          <div className="flex justify-center items-center gap-2 text-sm">
            <p className="text-gray-600">Already have an account?</p>
            <button
              type="button"
              onClick={onClose} 
              className="text-cyan-700 font-semibold hover:underline"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
