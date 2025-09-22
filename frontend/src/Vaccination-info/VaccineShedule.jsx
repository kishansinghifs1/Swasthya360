import AddVaccine from "./AddVaccine";
import VaccineList from "./VaccineList";
import { useState } from "react";
import EmptySchedule from "./EmptyShedule";
import useVaccineStore from "../Store/VaccineStore";
import ShedVaccineCard from "./ShedVaccineCard";
const VaccineShedule = () => {
  const [addActive, setAddActive] = useState(false);
  const { myVaccines } = useVaccineStore();
  return (
    <div className="p-5 relative m-5 w-3/7 shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">
        My Vaccination Schedule
      </h1>
      {addActive && <AddVaccine />}
      {myVaccines.length === 0 ? (
        <EmptySchedule />
      ) : (
        <div className="overflow-y-auto h-[60vh]">
          {myVaccines.map((vac) => (
            <ShedVaccineCard vaccine={vac} />
          ))}
        </div>
      )}
      <button
        onClick={() => setAddActive(!addActive)}
        className="bg-green-400 px-5 w-[90%] m-5 absolute bottom-0  rounded-lg py-2"
      >
        Add Vaccine
      </button>
    </div>
  );
};
export default VaccineShedule;
