
import MobileHeader from "@/components/MobileHeader";
import SearchBar from "@/components/SearchBar";
import ItemGrid from "@/components/ItemGrid";
import ActionButton from "@/components/ActionButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <MobileHeader />
      <SearchBar />
      <div className="px-4 mt-2 mb-4">
        <h2 className="text-xl font-serif text-gray-900">My stuff</h2>
      </div>
      <ItemGrid />
      <ActionButton />
    </main>
  );
};

export default Index;
