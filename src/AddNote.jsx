import { useState } from "react";
import { useStore } from "./store/Store";
function AddNote() {
    const lista = useStore((state) => state.lista);
    const addNote = useStore((state) => state.addNote);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [noteContent, setNoteContent] = useState("");
    const handleAddNote = () => {
        if (selectedCourse && noteContent) {
            addNote(selectedCourse, noteContent);
            setNoteContent("");
        }
    };
    return (
        <div>
            <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
            >
                <option value="">Select a course</option>
                {lista.map((kurssi, i) => (
                    <option key={i} value={kurssi}>
                        {kurssi}
                    </option>
                ))}
            </select>
            {}
            <input
                type="text"
                value={noteContent}
                onChange={(e) => setNoteContent(e.target.value)}
                placeholder="Write a note"
            />
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    );
}
export default AddNote;
