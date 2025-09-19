import { useState } from "react";
import { AlertTriangle, Phone, X } from "lucide-react";

const EmergencyButton = () => {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const emergencyContacts = [
    {
      name: "Emergency Services",
      number: "911",
      description: "Police, Fire, Medical Emergency (US)",
    },
    {
      name: "Poison Control",
      number: "1-800-222-1222",
      description: "24/7 Poison Emergency (US)",
    },
    {
      name: "Suicide & Crisis Lifeline",
      number: "988",
      description: "Mental Health Crisis & Suicide Prevention (US)",
    },
    {
      name: "CDC Health Line",
      number: "1-800-232-4636",
      description: "General Health Information (CDC, US)",
    },
    {
      name: "SAMHSA Helpline",
      number: "1-800-662-4357",
      description: "Substance Abuse & Mental Health Services (US)",
    },
    {
      name: "National Sexual Assault Hotline",
      number: "1-800-656-4673",
      description: "Confidential Support for Sexual Assault Survivors",
    },
    {
      name: "Domestic Violence Hotline",
      number: "1-800-799-7233",
      description: "24/7 Support for Domestic Violence Survivors",
    },
    {
      name: "Red Cross Helpline",
      number: "1-800-733-2767",
      description: "Disaster Relief & Emergency Assistance",
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
        className="flex gap-2 justify-center items-center text-red-600 hover:text-red-700 font-medium"
        title="Emergency Contacts"
      >
        <AlertTriangle size={22} />
        <span>Emergency</span>
      </button>

      {/* Emergency Modal */}
      {showEmergencyModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowEmergencyModal(false)}
        >
          <div
            className="bg-white rounded-xl w-full max-w-lg max-h-[80vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-red-600 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Emergency Contacts
              </h2>
              <button
                onClick={() => setShowEmergencyModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-red-800 text-sm font-semibold">
                  ⚠️ If this is life-threatening, call 911 immediately!
                </p>
              </div>

              {emergencyContacts.map((contact, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-3 shadow-sm flex items-center justify-between"
                >
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.description}</p>
                    <p className="text-lg font-bold text-blue-600">{contact.number}</p>
                  </div>
                  <button
                    onClick={() => handleEmergencyCall(contact.number)}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg"
                  >
                    <Phone size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmergencyButton;
