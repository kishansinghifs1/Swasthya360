import { useState } from "react";
import { Phone, X } from "lucide-react";

const EmergencyButton = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Police, Fire, Medical Emergency",
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      description: "24/7 Poison Emergency",
    },
    {
      name: "Crisis Hotline",
      number: "988",
      description: "Mental Health Crisis Support",
    },
    {
      name: "CDC Health Line",
      number: "1-800-CDC-INFO",
      description: "Health Information",
    },
  ];

  const handleEmergencyCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <>
      {/* Emergency Icon Button */}
      <button
        onClick={() => setShowEmergencyModal(true)}
        className="flex gap-2 justify-center items-center bg-green-400 px-4 py-2 rounded-lg text-white transition"
        title="Emergency Contacts"
      >
        <Phone size={30} />
        <span>Emergency</span>
      </button>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-red-600">
                🚨 Emergency Contacts
              </h2>
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-800 text-sm font-semibold">
                  ⚠️ If this is life-threatening, call 911 immediately!
                </p>
              </div>

              <div className="space-y-3">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="border rounded-lg p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{contact.name}</h3>
                        <p className="text-sm text-gray-600">
                          {contact.description}
                        </p>
                        <p className="text-lg font-bold text-blue-600">
                          {contact.number}
                        </p>
                      </div>
                      <button
                        onClick={() => handleEmergencyCall(contact.number)}
                        className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
                      >
                        <Phone size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyButton;
