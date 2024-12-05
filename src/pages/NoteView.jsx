//NotesList.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import CourseDropdown from "../components/CourseDropdown";
import NoteList from "../components/NoteList";
import { useStore } from "../store/Store";
import { filterNotes } from "../utils/filterNotes";
import { useFetchData } from "../utils/useFetchData";




function NotesView() {
  const { 
  courses,
  notes,
  hasFetchedCourses,
  hasFetchedNotes,
  fetchNotesData,
  delNote
  } = useStore();

  const [selectedCourse, setSelectedCourse] = useState("");
  const filteredNotes = filterNotes(notes, selectedCourse)

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);

  return (
    <div>
      <div>
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>
      <NoteList notes={filteredNotes} onDelete={delNote} />
      <button>
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}

export default NotesView;
