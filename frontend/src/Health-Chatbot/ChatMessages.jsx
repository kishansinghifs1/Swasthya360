const ChatMessages = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg shadow ${
              msg.sender === "user"
                ? "bg-cyan-500 text-white rounded-br-none"
                : "bg-gray-200 text-gray-800 rounded-bl-none"
            }`}
          >
            {msg.type === "text" ? (
              msg.text
            ) : (
              <img src={msg.image} alt="uploaded" className="rounded-lg max-h-48" />
            )}
            <div className="text-xs mt-1 opacity-70">{msg.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
