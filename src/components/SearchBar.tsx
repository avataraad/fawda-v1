
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="px-4 pb-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Rummage through your stuff"
          className="w-full py-3.5 px-4 pl-11 rounded-xl border border-gray-200 text-base placeholder:text-gray-400 
                   transition-all duration-300 bg-gray-50
                   focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
