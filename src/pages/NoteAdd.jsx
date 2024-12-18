// Notes.jsx

import { useState } from "react";
import BackButton from "../components/buttons/BackButton";
import SaveButton from "../components/buttons/SaveButton";
import CardTitleDesc from "../components/cards/CardTitleDesc";
import CourseDropdown from "../components/CourseDropdown";
import NoteItem from "../components/NoteItem";
import NoteTextarea from "../components/NoteTextArea";
import { useStore } from "../store/Store";
import { filterNotes } from "../utils/filterNotes";
import { useFetchData } from "../utils/useFetchData";


function NoteAdd() {
  const {
    courses,
    notes,
    addNote,
    fetchNotesData,
    hasFetchedNotes,
    hasFetchedCourses,
  } = useStore();

  const [selectedCourse, setSelectedCourse] = useState("");
  const [noteContent, setNoteContent] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [characterLimit] = useState(10000);

  const filteredNotes = filterNotes(notes, selectedCourse);
  const isButtonDisabled = !selectedCourse || noteContent.length === 0;

  const handleAddNote = () => {
    if (selectedCourse && noteContent.length > 0) {
      addNote(selectedCourse, noteContent);
      setNoteContent("");
      setIsLocked(true);
    }
  };

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);


  return (
    <div className="p-6 bg-white shadow-md border-r-4 border-b-4 border-orange-500 rounded-md max-w-3xl mx-auto">
      <CardTitleDesc
        title="Create Notes for Courses"
        description="Select a course and write a note. Once you're done, remember to save!"
      />

      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
          isDisabled={isLocked}
        />
      </div>

      <NoteTextarea
        noteContent={noteContent}
        setNoteContent={setNoteContent}
        characterLimit={characterLimit}
      />
      <SaveButton
        isDisabled={isButtonDisabled}
        onClick={handleAddNote}
      />

      <NoteItem filteredNotes={filteredNotes} />

      <div className="flex justify-end mt-4">
        <BackButton />
      </div>
    </div>
  );
}

export default NoteAdd;