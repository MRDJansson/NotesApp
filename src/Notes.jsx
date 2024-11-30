import { useEffect, useState } from "react";
import { useStore } from "./store/Store";
import { Link } from "react-router-dom";
import NotesList from "./NotesList";

function Notes() {
    const lista = useStore((state) => state.lista);
    const lista2 = useStore((state) => state.lista2);
    const addNote = useStore((state) => state.addNote);
    const fetchNotesData = useStore((state) => state.fetchNotesData);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const [isLocked, setIsLocked] = useState(false);

    const filteredNotes = lista2.filter(
        (note) => note.course.name === selectedCourse
    );

    useEffect(() => {
        fetchNotesData();
    }, [fetchNotesData]);

    const handleSelectionChange = (e) => {
        setSelectedCourse(e.target.value);
        setIsLocked(true);
      };

    const handleAddNote = () => {
        if (selectedCourse && noteContent.length > 0) {
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
                    {lista.map((kurssi) => (
                        <option key={kurssi.id} value={kurssi.name}>
                            {kurssi.name}
                        </option>
                    ))}
                </select>
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
            <button onClick={handleAddNote}>Add Note</button>
                <button>
                    <Link to="/">Back</Link>
                </button>
            </div>
        </div>
    );
}
export default Notes;