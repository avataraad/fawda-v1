
import MobileHeader from "@/components/MobileHeader";
import SearchBar from "@/components/SearchBar";
import EmptyState from "@/components/EmptyState";
import ActionPanel from "@/components/ActionPanel";

const Index = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <MobileHeader />
      <SearchBar />
      <div className="px-4 mt-2 mb-4">
        <h2 className="text-lg font-medium text-gray-900">My stuff</h2>
      </div>
      <EmptyState />
      <ActionPanel />
    </main>
  );
};

export default Index;
