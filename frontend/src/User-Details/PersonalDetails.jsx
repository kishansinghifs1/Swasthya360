import { Mail, Phone, MapPin } from "lucide-react";

const PersonalDetails = ({ userDetails, setUserDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="col-span-2">
        <label className="block text-gray-700 font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          placeholder="John Doe"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Age</label>
        <input
          type="number"
          name="age"
          value={userDetails.age}
          onChange={handleChange}
          placeholder="25"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Gender</label>
        <select
          name="gender"
          value={userDetails.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col-span-2">
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <Mail className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <Phone className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            placeholder="+91 1234567890"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div>
        <label className="block text-gray-700 font-medium mb-1">
          Emergency Contact
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <Phone className="w-5 h-5 text-red-400 mr-2" />
          <input
            type="text"
            name="emergencyContact"
            value={userDetails.emergencyContact}
            onChange={handleChange}
            placeholder="+91 9876543210"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="col-span-2">
        <label className="block text-gray-700 font-medium mb-1">Location</label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <MapPin className="w-5 h-5 text-gray-400 mr-2" />
          <input
            type="text"
            name="location"
            value={userDetails.location}
            onChange={handleChange}
            placeholder="City, State, Country"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="col-span-2">
        <label className="block text-gray-700 font-medium mb-1">
          Preferred Language
        </label>
        <select
          name="preferredLanguage"
          value={userDetails.preferredLanguage}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Bengali</option>
          <option>Tamil</option>
          <option>Telugu</option>
        </select>
      </div>
    </div>
  );
};

export default PersonalDetails;