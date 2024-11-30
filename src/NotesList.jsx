//Courses.jsx

import { useEffect, useState } from "react";
import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";
import { Link } from "react-router-dom";



function NotesList() {
  const lista = useStore((state) => state.lista);
  const lista2 = useStore((state) => state.lista2);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const delNote = useStore((state) => state.delNote)
  const fetchNotesData = useStore((state) => state.fetchNotesData)
  const hasFetchedNotes = useStore((state) => state.hasFetchedNotes);
  
  useEffect(() => {
    if (!hasFetchedNotes) {
      fetchNotesData();
    }
  }, [hasFetchedNotes, fetchNotesData]);

  const cc = (id) => {
    delNote(id)
  }

    const filteredNotes = lista2.filter(
      (note) => note.course.name === selectedCourse);

  const handleSelectionChange = (e) => {
    setSelectedCourse(e.target.value);
    setIsLocked(true);
  };

  return (
    <div>
      <div>
        <select
          value={selectedCourse}
          onChange={handleSelectionChange}
          disabled={isLocked}
        >
          <option value="">Select a course</option>
          {lista.map((kurssi) => (
            <option key={kurssi.id} value={kurssi.name}>
              {kurssi.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {(lista2.length === 0 || filteredNotes.length === 0) && <p>No notes</p>}
      </div>
      <div>
        <ul>
          {filteredNotes.map((note) => (
            <li key={note.id} onClick={() => cc(note.id)}>
            <small>
              {new Date(note.timestamp).toLocaleString("fi-FI")}{" "}
              {note.course.name} {" "}
              (ID: {note.id})
            </small>
              <p>{note.text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>);
}

export default NotesList;
