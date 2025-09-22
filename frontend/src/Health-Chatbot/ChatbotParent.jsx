import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import emptyAnimation from "../assets/ArtificialIntelligenceChatbot";
import Lottie from "lottie-react";

const ChatbotParent = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      type: "text", // ✅ Added type so it renders like other messages
      text: "Hello! I'm Swasthya360, your AI Health Assistant. How can I help you today?",
      image: null, // keep structure consistent
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);
  const handleSend = (msg) => {
    // normalize if parent gets a string
    if (typeof msg === "string") {
      setMessages((p) => [
        ...p,
        { id: Date.now(), sender: "user", type: "text", text: msg },
      ]);
    } else {
      setMessages((p) => [...p, msg]);
    }
  };

  // ✅ handle sending messages (text / image)
  // const handleSend = (content, type = "text") => {
  //   if (!content) return;

  //   const newMessage = {
  //     id: Date.now(),
  //     sender: "user",
  //     type,
  //     text: type === "text" ? content : "",
  //     image: type === "image" ? content : null,
  //     time: new Date().toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     }),
  //   };

  //   setMessages((prev) => [...prev, newMessage]);

  //   // 🔥 Demo bot reply (replace with backend)
  //   if (type === "text") {
  //     setTimeout(() => {
  //       setMessages((prev) => [
  //         ...prev,
  //         {
  //           id: Date.now() + 1,
  //           sender: "bot",
  //           type: "text",
  //           text: "Thanks for your query. I’ll connect you with health info shortly...",
  //           image: null,
  //           time: new Date().toLocaleTimeString([], {
  //             hour: "2-digit",
  //             minute: "2-digit",
  //           }),
  //         },
  //       ]);
  //     }, 1000);
  //   }
  // };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-cyan-100 via-white to-cyan-200">
      <div className="w-full max-w-3xl h-[80vh] flex flex-col bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        {/* ✅ Header */}
        <ChatHeader />

        {/* ✅ Messages */}

        {/* <div className="flex justify-center items-center">
          {" "}
          <Lottie
            animationData={emptyAnimation}
            loop={true}
            className="w-80 h-70"
          />
        </div> */}
        {/* ✅ Input (with voice + image) */}
        <div className="flex flex-col h-[60vh]">
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`max-w-[75%] p-2 rounded-lg ${
                  m.sender === "user"
                    ? "ml-auto bg-cyan-500 text-white"
                    : "mr-auto bg-white text-gray-800 shadow"
                }`}
              >
                {m.type === "text" && <div>{m.text}</div>}
                {m.type === "image" && (
                  <img
                    src={m.image}
                    alt="user-upload"
                    className="max-w-full rounded"
                  />
                )}
                {m.type === "audio" && <audio src={m.audio} controls />}
              </div>
            ))}
          </div>

          <ChatInput onSend={handleSend} />
        </div>

        {/* ✅ Disclaimer */}
        <div className="text-xs text-gray-500 text-center p-2 border-t">
          ⚠️ This is for informational purposes only. Consult a healthcare
          professional for medical advice.
        </div>
      </div>
    </div>
  );
};

export default ChatbotParent;
