// NoteList.jsx

// NoteList.jsx

import { useState } from "react";
import NoteListDelConf from "./NoteListDelConf";
import NoteModal from "./NoteModal";

function NoteList({ notes, onDelete }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [rememberChoice, setRememberChoice] = useState(false);

  const closeModal = () => setSelectedNote(null);
  const closeNoteListDelConf = () => setShowDeleteConfirmation(false);

  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 italic py-8">
        No notes found. Start creating!
      </p>
    );
  }

  const handleDeleteClick = (note, e) => {
    e.stopPropagation();
    if (rememberChoice) {
      onDelete(note.id);
    } else {
      setNoteToDelete(note);
      setShowDeleteConfirmation(true);
    }
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const confirmDelete = () => {
    if (noteToDelete) {
      onDelete(noteToDelete.id);
    }
    setShowDeleteConfirmation(false);
    setNoteToDelete(null);
  };

  return (
    <div>
      <ul className="space-y-4">
        {notes.map((note) => (
          <li
            key={note.id}
            className="p-5 rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 hover:scale-[1.02] transform cursor-pointer group"
            onClick={() => handleNoteClick(note)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center">
                <span className="text-orange-500 font-bold mr-2 text-lg">
                  {note.course.name}
                </span>
                <small className="text-gray-500">({note.course.id})</small>
              </div>

              <small className="text-gray-400">
                {new Date(note.timestamp).toLocaleString("fi-FI")}
              </small>
            </div>

            <p
              className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-4 break-words"
              style={{ whiteSpace: "pre-line" }}
            >
              {note.text}
            </p>

            <div className="mt-4 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={(e) => handleDeleteClick(note, e)}
                className="text-red-500 font-medium hover:text-red-600 transition-colors duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {selectedNote && (
        <NoteModal
          note={selectedNote}
          onClose={closeModal}
          onDelete={onDelete}
        />
      )}

      {showDeleteConfirmation && noteToDelete && (
        <NoteListDelConf
          note={noteToDelete}
          onDelete={(id) => {
            onDelete(id);
            closeNoteListDelConf();
          }}
          onCancel={closeNoteListDelConf}
          rememberChoice={rememberChoice}
          setRememberChoice={setRememberChoice}
        />
      )}
    </div>
  );
}

export default NoteList;
