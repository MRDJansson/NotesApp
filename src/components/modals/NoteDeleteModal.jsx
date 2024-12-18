// NoteDeleteModal.jsx

import { X } from "lucide-react";

function NoteDeleteModal({ note, onDelete, onCancel, rememberChoice, setRememberChoice }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-10">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full max-h-[85vh] relative zoom-in duration-200">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onCancel}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-orange-500 mb-4">Confirm Delete</h2>
        <p className="text-gray-600 mb-4">
          Are you sure you want to delete this note?<br /> This action cannot be undone.
        </p>

        <div className="flex items-center mb-4">
          <input
            id="rememberChoice"
            type="checkbox"
            className="mr-2 w-5 h-5 text-orange-500 bg-white border-gray-300 rounded accent-orange-500"
            checked={rememberChoice}
            onChange={(e) => setRememberChoice(e.target.checked)}
          />
          <label htmlFor="rememberChoice" className="text-gray-500 text-sm">
            Remember my choice
          </label>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={() => onDelete(note.id)}
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
