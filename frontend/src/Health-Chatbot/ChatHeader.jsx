import { ShieldCheck, Circle } from "lucide-react";
const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-cyan-500 text-white">
      <div className="flex items-center gap-2">
        <img src="Swasthya360.png" alt="Swasthya360" className="w-8 h-8 rounded-full" />
        <div>
          <h2 className="font-semibold">Swasthya360 Assistant</h2>
          <div className="flex items-center text-xs text-green-200">
            <Circle className="w-3 h-3 fill-green-400 text-green-400 mr-1" />
            Online
          </div>
        </div>
      </div>
      <div className="flex gap-3 text-sm">
        <span className="flex items-center gap-1"><ShieldCheck size={16}/> Secure</span>
        <span>24/7</span>
      </div>
    </div>
  );
};

export default ChatHeader;
