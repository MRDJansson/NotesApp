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
    <div className="p-6 bg-white shadow-md rounded-md max-w-2xl mx-auto shadow-md border-r-4 border-b-4 border-orange-500">
      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>
      <NoteList notes={filteredNotes} onDelete={delNote} />
      <div className="mt-6 text-right">
        <button className="mt-4 p-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>

  );
}

export default NotesView;
