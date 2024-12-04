//NotesList.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import CourseSelect from "../components/CourseSelector";
import NotesDisplay from "../components/NotesDisplay";
import { useStore } from "../store/Store";
import { filterNotes } from "../utils/filterNotes";
import { useFetchData } from "../utils/useFetchData";




function NotesList() {
  const lista = useStore((state) => state.lista);
  const lista2 = useStore((state) => state.lista2);
  const [selectedCourse, setSelectedCourse] = useState("");
  const delNote = useStore((state) => state.delNote)
  const fetchNotesData = useStore((state) => state.fetchNotesData)
  const hasFetchedNotes = useStore((state) => state.hasFetchedNotes);
  
  useFetchData(fetchNotesData, hasFetchedNotes)


  const filteredNotes = filterNotes(lista2, selectedCourse)


  return (
    <div>
      <div>
        <CourseSelect
          courses={lista}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>
      <NotesDisplay notes={filteredNotes} onDelete={delNote} />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

export default NotesList;
