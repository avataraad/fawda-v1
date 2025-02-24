
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 pb-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Rummage through your stuff"
          className="w-full py-3 px-4 pl-11 rounded-2xl border border-gray-200/50 text-sm placeholder:text-gray-400 
                   shadow-sm transition-all duration-300 
                   focus:border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
