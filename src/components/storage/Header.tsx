
import { ArrowLeft, Bell, Menu } from "lucide-react";

export const Header = () => {
  return (
    <div className="px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={() => window.history.back()}>
          <ArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-serif">Fawda</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2">
          <Bell className="h-5 w-5" />
        </button>
        <button className="p-2">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
