import AddVaccine from "./AddVaccine";
import { useState } from "react";
import EmptySchedule from "./EmptyShedule";
import useVaccineStore from "../Store/VaccineStore";
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
        <div className="text-black">
          {myVaccines.map((vac, ind) => (
            <div key={ind}>
              {" "}
              <p>{vac.name}</p>
              <p>{vac.dueDate}</p>
            </div>
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
