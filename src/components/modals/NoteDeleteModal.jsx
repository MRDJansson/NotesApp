// NoteDeleteModal.jsx

import { X } from "lucide-react"; // Importing the X icon from lucide-react for the close button

// NoteDeleteModal component which confirms the deletion of a note
function NoteDeleteModal({ note, onDelete, onCancel, rememberChoice, setRememberChoice }) {
  return (
    // Modal container: Fixed position, centered, and semi-transparent background to blur the content behind
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-10">
      {/* Modal content box: White background, rounded corners, shadow, padding, and animation */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-[85vh] relative zoom-in duration-200">
        
        {/* --- Close Button --- */}
        {/* Button to close the modal (calls the onCancel function when clicked) */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onCancel}  // Close the modal when clicked
          aria-label="Close"  // Accessibility label
        >
          <X className="w-5 h-5" />  {/* Close icon */}
        </button>

        {/* --- Modal Header --- */}
        {/* Title of the modal */}
        <h2 className="text-lg font-bold text-orange-500 mb-4">Confirm Delete</h2>

        {/* --- Modal Body --- */}
        {/* Message asking for confirmation to delete the note */}
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this note?<br /> This action cannot be undone.
        </p>

        {/* --- Remember Choice Checkbox --- */}
        {/* Checkbox to allow the user to remember their choice of deletion */}
        <div className="flex items-center mb-4">
          <input
            id="rememberChoice"  // Input element for the checkbox
            type="checkbox"
            className="mr-2 w-5 h-5 text-orange-500 bg-white border-gray-300 rounded accent-orange-500"
            checked={rememberChoice}  // If the checkbox is checked, this value is passed down
            onChange={(e) => setRememberChoice(e.target.checked)}  // Update the state when changed
          />
          {/* Label for the checkbox */}
          <label htmlFor="rememberChoice" className="text-gray-500 text-sm">
            Remember my choice
          </label>
        </div>

        {/* --- Modal Footer --- */}
        {/* Container for the action button(s) */}
        <div className="flex justify-end space-x-2">
          {/* Button to confirm the deletion */}
          <button
            onClick={() => onDelete(note.id)}  // Calls the onDelete function with the note's id to delete it
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteDeleteModal;
