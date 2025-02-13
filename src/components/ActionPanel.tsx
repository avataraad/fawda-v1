
import { ArrowDownToLine, ArrowUpFromLine, Minus } from "lucide-react";

const ActionPanel = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="bg-gray-900 text-white p-4 rounded-t-[2rem] mx-4 shadow-lg">
        <h2 className="text-lg font-medium mb-3">What's up?</h2>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center text-center bg-gray-700 rounded-xl p-3">
            <ArrowUpFromLine className="h-6 w-6 mb-1" />
            <span className="font-medium text-sm">Store</span>
            <span className="text-[10px] text-gray-400 mt-1 leading-tight">
              Store away my stuff please, it's invading my precious space!
            </span>
          </button>
          <button className="flex flex-col items-center text-center bg-gray-700 rounded-xl p-3">
            <ArrowDownToLine className="h-6 w-6 mb-1" />
            <span className="font-medium text-sm">Return</span>
            <span className="text-[10px] text-gray-400 mt-1 leading-tight">
              I miss it, I want it, I need it - bring it back to me please!
            </span>
          </button>
        </div>
        <button className="mt-2 w-full flex justify-center">
          <Minus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;
