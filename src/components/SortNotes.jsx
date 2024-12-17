import { Filter } from "lucide-react";
import { useState } from "react";

function SortNotes({ notes, onSortedNotesChange }) {
  const [sortOrder, setSortOrder] = useState("newest");

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "newest" ? "oldest" : "newest";
    setSortOrder(newSortOrder);
  
    const sortedNotes = [...notes].sort((a, b) => {
      if (newSortOrder === "newest") {
        return new Date(b.timestamp) - new Date(a.timestamp);
      } else {
        return new Date(a.timestamp) - new Date(b.timestamp);
      }
    });
  
    onSortedNotesChange(sortedNotes);
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
