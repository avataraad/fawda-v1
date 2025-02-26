
import { Plus } from "lucide-react";
import { useState } from "react";
import ActionPanel from "./ActionPanel";

const ActionButton = () => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsPanelOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center shadow-lg hover:bg-teal-700 transition-colors"
      >
        <Plus className="h-7 w-7 text-white" />
      </button>
      {isPanelOpen && <ActionPanel onClose={() => setIsPanelOpen(false)} />}
    </>
  );
};

export default ActionButton;
