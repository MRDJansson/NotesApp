// NoteList.jsx

import { useState } from "react";
import Card from "./cards/CardNoteList";
import NoteDeleteModal from "./modals/NoteDeleteModal";
import NoteModal from "./modals/NoteModal";

function NoteList({ notes, onDelete }) {
  const [selectedNote, setSelectedNote] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [noteToDelete, setNoteToDelete] = useState(null);
  const [rememberChoice, setRememberChoice] = useState(false);

  const closeModal = () => setSelectedNote(null);
  const closeNoteDeleteModal = () => setShowDeleteConfirmation(false);

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

  return (
    <div>
      {notes.map((note) => (
        <Card
          key={note.id}
          title={note.course.name}
          timestamp={new Date(note.timestamp).toLocaleString("fi-FI")}
          content={
            <p
              className="text-gray-700 text-sm leading-relaxed line-clamp-4 break-words"
              style={{ whiteSpace: "pre-line" }}
            >
              {note.text}
            </p>
          }
          actions={
            <button
              onClick={(e) => handleDeleteClick(note, e)}
              className="delete-button"
            >
              Delete
            </button>
          }
          onClick={() => handleNoteClick(note)}
        />
      ))}

      {selectedNote && (
        <NoteModal
          note={selectedNote}
          onClose={closeModal}
          onDelete={onDelete}
        />
      )}

      {showDeleteConfirmation && noteToDelete && (
        <NoteDeleteModal
          note={noteToDelete}
          onDelete={(id) => {
            onDelete(id);
            closeNoteDeleteModal();
          }}
          onCancel={closeNoteDeleteModal}
          rememberChoice={rememberChoice}
          setRememberChoice={setRememberChoice}
        />
      )}
    </div>
  );
}

export default NoteList;
