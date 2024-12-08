// NoteList.jsx

function NoteList({ notes, onDelete }) {
    if (notes.length === 0) {
      return <p>No notes!</p>;
    }
  
    return (
      <ul className="space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="p-4 bg-white rounded-md shadow-md border-r-4 border-orange-500 hover:shadow-lg cursor-pointer"
            onClick={() => onDelete(note.id)}
          >
            <small className="text-gray-500">
              {new Date(note.timestamp).toLocaleString("fi-FI")} {note.course.name} (ID: {note.course.id})
            </small>
            <p className="mt-2 text-gray-800">{note.text}</p>
          </li>
        ))}
      </ul>

    );
  }
  
  export default NoteList;
  