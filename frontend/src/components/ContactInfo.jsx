const ContactInfo = () => {
  return (
    <div className="gap-2 flex flex-col -mt-5 text-sm ">
      <h1 className="text-xl font-bold text-orange-400">Contact Details</h1>

      <label className="block">
        Contact No.{" "}
        <input
          type="text"
          placeholder="Enter your Number"
          className="w-full border border-green-700 rounded-xl px-4 py-2 mt-1 outline-none placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />
      </label>
      <label className="block">
        Email ID
        <input
          type="text"
          placeholder="Enter your Email(optional)"
          className="w-full border border-green-700 rounded-xl px-4 py-2 mt-1 outline-none placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />
      </label>

      <div className="flex  gap-2">
        <label>
          Address
          <input
            type="text"
            placeholder="House No./Landmark"
            className=" border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
          />
        </label>
        <label>
          Pincode
          <input
            type="text"
            placeholder="Pincode"
            className=" border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-500"
          />
        </label>
      </div>
      <label className="block">
        State
        <select className="w-full border border-green-700 rounded-xl px-4 py-2 outline-none bg-transparent text-gray-700 ">
          <option>Select State</option>
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
      </label>
      <label className="block">
        Emergency Contact
        <input
          type="text"
          placeholder="Enter Emergency Contact"
          className="w-full border border-green-700 rounded-xl px-4 py-2 mt-1 outline-none placeholder-gray-400 focus:ring-2 focus:ring-green-500"
        />
      </label>
    </div>
  );
};
export default ContactInfo;
