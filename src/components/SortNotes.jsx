import { Filter } from "lucide-react";

function SortNotes({ sortOrder, onSortOrderChange }) {
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
    onSortOrderChange(newSortOrder);
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleSortOrder}
        className="flex items-center text-orange-500 hover:text-orange-600 transition"
      >
        <Filter className="w-4 h-4" />
      </button>
    </div>
  );
}

export default SortNotes;
