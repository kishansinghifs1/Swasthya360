import { chatmsg } from "../Utils/Constants";
const Chatbot = () => {
  return (
    <div className="relative p-5  w-2/5  shadow-[0_0_10px_rgba(0,0,0,0.3)] rounded-lg">
      <h1 className="text-xl font-bold">Chat Assistant</h1>
      <div className="absolute bottom-0">
        {chatmsg.map((msg) => (
          <p
            key={msg}
            className="bg-gray-300 border-2 border-gray-400 m-2 p-5 rounded-xl
          "
          >
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Chatbot;
