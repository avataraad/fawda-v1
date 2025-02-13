
import { Plus } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-4">
      <p className="text-gray-500 text-sm">Nothing to see here...</p>
      <h2 className="text-xl font-medium text-gray-900 mt-1 mb-8">Store your first thing</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
        <Plus className="h-8 w-8 text-gray-400" />
      </div>
    </div>
  );
};

export default EmptyState;
