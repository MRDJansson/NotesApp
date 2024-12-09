// Notes.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import CourseDropdown from "../components/CourseDropdown";
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
  const [characterLimit] = useState(200);

  useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);
  const filteredNotes = filterNotes(notes, selectedCourse);

  const handleAddNote = () => {
    if (selectedCourse && noteContent.length > 0) {
      addNote(selectedCourse, noteContent);
      setNoteContent("");
      setIsLocked(true);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md border-r-4 border-b-4 border-orange-500 rounded-md max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create a New Note</h1>
      <p className="text-gray-600 mb-6">
        Select a course and write a note. Once you're done, remember to save!
      </p>

      <div className="mb-4">
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
          isDisabled={isLocked}
        />
      </div>

      <div className="mb-4">
        <textarea
          className="w-full p-4 bg-white rounded-md shadow-md border-r-2 border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Write a note..."
          rows="4"
          maxLength={characterLimit} 
        />
        <p className="text-xs text-gray-500 mt-1">
          {noteContent.length}/{characterLimit} characters
        </p>
      </div>

      <div className="mb-4">
        {filteredNotes.length > 0 ? (
          <ul className="space-y-2">
            {filteredNotes.map((note, i) => (
              <li
                key={i}
                className="p-4 bg-white rounded-md shadow-md border-r-4 border-orange-500"
              >
                {note.text}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No notes to display.</p>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          className={`px-4 py-2 rounded-md text-white ${selectedCourse && noteContent.length > 0
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-300 cursor-not-allowed"
            }`}
          onClick={handleAddNote}
          disabled={!selectedCourse || noteContent.length === 0}
        >
          Save
        </button>
        <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
}

export default NoteAdd;