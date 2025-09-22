import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";

const SignUp = () => {
  return (
    <>
      {/* Hero Section in background */}
      <div className="relative">
        <Header />
        <section className="relative min-h-screen">{/* <Hero /> */}</section>
      </div>

      {/* Overlay for blur + highlight sign-up card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm">
        <div className="relative group">
          {/* ✨ Animated shadow/glow layer */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-50 blur-2xl animate-movingShadow group-hover:opacity-70"></div>

          {/* SignUp Card */}
          <div className="relative flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
            {/* Logo & Heading */}
            <div className="flex items-center gap-2">
              <img
                src="/Swasthya360.png"
                alt="Swasthya360 Logo"
                className="h-16 w-16 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
              />
              <div className="text-center space-y-1">
                <h1 className="text-green-800 text-3xl font-bold">
                  Create Account
                </h1>
                <h2 className="text-gray-600 text-base">
                  Fill the details to sign up
                </h2>
              </div>
            </div>

            <form className="flex flex-col gap-4 justify-center items-center w-full">
              <label className="w-full">
                Full name:
                <input
                  type="text"
                  placeholder="Enter your Full name"
                  className="border border-gray-400 p-2 rounded-lg w-full"
                />
              </label>

              <label className="w-full">
                Email:
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="border border-gray-400 p-2 rounded-lg w-full"
                />
              </label>

              <label className="w-full">
                Password:
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="border border-gray-400 p-2 rounded-lg w-full"
                />
              </label>
            </form>

            {/* Already have account */}
            <div className="flex justify-center items-center gap-2 text-sm">
              <p className="text-gray-600">Already have an account?</p>
              <Link
                to="/signin"
                className="text-green-700 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
