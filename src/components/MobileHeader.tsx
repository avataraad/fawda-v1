
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
    <header className="flex items-center justify-between p-4">
      <div>
        <h1 className="text-2xl font-serif text-gray-900">{username}</h1>
        <p className="text-sm text-gray-600">{greeting}</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="p-2">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
