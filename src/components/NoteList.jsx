// NoteList.jsx

import { useState } from "react";
import Card from "./cards/CardNoteList";
import NoteDeleteModal from "./modals/NoteDeleteModal";
import NoteModal from "./modals/NoteModal";

function NoteList({ notes, onDelete }) {
  // --- Local state variables ---
  const [selectedNote, setSelectedNote] = useState(null);         // Currently selected note for viewing details
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);  // Flag for delete confirmation modal
  const [noteToDelete, setNoteToDelete] = useState(null);         // Note that is selected for deletion
  const [rememberChoice, setRememberChoice] = useState(false);    // Flag to remember user's choice for deletion

  // --- Close Modals ---
  const closeModal = () => setSelectedNote(null);                       // Close the note details modal
  const closeNoteDeleteModal = () => setShowDeleteConfirmation(false);  // Close the delete confirmation modal

  // --- If no Notes ---
  if (notes.length === 0) {
    return (
      <p className="text-center text-gray-500 italic py-8">
        Ei muistiinpanoja! {/* Message for no notes */}
      </p>
    );
  }

  // --- Handle Delete ---
  const handleDeleteClick = (note, e) => {
    e.stopPropagation();  // Prevent triggering the note's click event
    if (rememberChoice) {
      onDelete(note.id);  // Delete directly if rememberChoice is true
    } else {
      setNoteToDelete(note);  // Set note to delete if user didn't remember their choice
      setShowDeleteConfirmation(true);  // Show the delete confirmation modal
    }
  };

  // --- Handle Note Click ---
  const handleNoteClick = (note) => {
    setSelectedNote(note);  // Set the selected note to view details
  };

  return (
    <div>
      {/* --- Loop through and display each note --- */}
      {notes.map((note) => (
        <Card
          key={note.id}    // Use the note id as key for the Card component
          title={note.course.name}  // Course name as the title
          timestamp={new Date(note.timestamp).toLocaleString("fi-FI")}  // Format the timestamp for the note
          content={
            <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 break-words" style={{ whiteSpace: "pre-line" }}>
              {note.text} {/* Display note text-content */}
            </p>
          }
          actions={
            <button
              onClick={(e) => handleDeleteClick(note, e)}  // Delete button click event
              className="text-gray-300 hover:text-red-500"
            >
              Delete
            </button>
          }
          onClick={() => handleNoteClick(note)}  // Open the note modal when clicked
        />
      ))}

      {/* --- Modal for displaying note details --- */}
      {selectedNote && (
        <NoteModal
          note={selectedNote}
          onClose={closeModal}
          onDelete={onDelete}
        />
      )}

      {/* --- Modal for delete confirmation --- */}
      {showDeleteConfirmation && noteToDelete && (
        <NoteDeleteModal
          note={noteToDelete}
          onDelete={(id) => {
            onDelete(id);           // Delete note by id
            closeNoteDeleteModal();  // Close the delete modal after deleting
          }}
          onCancel={closeNoteDeleteModal}  // Close modal without deleting
          rememberChoice={rememberChoice}  // Option to remember delete choice
          setRememberChoice={setRememberChoice}  // Set the remember choice option
        />
      )}
    </div>
  );
}

export default NoteList;
