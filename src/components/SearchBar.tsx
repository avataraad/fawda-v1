
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 pb-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Rummage through your stuff"
          className="w-full py-2 px-4 pl-10 rounded-lg border border-gray-300 text-sm"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
