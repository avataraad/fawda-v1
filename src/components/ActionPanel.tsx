
import { Box, Minus } from "lucide-react";

interface ActionPanelProps {
  onClose: () => void;
}

const ActionPanel = ({ onClose }: ActionPanelProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-0 right-0">
        <div className="bg-gray-900 text-white p-4 rounded-t-[2rem] mx-4 shadow-lg">
          <h2 className="text-xl font-medium mb-4">What's up?</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center text-center bg-gray-700 rounded-xl p-4">
              <div className="bg-gray-600 rounded-full p-2 mb-2">
                <Box className="h-6 w-6" />
              </div>
              <span className="font-medium text-sm mb-1">Store</span>
              <span className="text-xs text-gray-400 leading-tight">
                Store away my stuff please, it's invading my precious space!
              </span>
            </button>
            <button className="flex flex-col items-center text-center bg-gray-700 rounded-xl p-4">
              <div className="bg-gray-600 rounded-full p-2 mb-2">
                <Box className="h-6 w-6" />
              </div>
              <span className="font-medium text-sm mb-1">Return</span>
              <span className="text-xs text-gray-400 leading-tight">
                I miss it, I want it, I need it - bring it back to me please!
              </span>
            </button>
          </div>
          <button 
            onClick={onClose}
            className="mt-3 w-full flex justify-center"
          >
            <Minus className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionPanel;
