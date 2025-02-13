import MobileHeader from "@/components/MobileHeader";
import SearchBar from "@/components/SearchBar";
import ItemGrid from "@/components/ItemGrid";
import ActionButton from "@/components/ActionButton";
const Index = () => {
  return <main className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-10">
        <MobileHeader />
        <SearchBar />
        <div className="px-4 mt-2 mb-4">
          <h2 className="font-varta text-gray-900 my-0 text-xl font-bold">My stuff</h2>
        </div>
      </div>
      <div className="pt-[172px]">
        <ItemGrid />
      </div>
      <ActionButton />
    </main>;
};
export default Index;