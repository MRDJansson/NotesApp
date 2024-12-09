// NoteList.jsx


function NoteList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 italic py-8">
        No notes found. Start creating!
      </p>
    );
  }

  return (
    <ul className="space-y-6">
      {notes.map((note) => (
        <li
          key={note.id}
          className="p-6 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 cursor-pointer group"
          onClick={() => onDelete(note.id)}
        >
          <div className="flex justify-between items-start mb-2">
            <small className="text-gray-500 font-medium">
              {new Date(note.timestamp).toLocaleString("fi-FI")}
            </small>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full">
              {note.course.name}
            </span>
            <small className="text-gray-400">ID: {note.course.id}</small>
          </div>
          <p className="mt-2 text-gray-800 leading-relaxed">{note.text}</p>
          <div className="mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              className="text-red-500 hover:text-orange-700 transition-colors duration-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;


  