// NoteItem.jsx

function NoteItem({ filteredNotes }) {
  // Display a message if there are no filtered notes to show
  if (filteredNotes.length === 0) {
    return <p className="text-gray-500">No notes to display.</p>;
  }

  return (
    <div className="mb-4">
      {/* --- Displaying the List of Notes --- */}
      <ul className="space-y-2">
        {filteredNotes.map((note, i) => (
          <li
            key={i} // Using the index as a unique key for each note
            className="p-4 bg-gray-50 rounded-md shadow-md overflow-hidden max-h-32 relative"
          >
            <div className="text-gray-700 text-sm leading-relaxed break-words line-clamp-4">
              {note.text}  {/* Display note content */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteItem;
