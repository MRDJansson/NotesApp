// Notes.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import CourseSelect from "../components/CourseSelector";
import { useStore } from "../store/Store";
import { filterNotes } from "../utils/filterNotes";
import { useFetchData } from "../utils/useFetchData";

function Notes() {
    const lista = useStore((state) => state.lista);
    const lista2 = useStore((state) => state.lista2);
    const addNote = useStore((state) => state.addNote);
    const fetchNotesData = useStore((state) => state.fetchNotesData);
    const hasFetchedNotes = useStore((state) => state.hasFetchedNotes);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [isLocked, setIsLocked] = useState(false);


    useFetchData(fetchNotesData, hasFetchedNotes)
    const filteredNotes = filterNotes(lista2, selectedCourse)

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
        <CourseSelect
          courses={lista}
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
export default Notes;