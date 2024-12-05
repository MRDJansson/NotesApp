// NoteList.jsx

function NoteList({ notes, onDelete }) {
    if (notes.length === 0) {
      return <p>No notes!</p>;
    }
  
    return (
      <ul>
        {notes.map((note) => (
          <li key={note.id} onClick={() => onDelete(note.id)}>
            <small>
              {new Date(note.timestamp).toLocaleString("fi-FI")}{" "} 
              {note.course.name} {" "}
              (ID: {note.course.id})
            </small>
            <p>{note.text}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default NoteList;
  