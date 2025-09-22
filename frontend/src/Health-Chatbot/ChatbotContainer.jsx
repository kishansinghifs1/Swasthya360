import { useState } from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatbotContainer = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I'm Swasthya360, your AI Health Assistant. How can I help you today?",
      time: "12:01 PM",
    },
  ]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: "Thanks for your query. I’ll guide you shortly...",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-200">
        <ChatHeader />
        <ChatMessages messages={messages} />

        <ChatInput onSend={handleSend} />
        <div className="text-xs text-gray-500 text-center p-2 border-t">
          ⚠️ This is for informational purposes only. Consult a healthcare
          professional for medical advice.
        </div>
      </div>
    </div>
  );
};

export default ChatbotContainer;
