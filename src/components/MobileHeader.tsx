
import { Bell, Menu } from "lucide-react";

interface MobileHeaderProps {
  username?: string;
  greeting?: string;
}

const MobileHeader = ({ 
  username = "Fawda", 
  greeting = "Hi Raad" 
}: MobileHeaderProps) => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-100">
      <div>
        <h1 className="text-[2rem] font-serif text-gray-900 font-medium tracking-tight leading-tight">{username}</h1>
        <p className="text-base text-gray-600">{greeting}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
