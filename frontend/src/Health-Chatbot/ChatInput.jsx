import { useState } from "react";
import { Mic, Image as ImageIcon, Send, StopCircle } from "lucide-react";
import useUserStore from "../Store/userStore"; // Import your existing user store

const API_BASE_URL = "https://swasthya360-7.onrender.com/api/v1/swasthya360";

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const { user } = useUserStore(); // Get user from your existing store
  const userId = user?.id || user?._id; // Handle different ID field names

  // ✅ Handle Text Send with API Integration
  const handleSendClick = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    if (!userId) {
      alert("Please log in to send messages");
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      type: selectedImage ? "image" : "text",
      text: input || "",
      image: selectedImage ? URL.createObjectURL(selectedImage) : null,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add user message to chat immediately
    onSend(userMessage);
    setInput("");
    setIsLoading(true);
    try {
      let response;
      if (selectedImage) {
        // Send image + text
        const formData = new FormData();
        formData.append("file", selectedImage);
        formData.append("userId", userId);
        if (input) formData.append("message", input);

        response = await fetch(`${API_BASE_URL}/ask/image`, {
          method: "POST",
          body: formData,
        });
      } else {
        // Send text only
        response = await fetch(`${API_BASE_URL}/ask`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: input,
            userId: userId,
          }),
        });
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send");

      const aiMessage = {
        id: Date.now() + 1,
        sender: "bot",
        type: "text",
        text: data.data.response,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      onSend(aiMessage);
    } catch (error) {
      console.error("Error sending message:", error);
      onSend({
        id: Date.now() + 1,
        sender: "bot",
        type: "text",
        text: `Sorry, error: ${error.message}`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
    } finally {
      setIsLoading(false);
      setSelectedImage(null); // ✅ clear after send
    }
  };

  // ✅ Handle Enter key
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendClick();
    }
  };

  // ✅ Handle Image Upload with API Integration
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || isLoading) return;

    if (!userId) {
      alert("Please log in to send images");
      return;
    }

    // Validate file type and size
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      alert("File size must be less than 50MB");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    const userMessage = {
      id: Date.now(),
      sender: "user",
      type: "image",
      image: imageUrl,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    // Add user image to chat immediately
    onSend(userMessage);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userId);

      const response = await fetch(`${API_BASE_URL}/ask/image`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to analyze image");
      }

      // Add AI response to chat
      const aiMessage = {
        id: Date.now() + 1,
        sender: "bot",
        type: "text",
        text: data.data.response,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      onSend(aiMessage);
    } catch (error) {
      console.error("Error analyzing image:", error);

      const errorMessage = {
        id: Date.now() + 1,
        sender: "bot",
        type: "text",
        text: `Sorry, I couldn't analyze the image: ${error.message}. Please try again.`,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      onSend(errorMessage);
    } finally {
      setIsLoading(false);
    }

    // Reset input
    e.target.value = "";
  };
  // ✅ Only store image (don’t send yet)
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image");
      return;
    }
    setSelectedImage(file);
  };

  // ✅ Handle Voice Input with Recording and API Integration
  const handleVoiceInput = async () => {
    if (!userId) {
      alert("Please log in to send voice messages");
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      // Fallback to Speech Recognition
      if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        const recognition = new (window.SpeechRecognition ||
          window.webkitSpeechRecognition)();
        recognition.lang = "en-IN";
        recognition.start();

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
        };

        recognition.onerror = (event) => {
          console.error("Speech recognition error:", event.error);
          alert("Speech recognition failed. Please try typing instead.");
        };
      } else {
        alert("Voice input is not supported in your browser");
      }
      return;
    }

    if (isRecording) {
      // Stop recording
      if (mediaRecorder) {
        mediaRecorder.stop();
      }
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(stream);
        const audioChunks = [];

        recorder.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        recorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const audioFile = new File([audioBlob], "voice_message.wav", {
            type: "audio/wav",
          });

          // Add voice message to chat
          const audioUrl = URL.createObjectURL(audioBlob);
          const userMessage = {
            id: Date.now(),
            sender: "user",
            type: "audio",
            audio: audioUrl,
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          onSend(userMessage);
          setIsLoading(true);

          try {
            const formData = new FormData();
            formData.append("file", audioFile);
            formData.append("userId", userId);

            const response = await fetch(`${API_BASE_URL}/ask/voice`, {
              method: "POST",
              body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.error || "Failed to process voice message");
            }

            // Add AI response to chat
            const aiMessage = {
              id: Date.now() + 1,
              sender: "bot",
              type: "text",
              text: data.data.response,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };

            onSend(aiMessage);
          } catch (error) {
            console.error("Error processing voice message:", error);

            const errorMessage = {
              id: Date.now() + 1,
              sender: "bot",
              type: "text",
              text: `Sorry, I couldn't process the voice message: ${error.message}. Please try again.`,
              time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };

            onSend(errorMessage);
          } finally {
            setIsLoading(false);
          }

          // Stop all tracks to release microphone
          stream.getTracks().forEach((track) => track.stop());
          setIsRecording(false);
          setMediaRecorder(null);
        };

        recorder.start();
        setMediaRecorder(recorder);
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing microphone:", error);
        alert("Could not access microphone. Please check permissions.");
      }
    }
  };

  return (
    <div className="border-t bg-gray-50">
      <div className="flex items-center p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={
            isLoading ? "AI is thinking..." : "Type your health question..."
          }
          className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none"
        />

        {/* 🎤 Voice */}
        <button
          onClick={handleVoiceInput}
          disabled={isLoading}
          className={`ml-2 p-2 rounded-full transition-colors ${
            isRecording
              ? "bg-red-500 text-white animate-pulse"
              : "hover:bg-cyan-100 text-cyan-600 disabled:text-gray-400 disabled:hover:bg-transparent"
          }`}
          title={isRecording ? "Stop recording" : "Start voice message"}
        >
          {isRecording ? <StopCircle size={22} /> : <Mic size={22} />}
        </button>

        {/* 📷 Image Upload */}
        <label
          className={`ml-2 p-2 rounded-full cursor-pointer transition-colors ${
            isLoading
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-cyan-100 text-cyan-600"
          }`}
          title="Select image"
        >
          <ImageIcon size={22} />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageSelect}
            disabled={isLoading}
          />
        </label>

        {/* ➡️ Send */}
        <button
          onClick={handleSendClick}
          disabled={isLoading || (!input.trim() && !selectedImage)}
          className="ml-2 p-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          title="Send message"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Send size={20} />
          )}
        </button>
      </div>
      {selectedImage && (
        <div className="px-3 pb-2">
          <div className="flex items-center gap-2">
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="preview"
              className="w-16 h-16 object-cover rounded-lg border"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        </div>
      )}
      {isRecording && (
        <div className="px-3 pb-2">
          <div className="flex items-center text-red-600 text-sm">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse mr-2"></div>
            Recording... Click the microphone to stop
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInput;
