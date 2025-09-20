import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const SignUp = () => {
  return (
    <>
      <Header />

      <section className="relative bg-gradient-to-r from-orange-50 via-pink-50 to-white min-h-screen flex flex-col">
        {/* Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-10 right-0 w-[24rem] h-[24rem] bg-orange-300 opacity-25 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-pink-400 opacity-15 rounded-full blur-3xl"></div>
        </div>

        {/* Centered Card with Moving Shadow */}
        <div className="flex-grow grid place-items-center py-10">
          <div className="relative group">
            {/* ✨ Animated shadow/glow layer */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-400 opacity-50 blur-2xl animate-movingShadow group-hover:opacity-70"></div>

            <div className="relative flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 rounded-2xl shadow-xl bg-white/90 backdrop-blur-md border border-gray-200">
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

              <form className="flex flex-col gap-4 justify-center items-center">
                <label>
                  Full name:
                  <input
                    type="text"
                    placeholder="Enter your Full name"
                    className="border-1 border-gray-400 p-2 rounded-lg"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    placeholder="Enter your  Email"
                    className="border-1 border-gray-400 p-2 rounded-lg"
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="border-1 border-gray-400 p-2 rounded-lg"
                  />
                </label>
              </form>

              {/* Already have account */}
              <div className="flex justify-center items-center gap-2 text-sm">
                <p className="text-gray-600">Already have an account?</p>
                <Link to="/signin">
                  <button
                    type="button"
                    className="text-green-700 font-semibold hover:underline"
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SignUp;
