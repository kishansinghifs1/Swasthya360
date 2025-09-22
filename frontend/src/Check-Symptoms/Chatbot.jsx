import useSymptomStore from "../Store/SysmptomStore";
import emptyAnimation from "../assets/Medical app.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { UserCircle, Stethoscope } from "lucide-react";

const Chatbot = () => {
  const { queryMsg, APIMsg } = useSymptomStore();
  const [visibleChats, setVisibleChats] = useState(0);
  const chatContainerRef = useRef(null);

  function parseResponse(text) {
    const sections = {};
    const regex =
      /(ASSESSMENT:|IMMEDIATE CARE:|EMERGENCY SIGNS:|DOCTOR ADVICE:|PREVENTIVE TIPS:|Medications TIPS:|DISCLAIMER:)/g;

    const parts = text.split(regex).filter(Boolean);

    for (let i = 0; i < parts.length; i += 2) {
      const key = parts[i].replace(":", "").trim();
      const value = parts[i + 1]?.trim() || "";
      sections[key] = value;
    }

    return sections;
  }

  const structured = parseResponse(APIMsg);

  const chatOrder = [
    { label: "ASSESSMENT", type: "text" },
    { label: "DOCTOR ADVICE", type: "text" },
    { label: "EMERGENCY SIGNS", type: "list" },
    { label: "Medications TIPS", type: "text" },
    { label: "PREVENTIVE TIPS", type: "list" },
    { label: "IMMEDIATE CARE", type: "list" },
    { label: "DISCLAIMER", type: "text" },
  ];

  // Show chats one by one with delay
  useEffect(() => {
    if (!APIMsg) return;

    setVisibleChats(0); // reset
    chatOrder.forEach((_, i) => {
      setTimeout(() => {
        setVisibleChats((prev) => prev + 1);
      }, i * 1200);
    });
  }, [APIMsg]);

  // Auto scroll to bottom when chats update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [visibleChats, queryMsg]);

  return (
    <div className="relative p-5 w-3/7 h-[85vh] shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg flex flex-col">
      <h1 className="text-xl font-bold text-center mb-3">
        Your Virtual Doctor
      </h1>

      {/* Scrollable chat area */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto pr-2 space-y-2"
      >
        {/* User Query */}
        {queryMsg ? (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-end items-start gap-2 my-3"
          >
            <div className="bg-green-100 p-3 rounded-xl max-w-[70%]">
              {queryMsg}
            </div>
            <UserCircle className="w-8 h-8 text-green-600" />
          </motion.div>
        ) : (
          <div className="mt-10 flex flex-col justify-center items-center">
            <Lottie
              animationData={emptyAnimation}
              loop={true}
              className="w-100 h-100"
            />
            <h1 className="text-center text-lg font-semibold">
              Select your symptoms and check, to connect with your Virtual
              Doctor
            </h1>
          </div>
        )}

        {/* Doctor Chats */}
        {APIMsg &&
          chatOrder.map((item, i) => {
            const content = structured[item.label];
            if (!content || i >= visibleChats) return null;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex justify-start items-start gap-2 my-2"
              >
                <Stethoscope className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="bg-gray-100 p-3 rounded-xl max-w-[70%]">
                  <h2 className="font-semibold text-sm mb-1">{item.label}</h2>
                  {item.type === "list" ? (
                    <ul className="list-disc ml-4 text-sm">
                      {content
                        .split("\n")
                        .map(
                          (line, idx) =>
                            line.trim() && (
                              <li key={idx}>{line.replace("*", "").trim()}</li>
                            )
                        )}
                    </ul>
                  ) : (
                    <p className="text-sm">{content}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Chatbot;
