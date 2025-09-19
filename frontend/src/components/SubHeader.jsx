import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const SubHeader = ({ heading }) => {
  return (
    <div className="flex justify-between bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] p-2 rounded-lg m-4">
      <h1 className=" flex items-center gap-2 text-2xl m-2 font-bold text-black">
        {" "}
        <Link to="/">
          {" "}
          <ArrowLeft />
        </Link>
        <span>{heading}</span>
      </h1>
      <button className="bg-green-600 text-white font-bold rounded-lg px-4 py-2">
        Need Help
      </button>
    </div>
  );
};
export default SubHeader;
