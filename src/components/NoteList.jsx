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
    <ul className="space-y-4">
      {notes.map((note) => (
        <li
          key={note.id}
          className={`p-4 rounded-lg bg-white shadow-lg border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300 cursor-pointer group 
                     hover:scale-105`}
          onClick={() => onDelete(note.id)}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center"> 
              <span className="text-orange-500 font-semibold mr-2">{note.course.name}</span> 
              <small className="text-gray-500">({note.course.id})</small>
            </div>

            <small className="text-gray-500 font-medium">
              {new Date(note.timestamp).toLocaleString("fi-FI")}
            </small>
          </div>
          
          <p className="mt-2 text-gray-700">{note.text}</p> 
          <div className="mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={() => onDelete(note.id)}
              className="text-red-500 hover:text-red-600 transition-colors duration-300"
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