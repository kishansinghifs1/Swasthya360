import SubHeader from "../components/SubHeader";
import RecommendedVaccine from "./RecommendedVaccine";
import VaccineShedule from "./VaccineShedule";

const VaccinationPage = () => {
  return (
    <div className="flex md:flex-col">
      <SubHeader heading="Vaccination Info" />
      <div className="flex h-[90vh] justify-center w-full">
        <RecommendedVaccine />
        <VaccineShedule />
      </div>
    </div>
  );
};
export default VaccinationPage;
