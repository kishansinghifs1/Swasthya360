import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div class="grid place-items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-6 h-[90vh] w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Logo */}

        <img
          src="/Swasthya360.png"
          alt="Swasthya360 Logo"
          className="h-30 w-30 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
        />

        {/* Headings */}
        <div className="text-center space-y-2">
          <h1 className="text-green-800 text-4xl font-bold">Welcome Back</h1>
          <h2 className="text-gray-600 text-lg">Sign in to your account</h2>
        </div>

        {/* Inputs */}
        <div className="flex flex-col w-full space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Sign In Button */}
        <button className="bg-orange-400 hover:bg-orange-500 transition px-6 py-2 rounded-lg text-white font-semibold w-full">
          Sign in
        </button>

        {/* Forgot Password */}
        <p className="text-sm text-gray-500 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        {/* Sign Up Section */}
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
  );
};

export default SignIn;
