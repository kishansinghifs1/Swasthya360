import SymptomContainer from "./SymptomContainer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";

const CheckSymptom = () => {
  return (
    <div className="w-full  p-2">
      <h1 className="shadow-[0_0_10px_rgba(0,0,0,0.3)] p-2 rounded-lg flex items-center gap-2 text-2xl m-2 font-bold text-black">
        {" "}
        <Link to="/">
          {" "}
          <ArrowLeft />
        </Link>
        <span>Symptom Checker</span>
      </h1>
      <div className="relative flex justify-center gap-10">
        <SymptomContainer />
        <Chatbot />
      </div>
      <p className="text-center text-red-500 mt-4">
        Disclaimer : This tool does not replace a medical professional. if you
        think you may be experiencing a medical Emergency, call your local
        Emergency number.
      </p>
    </div>
  );
};
export default CheckSymptom;
