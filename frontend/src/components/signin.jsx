import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const SignIn = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* ✅ Header */}
      <Header />

      {/* ✅ Background */}
      <div className="flex-grow grid place-items-center bg-gradient-to-r from-orange-50 via-pink-50 to-white relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-0 w-[28rem] h-[28rem] bg-orange-300 opacity-25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-80 h-80 bg-pink-400 opacity-15 rounded-full blur-3xl"></div>

        {/* ✅ Card Wrapper with animated outer shadow */}
        <div className="relative w-full max-w-lg">
          {/* 🔥 Moving glowing shadow around the card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-orange-300 via-pink-300 to-orange-400 blur-2xl opacity-60 animate-pulse"></div>

          {/* Actual Card */}
          <div className="relative flex flex-col justify-center items-center gap-6 h-auto w-full bg-white/90 p-8 rounded-2xl shadow-lg">
            {/* Logo */}
            <img
              src="/Swasthya360.png"
              alt="Swasthya360 Logo"
              className="h-24 w-24 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />

            {/* Headings */}
            <div className="text-center space-y-2">
              <h1 className="text-green-800 text-3xl font-bold">Welcome Back</h1>
              <h2 className="text-gray-600 text-lg">Sign in to your account</h2>
            </div>

            {/* Inputs */}
            <div className="flex flex-col w-full space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="border border-green-700 rounded-xl px-4 py-3 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="border border-green-700 rounded-xl px-4 py-3 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Sign In Button */}
            <button className="bg-orange-400 hover:bg-orange-500 transition px-6 py-3 rounded-lg text-white font-semibold w-full">
              Sign in
            </button>

            {/* Forgot Password */}
            <p className="text-sm text-gray-500 cursor-pointer hover:underline">
              Forgot Password?
            </p>

            {/* Sign Up Link */}
            <div className="flex justify-center items-center gap-2 text-sm">
              <p className="text-gray-600">Don’t have an account?</p>
              <Link to="/signup">
                <button className="text-green-700 font-semibold hover:underline">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default SignIn;
