import {
  infantVaccines,
  preschoolVaccines,
  childrenVaccines,
  adultVaccines,
  middleAgedVaccines,
  seniorVaccines,
} from "../Utils/vaccinesList";
import VaccineList from "./VaccineList";
import { useState } from "react";
const ageGroups = [
  "Infants",
  "Pre-School",
  "children",
  "Adults",
  "Middle-aged",
  "Senior-Citizen",
];
const RecommendedVaccine = () => {
  const [active, setActive] = useState("Infants");
  const renderComponent = () => {
    switch (active) {
      case "Infants":
        return <VaccineList list={infantVaccines} />;
      case "Pre-School":
        return <VaccineList list={preschoolVaccines} />;
      case "children":
        return <VaccineList list={childrenVaccines} />;
      case "Adults":
        return <VaccineList list={adultVaccines} />;
      case "Middle-aged":
        return <VaccineList list={middleAgedVaccines} />;
      case "Senior-Citizen":
        return <VaccineList list={seniorVaccines} />;
      default:
        return null;
    }
  };
  return (
    <div className="p-5 w-3/6 m-5  shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-5">Recommended</h1>
      <div className="flex gap-2 justify-center">
        {ageGroups.map((group) => (
          <button
            key={group}
            onClick={() => setActive(group)}
            className={`bg-gray-400 text-white font-semiold px-4 py-2 rounded-lg ${
              active === group ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {group}
          </button>
        ))}
      </div>

      <div className="p-6">{renderComponent()}</div>
    </div>
  );
};
export default RecommendedVaccine;
