// NoteAdd.jsx

import { useState } from "react";
import BackButton from "../components/buttons/BackButton"; // Back button to return to previous screen
import SaveButton from "../components/buttons/SaveButton"; // Save button to submit the note
import CardTitleDesc from "../components/cards/CardTitleDesc"; // Card to show the title and description of the page
import CourseDropdown from "../components/CourseDropdown"; // Dropdown to select the course for the note
import NoteItem from "../components/NoteItem"; // List of notes displayed
import NoteTextArea from "../components/NoteTextArea"; // Text area for typing the note content
import { useStore } from "../store/Store"; // Access global state from the store
import { filterNotes } from "../utils/filterNotes"; // Function to filter notes by selected course
import { useFetchData } from "../utils/useFetchData"; // Custom hook to handle data fetching

function NoteAdd() {
  // --- Global state from the store ---
  const {
    courses,               // List of available courses
    notes,                 // List of notes
    addNote,               // Function to add a new note
    fetchNotesData,        // Function to fetch notes data
    hasFetchedNotes,       // Flag indicating if notes have been fetched
    hasFetchedCourses,     // Flag indicating if courses have been fetched
  } = useStore();

  // --- Local state variables ---
  const [selectedCourse, setSelectedCourse] = useState("");    // Course selected by the user
  const [noteContent, setNoteContent] = useState("");          // Content of the note being written
  const [isLocked, setIsLocked] = useState(false);             // Lock state to disable further input after saving
  const [characterLimit] = useState(10000);                   // Character limit for the note content

  // --- Fetch notes if necessary ---
  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);

  // --- Filter and disable the Save button based on conditions ---
  const filteredNotes = filterNotes(notes, selectedCourse);   // Filter notes by selected course
  const isButtonDisabled = !selectedCourse || noteContent.length === 0; // Disable button if no course or content

  // --- Handle adding a new note ---
  const handleAddNote = () => {
    if (selectedCourse && noteContent.length > 0) {
      addNote(selectedCourse, noteContent);  // Add the note to the store
      setNoteContent("");                    // Reset note content after saving
      setIsLocked(true);                     // Lock the form after adding the note
    }
  };

  return (
    <div className="p-6 bg-white shadow-md border-r-4 border-b-4 border-orange-500 rounded-md max-w-3xl mx-auto">
      {/* --- Card Title and Description --- */}
      <CardTitleDesc
        title="Create Notes for Courses"
        description="Select a course and write a note. Once you're done, remember to save!"
      />

      {/* --- Course Dropdown --- */}
      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}  // Update selected course
          isDisabled={isLocked}               // Disable dropdown if form is locked
        />
      </div>

      {/* --- Note Textarea --- */}
      <NoteTextArea
        noteContent={noteContent}
        setNoteContent={setNoteContent}
        characterLimit={characterLimit}  // Display character limit
      />

      {/* --- Save Button --- */}
      <SaveButton
        isDisabled={isButtonDisabled}    // Disable button if conditions aren't met
        onClick={handleAddNote}          // Call handler when button is clicked
      />

      {/* --- Display Filtered Notes --- */}
      <NoteItem filteredNotes={filteredNotes} />

      {/* --- Back Button --- */}
      <div className="flex justify-end mt-4">
        <BackButton />
      </div>
    </div>
  );
}

export default NoteAdd;
