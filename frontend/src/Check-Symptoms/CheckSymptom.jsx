import SymptomContainer from "./SymptomContainer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
import SubHeader from "../components/SubHeader";
import Header from "../components/Header";

const CheckSymptom = () => {
  return (
    <div className="w-full ">
      <SubHeader heading={"Symptom Checker"} />
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
