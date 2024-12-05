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
        hasFetchedCourses 
      } = useStore();
    
      const [selectedCourse, setSelectedCourse] = useState("");
      const [noteContent, setNoteContent] = useState("");
      const [isLocked, setIsLocked] = useState(false);


      useFetchData(fetchNotesData, hasFetchedNotes, hasFetchedCourses);
      const filteredNotes = filterNotes(notes, selectedCourse)

    const handleAddNote = () => {
        if (selectedCourse && noteContent.length > 0) {
            addNote(selectedCourse, noteContent);
            setNoteContent("");
            setIsLocked(true);
        }
    };
    return (
        <div>
      <div>
        <CourseDropdown
          courses={courses}
          selectedCourse={selectedCourse}
          onCourseChange={setSelectedCourse}
          isDisabled={isLocked}
        />
      </div>
            <div>
                <textarea
                    type="text"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Write a note"
                />
            </div>
            <div>
            <ul>
                {filteredNotes.map((note, i) => (
                    <li key={i}>{note.text}</li>
                ))}
            </ul>
            </div>
            <div>
            <button type="submit" onClick={handleAddNote}>Add Note</button>
                <button>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
}
export default NoteAdd;