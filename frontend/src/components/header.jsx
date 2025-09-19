import { Link, useLocation } from "react-router-dom";
import EmergencyButton from "./EmergencyButton";

const Header = () => {
  const location = useLocation();

  let authLabel = "Sign Up";
  let authLink = "/signup";
  let hideEmergency = false;

  if (location.pathname === "/signup" || location.pathname === "/signin") {
    hideEmergency = true;
  } else if (location.pathname === "/landing") {
    authLabel = "Sign Out";
    authLink = "/";
  }

  return (
    <header className="relative shadow-md border-b-2 border-gray-200 bg-white">
      <div className="relative max-w-7xl mx-auto flex justify-between items-center h-20 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/Swasthya360.png"
            alt="Swasthya360 Logo"
            className="h-20 w-20 object-cover rounded-full border border-cyan-400 shadow-sm"
          />
          <h1 className="text-2xl md:text-3xl font-bold font-serif bg-gradient-to-r from-[#008080] via-[#00CED1] to-[#228B22] bg-clip-text text-transparent">
            Swasthya360
          </h1>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-base font-medium">
          <a href="#home" className="hover:text-[#008080]">Home</a>
          <a href="#features" className="hover:text-[#008080]">Features</a>
          <a href="#services" className="hover:text-[#008080]">Services</a>
          <a href="#aboutus" className="hover:text-[#008080]">About Us</a>
          <a href="#contactus" className="hover:text-[#008080]">Contact</a>
        </nav>

        {/* Right side: Emergency + Auth */}
        <div className="flex items-center space-x-4">
          {!hideEmergency && <EmergencyButton />}
          <Link to={authLink}>
            <button className="px-4 py-2 bg-[#008080] text-white rounded-md hover:bg-[#00CED1] transition">
              {authLabel}
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
