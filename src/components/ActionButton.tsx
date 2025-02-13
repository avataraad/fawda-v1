
import { Plus } from "lucide-react";
import { useState } from "react";
import ActionPanel from "./ActionPanel";

const ActionButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shadow-lg"
      >
        <Plus className="h-6 w-6 text-white" />
      </button>
      {isPanelOpen && <ActionPanel onClose={() => setIsPanelOpen(false)} />}
    </>
  );
};

export default ActionButton;
