// NoteModal.jsx

import { X } from 'lucide-react';

function NoteModal({ note, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-orange-500 mb-4">
          {note.course.name} ({note.course.id})
        </h2>
        <p className="text-gray-500 text-sm mb-2">
          {new Date(note.timestamp).toLocaleString("fi-FI")}
        </p>
        <p
          className="text-gray-700 mb-6"
          style={{ whiteSpace: "pre-wrap" }}
        >
          {note.text}
        </p>
        <div className="flex justify-end">
          <button
            onClick={() => {
              onDelete(note.id);
              onClose();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
