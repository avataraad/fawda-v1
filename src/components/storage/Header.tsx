
import { ArrowLeft, Bell, Menu } from "lucide-react";

export const Header = () => {
  return (
    <div className="px-4 py-4 flex items-center justify-between bg-white border-b border-gray-100">
      <div className="flex items-center gap-4">
        <button onClick={() => window.history.back()} className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <ArrowLeft className="h-6 w-6 text-gray-900" />
        </button>
        <h1 className="text-2xl font-serif text-gray-900">Fawda</h1>
      </div>
      <div className="flex items-center gap-2">
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <Bell className="h-5 w-5 text-gray-600" />
        </button>
        <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};
