import { useState } from "react";
import { Mic, Image as ImageIcon, Send } from "lucide-react";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");

  // ✅ Handle Text Send
  const handleSendClick = () => {
    if (input.trim()) {
      onSend(input, "text");
      setInput("");
    }
  };

  // ✅ Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  // ✅ Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onSend(imageUrl, "image");
    }
  };

  // ✅ Handle Voice Input (Web Speech API)
  const handleVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-IN";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
    };
  };

  return (
    <div className="flex items-center p-3 border-t bg-gray-50">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your health question..."
        className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
      />

      {/* 🎤 Voice */}
      <button
        onClick={handleVoiceInput}
        className="ml-2 p-2 rounded-full hover:bg-cyan-100 text-cyan-600"
      >
        <Mic size={22} />
      </button>

      {/* 📷 Image Upload */}
      <label className="ml-2 p-2 rounded-full hover:bg-cyan-100 text-cyan-600 cursor-pointer">
        <ImageIcon size={22} />
        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
      </label>

      {/* ➡️ Send */}
      <button
        onClick={handleSendClick}
        className="ml-2 p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600"
      >
        <Send size={20} />
      </button>
    </div>
  );
};

export default ChatInput;
