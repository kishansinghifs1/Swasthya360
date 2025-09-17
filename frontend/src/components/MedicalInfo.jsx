const MedicalInfo = () => {
  const diseaseList = [
    "Diabetes",
    "Hypertension",
    "Asthma",
    "Heart Disease",
    "Anxiety",
    "Depression",
    "Arthritis",
    "others",
  ];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-bold text-orange-400"> Medical Condition</h1>
      <p className="text-md ww-full text-red-600">
        ** This Information is Required for better and Personalized
        Recommendations
      </p>
      <h2>Medical Details</h2>
      <div className="flex flex-wrap justify-space ">
        {diseaseList.map((d, index) => (
          <label key={index} className="mx-10">
            <input type="checkbox" />
            {d}
          </label>
        ))}
      </div>
    </div>
  );
};
export default MedicalInfo;
