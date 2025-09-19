import SubHeader from "../components/SubHeader";
import RecommendedVaccine from "./RecommendedVaccine";
import VaccineShedule from "./VaccineShedule";

const VaccinationPage = () => {
  return (
    <div className="flex flex-col">
      <SubHeader heading="Vaccination Info" />
      <div className="flex h-[90vh] justify-center w-full">
        <RecommendedVaccine />
        <VaccineShedule />
      </div>
    </div>
  );
};
export default VaccinationPage;

// import React from "react";

// // Sample vaccine data
// const recommendedVaccines = {
//   Child: [
//     { name: "BCG", desc: "Protects against tuberculosis." },
//     { name: "Polio", desc: "Prevents poliomyelitis." },
//   ],
//   Adult: [
//     { name: "Hepatitis B", desc: "Protects against Hepatitis B." },
//     { name: "Influenza", desc: "Annual flu vaccine." },
//   ],
//   Senior: [
//     { name: "Pneumococcal", desc: "Prevents pneumonia." },
//     { name: "Shingles", desc: "Protects against shingles." },
//   ],
// };

// const scheduledVaccines = [
//   { name: "COVID-19 Booster", date: "20 Sept 2025", status: "Pending" },
//   { name: "Flu Shot", date: "15 Oct 2025", status: "Scheduled" },
// ];

// export default function VaccinationPage() {
//   return (
//     <div className="p-6 space-y-10">
//       {/* Recommended Vaccines */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Recommended Vaccines</h2>

//         {Object.entries(recommendedVaccines).map(([ageGroup, vaccines]) => (
//           <div key={ageGroup} className="mb-6">
//             <h3 className="text-xl font-semibold mb-3">{ageGroup}</h3>
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//               {vaccines.map((vaccine, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
//                 >
//                   <h4 className="text-lg font-bold">{vaccine.name}</h4>
//                   <p className="text-gray-600 text-sm">{vaccine.desc}</p>
//                   <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//                     Learn More
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Scheduled Vaccines */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Scheduled Vaccines</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {scheduledVaccines.map((vaccine, index) => (
//             <div
//               key={index}
//               className="bg-green-50 border border-green-200 rounded-2xl p-4 shadow-sm"
//             >
//               <h4 className="text-lg font-bold">{vaccine.name}</h4>
//               <p className="text-gray-600 text-sm">Date: {vaccine.date}</p>
//               <span
//                 className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
//                   vaccine.status === "Pending"
//                     ? "bg-yellow-200 text-yellow-800"
//                     : "bg-green-200 text-green-800"
//                 }`}
//               >
//                 {vaccine.status}
//               </span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }
