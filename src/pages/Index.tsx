
import MobileHeader from "@/components/MobileHeader";
import SearchBar from "@/components/SearchBar";
import ItemGrid from "@/components/ItemGrid";
import ActionButton from "@/components/ActionButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-10 bg-white">
        <MobileHeader />
        <SearchBar />
        <div className="px-4 mt-2 mb-4">
          <h2 className="text-2xl font-serif text-gray-900 mb-4">My stuff</h2>
        </div>
      </div>
      <div className="pt-[172px]">
        <ItemGrid />
      </div>
      <ActionButton />
    </main>
  );
};

export default Index;
