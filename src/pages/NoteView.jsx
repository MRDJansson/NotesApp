//NotesList.jsx

import { useState } from "react";
import BackButton from "../components/buttons/BackButton";
import CardTitleDesc from "../components/cards/CardTitleDesc";
import CourseDropdown from "../components/CourseDropdown";
import NoteList from "../components/NoteList";
import SortNotes from "../components/SortNotes";
import { useStore } from "../store/Store";
import { sortNotesByOrder } from "../utils/sortNotes";
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
  const [sortOrder, setSortOrder] = useState("newest");

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses && !hasFetchedNotes);

  const filteredNotes = notes.filter((note) =>
    !selectedCourse || note.course.name === selectedCourse
  );

  const sortedNotes = sortNotesByOrder(filteredNotes, sortOrder);

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-3xl mx-auto shadow-md border-r-4 border-b-4 border-orange-500">
      <CardTitleDesc
        title="Manage Your Notes"
        description="View your saved notes. You can delete or filter them by course."
      />


      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>

      <SortNotes
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />

      <NoteList notes={sortedNotes} onDelete={delNote} />

      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default NotesView;
