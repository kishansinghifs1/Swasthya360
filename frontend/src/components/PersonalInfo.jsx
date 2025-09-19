const PersonalInfo = () => {
  return (
    <div className="gap-4 flex flex-col  ">
      <h1 className="text-xl font-bold text-orange-400">
        Personal Information
      </h1>

      <label className="block">
        Full Name{" "}
        <input
          type="text"
          placeholder="Enter your Full name"
          className="w-full border border-green-700 rounded-xl px-4 py-2 mt-1 outline-none placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />
      </label>

      <div className="flex  gap-2">
        <label>
          Age
          <input
            type="text"
            placeholder="Age"
            className=" border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
          />
        </label>

        <label>
          Gender
          <select className="border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 ">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </label>
      </div>
    </div>
  );
};
export default PersonalInfo;
