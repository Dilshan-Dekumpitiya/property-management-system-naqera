import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Input Field - Increased pr-10 so text doesn't hide behind the icon */}
      <input
        type="text"
        placeholder="Search"
        className="w-full h-10 pl-4 pr-10 border border-gray-200 rounded-full text-sm bg-white placeholder-gray-400 focus:outline-none focus:border-indigo-900 focus:ring-1 focus:ring-indigo-900 transition-all"
      />
      
      <Search className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-7 p-1.5 text-white bg-orange-700 rounded-full pointer-events-none" />
    </div>
  );
}