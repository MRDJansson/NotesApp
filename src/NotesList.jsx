//Courses.jsx

import { useState } from "react";
import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";



function NotesList() {
  const lista = useStore((state) => state.lista);
  const lista2 = useStore((state) => state.lista2);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLocked, setIsLocked] = useState(false);

  const filteredNotes = lista2.filter(
    (note) => note.courseName === selectedCourse);

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
          {lista.map((kurssi, i) => (
        <option key={i} value={kurssi}>
              {kurssi}
        </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          {filteredNotes.map((note, i) => (
            <li key={i}>{note.content}</li>
          ))}
        </ul>
      </div>
    </div>);
}

export default NotesList;
