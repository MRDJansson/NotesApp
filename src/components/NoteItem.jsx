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
              className="p-4 bg-gray-50 rounded-md shadow-md border-r-4 border-orange-500 overflow-hidden max-h-32 relative"
            >
              <div className="text-gray-700 text-sm leading-relaxed break-words line-clamp-4">
                {note.text}
              </div>

              <div className="absolute bottom-0 right-0 w-full text-right bg-gradient-to-t from-gray-50 via-transparent h-6 pointer-events-none line-clamp-visible">
                {note.text.length > 100 && (
                  <span className="text-gray-500 pr-2">...</span>
                )}
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
