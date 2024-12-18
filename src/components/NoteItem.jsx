function NoteItem({ filteredNotes }) {
  if (filteredNotes.length === 0) {
    return <p className="text-gray-500">No notes to display.</p>;
  }

  return (
    <div className="mb-4">
      {filteredNotes.length > 0 ? (
        <ul className="space-y-2">
          {filteredNotes.map((note, i) => (
            <li
              key={i}
              className="p-4 bg-gray-50 rounded-md shadow-md overflow-hidden max-h-32 relative"
            >
              <div className="text-gray-700 text-sm leading-relaxed break-words line-clamp-4">
                {note.text}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No notes to display.</p>
      )}
    </div>
  );
}

export default NoteItem;
