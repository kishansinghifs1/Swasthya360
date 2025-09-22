import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import EmergencyButton from "./EmergencyButton";

const Header = ({
  onMenuClick,
  isAuthenticated,
  onSignUpClick,
  onSignInClick,
  onSignOutClick,
}) => {
  const location = useLocation();

  let hideEmergency = false;
  let hideNavMenu = false;
  let hideAuthButton = false;
  let forceSignOut = false;

  // Pages where we hide SignIn/SignUp and force show SignOut
  const protectedRoutes = [
    "/landing",
    "/check-symptoms",
    "/user-details",
    "/health-chatbot",
    "/vaccination-info",
    "/disease-outbreaks",
  ];

  if (location.pathname === "/signup" || location.pathname === "/signin") {
    // On auth pages → hide everything
    hideEmergency = true;
    hideNavMenu = true;
    hideAuthButton = true;
  } else if (protectedRoutes.includes(location.pathname)) {
    // On protected pages → show only SignOut
    forceSignOut = true;
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="relative flex items-center h-20 px-4 md:px-12">
        {/* Left: Hamburger Menu (only when logged in) */}
        {isAuthenticated && (
          <button
            onClick={() => onMenuClick?.()}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Menu className="w-10 h-10 text-[#008080]" />
          </button>
        )}

        {/* Left: Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/Swasthya360.png"
            alt="Swasthya360 Logo"
            className="h-16 w-16 object-cover rounded-full border-2 border-cyan-400 shadow-md"
          />
          <h1 className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-[#008080] via-[#00CED1] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h1>
        </Link>

        {/* Center: Navigation */}
        {!hideNavMenu && (
          <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-10 text-base font-medium">
            <a href="#home" className="hover:text-[#008080] transition">
              Home
            </a>
            <a href="#features" className="hover:text-[#008080] transition">
              Features
            </a>
            <a href="#services" className="hover:text-[#008080] transition">
              Services
            </a>
            <a href="#aboutus" className="hover:text-[#008080] transition">
              About Us
            </a>
            <a href="#contactus" className="hover:text-[#008080] transition">
              Contact Us
            </a>
          </nav>
        )}

        {/* Right: Emergency + Auth */}
        <div className="ml-auto flex items-center space-x-4 md:space-x-6">
          {!hideEmergency && <EmergencyButton />}

          {forceSignOut || isAuthenticated ? (
            <button
              onClick={() => onSignOutClick?.()}
              className="px-5 py-2 md:px-6 md:py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-md transition-all"
            >
              Sign Out
            </button>
          ) : (
            !hideAuthButton && (
              <div className="flex space-x-3">
                <button
                  onClick={() => onSignInClick?.()}
                  className="px-5 py-2 md:px-6 md:py-3 bg-[#24a9ab] hover:bg-[#00ced1] text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  Sign In
                </button>
                <button
                  onClick={() => onSignUpClick?.()}
                  className="px-5 py-2 md:px-6 md:py-3 bg-[#008080] hover:bg-[#00CED1] text-white font-semibold rounded-lg shadow-md transition-all"
                >
                  Sign Up
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;