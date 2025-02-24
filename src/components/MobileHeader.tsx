
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
    <header className="flex items-center justify-between p-4 animate-fade-in">
      <div>
        <h1 className="text-2xl font-serif text-gray-900 font-semibold tracking-tight">{username}</h1>
        <p className="text-sm text-gray-500 mt-0.5">{greeting}</p>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
