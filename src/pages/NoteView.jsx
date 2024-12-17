//NotesList.jsx

import { useEffect, useState } from "react";
import BackButton from "../components/buttons/BackButton";
import CourseDropdown from "../components/CourseDropdown";
import NoteList from "../components/NoteList";
import SortNotes from "../components/SortNotes";
import { useStore } from "../store/Store";
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
  const [sortedNotes, setSortedNotes] = useState([]);

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses && !hasFetchedNotes);

  const filteredNotes = notes.filter((note) =>
    !selectedCourse || note.course.name === selectedCourse
  );

  useEffect(() => {
    setSortedNotes(filteredNotes);
  }, [filteredNotes]);

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

      <SortNotes 
        notes={filteredNotes} 
        onSortedNotesChange={setSortedNotes}
      />

      <NoteList notes={sortedNotes} onDelete={delNote} />

      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default NotesView;
