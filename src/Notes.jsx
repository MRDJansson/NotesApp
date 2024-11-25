import { useState } from "react";
import { useStore } from "./store/Store";
import { Link } from "react-router-dom";
import NotesList from "./NotesList";

function Notes() {
    const lista = useStore((state) => state.lista);
    const lista2 = useStore((state) => state.lista2);
    const addNote = useStore((state) => state.addNote);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [isLocked, setIsLocked] = useState(false);

    const filteredNotes = lista2.filter(
        (note) => note.courseName === selectedCourse
    );

    const handleSelectionChange = (e) => {
        setSelectedCourse(e.target.value);
        setIsLocked(true);
      };

    const handleAddNote = () => {
        if (selectedCourse && noteContent) {
            addNote(selectedCourse, noteContent);
            setNoteContent("");
        }
    };
    return (
        <div>
            <div>
                <select
                    value={selectedCourse}
                    onChange={handleSelectionChange}
                    disabled={isLocked}
                >
                    <option value="">Select a course</option>
                    {lista.map((kurssi, i) => (
                        <option key={i} value={kurssi}>
                            {kurssi}
                        </option>
                    ))}
                </select>
            </div>
            <ul>
                {filteredNotes.map((note, i) => (
                    <li key={i}>{note.content}</li>
                ))}
            </ul>
            <div>
                <input
                    type="text"
                    value={noteContent}
                    onChange={(e) => setNoteContent(e.target.value)}
                    placeholder="Write a note"
                />
                <button onClick={handleAddNote}>Add Note</button>
            </div>
            <div>
                <button>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
}
export default Notes;