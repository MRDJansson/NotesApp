//NotesList.jsx

import { useState } from "react"; // Importing React's useState hook for managing local component state
import BackButton from "../components/buttons/BackButton"; // Back button component for navigation
import CardTitleDesc from "../components/cards/CardTitleDesc"; // Card component to display title and description
import CourseDropdown from "../components/CourseDropdown"; // Dropdown component to select a course
import NoteList from "../components/NoteList"; // Component to display a list of notes
import SortNotes from "../components/SortNotes"; // Component to sort the notes (newest/oldest)
import { useStore } from "../store/Store"; // Custom hook to access global store
import { sortNotesByOrder } from "../utils/sortNotes"; // Utility function to sort notes by order (newest or oldest)
import { useFetchData } from "../utils/useFetchData"; // Custom hook to fetch data (notes or courses)


function NotesView() {
  // --- State variables ---
  const {
    courses,                // List of courses available
    notes,                  // List of notes saved
    hasFetchedCourses,      // Flag to indicate if courses have been fetched
    hasFetchedNotes,        // Flag to indicate if notes have been fetched
    fetchNotesData,         // Function to fetch notes data
    delNote                 // Function to delete a note
  } = useStore();

  // --- Local state variables ---
  const [selectedCourse, setSelectedCourse] = useState("");  // Selected course for filtering notes
  const [sortOrder, setSortOrder] = useState("newest");     // Sort order (newest/oldest)

  // Custom hook to trigger fetch operation based on conditions
  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses && !hasFetchedNotes);

  // Filter notes by the selected course, if no course is selected, show all notes
  const filteredNotes = notes.filter((note) =>
    !selectedCourse || note.course.name === selectedCourse
  );

  // Sort the filtered notes based on the selected sort order
  const sortedNotes = sortNotesByOrder(filteredNotes, sortOrder);

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-3xl mx-auto shadow-md border-r-4 border-b-4 border-orange-500">
      
      {/* --- Card Title and Description --- */}
      <CardTitleDesc
        title="Manage Your Notes"
        description="View your saved notes. You can delete or filter them by course."
      />

      {/* --- Course Dropdown --- */}
      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
        />
      </div>

      {/* --- Sort Notes --- */}
      <SortNotes
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
      />

      {/* --- Displaying Notes --- */}
      <NoteList notes={sortedNotes} onDelete={delNote} />

      {/* --- Back Button --- */}
      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default NotesView;
