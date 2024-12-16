//NotesList.jsx

import { useState } from "react";
import BackButton from "../components/BackButton";
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
  const filteredNotes = filterNotes(notes, selectedCourse);

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-3xl mx-auto shadow-md border-r-4 border-b-4 border-orange-500">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Manage Your Notes</h1>
      <p className="text-gray-600 mb-6">
        View your saved notes. You can delete or filter them by course.
      </p>

      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>

      <NoteList notes={filteredNotes} onDelete={delNote} />

      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default NotesView;
