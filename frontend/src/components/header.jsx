import { Link } from "react-router-dom";

import { UserCircle, Menu } from "lucide-react";
import EmergencyButton from "./EmergencyButton";

const Header = ({ onMenuClick }) => {
  const navList = ["Home", "Services", "Nutrition", "Contact Us"];
  return (
    <header className="relative shadow-md bg-transparent">
      /
      <div className=" flex justify-between items-center rounded-xl  p-4 md:p-4">
        {/* LEFT: Dashboard + Logo + Title */}
        <div className="flex items-center space-x-3">
          {/* Sidebar Trigger */}
          {/* <button onClick={onMenuClick}>
            <Menu className="h-12 w-12 text-[#008080] hover:text-[#00CED1] transition" />
          </button> */}

          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/Swasthya360.png"
              alt="Swasthya360 Logo"
              className="h-18 w-18  object-cover rounded-full border-4 border-amber-400 shadow-lg"
            />
            <h1 className="text-4xl font-extrabold font-serif text-green-400  ">
              Swasthya360
            </h1>
          </Link>
        </div>
        <div className="flex gap-6 text-xl text-green-600 font-bold">
          {navList.map((nav) => (
            <span
              key={nav}
              className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav}
            </span>
          ))}
        </div>

        {/* RIGHT: Emergency + Profile + Sign In/Sign Up */}
        <div className="flex items-center space-x-4">
          <EmergencyButton />

          {/* <Link to="/signin">
            {" "}
            <button className="px-4 py-3 bg-[#008080] text-white rounded-lg hover:bg-[#00CED1] transition font-semibold">
              SignIn
            </button>
          </Link> */}

          {/* <Link to="/signup">
            <button className="px-4 py-3 bg-gradient-to-r from-[#7CFC00] to-[#228B22] text-white rounded-lg hover:opacity-90 transition font-semibold shadow-md">
              SignUp
            </button>
          </Link> */}
          <Link to="/profile">
            <UserCircle className="h-13 w-16 md:h-10 md:w-15 text-green-400" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
