//Courses.jsx

import { useState } from "react";
import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";
import { Link } from "react-router-dom";



function NotesList() {
  const lista = useStore((state) => state.lista);
  const lista2 = useStore((state) => state.lista2);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const delNote = useStore((state) => state.delNote)

  const cc = (id) => {
    delNote(id)
  }

  const filteredNotes = selectedCourse === "" 
    ? lista2
    : lista2.filter((note) => note.courseName === selectedCourse);

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
            <small>asasa
              {new Date(note.date).toLocaleDateString("fi-FI")} 
              {note.courseName} 
              (ID: {lista.find(course => course.name === note.courseName)?.id})
            </small>
              <p>{note.content}</p>
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
