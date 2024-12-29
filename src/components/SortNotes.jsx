// SortNotes.jsx

import { Filter } from "lucide-react";

function SortNotes({ sortOrder, onSortOrderChange }) {
  // --- Toggle between sorting by newest and oldest ---
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
    onSortOrderChange(newSortOrder);  // Change sort order when toggled
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleSortOrder}  // Trigger toggleSortOrder on button click
        className="flex items-center text-orange-500 hover:text-orange-600 transition"
      >
        <Filter className="w-4 h-4" />
      </button>
    </div>
  );
}

export default SortNotes;
