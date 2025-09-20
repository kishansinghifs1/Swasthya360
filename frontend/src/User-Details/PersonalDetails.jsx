import { User, Mail, Phone, MapPin } from "lucide-react";

const PersonalDetails = ({ userDetails, setUserDetails }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUserDetails((prev) => ({
        ...prev,
        profileImage: URL.createObjectURL(file),
      }));
    }
  };

  return (
    <div>
      {/* Profile Image */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          {userDetails.profileImage ? (
            <img
              src={userDetails.profileImage}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center bg-gray-100 rounded-full border-4 border-cyan-400 shadow-lg">
              <User className="w-12 h-12 text-gray-400" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={userDetails.firstName}
            onChange={handleChange}
            placeholder="John"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userDetails.lastName}
            onChange={handleChange}
            placeholder="Doe"
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
          <label className="block text-gray-700 font-medium mb-1">Emergency Contact</label>
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
          <label className="block text-gray-700 font-medium mb-1">Address</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleChange}
              placeholder="Street, Area"
              className="w-full outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">City</label>
          <input
            type="text"
            name="city"
            value={userDetails.city}
            onChange={handleChange}
            placeholder="City"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">State</label>
          <input
            type="text"
            name="state"
            value={userDetails.state}
            onChange={handleChange}
            placeholder="State"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">ZIP Code</label>
          <input
            type="text"
            name="zip"
            value={userDetails.zip}
            onChange={handleChange}
            placeholder="123456"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Country</label>
          <input
            type="text"
            name="country"
            value={userDetails.country}
            onChange={handleChange}
            placeholder="India"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
