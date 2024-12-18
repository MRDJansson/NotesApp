// NoteModal.jsx

import { X } from 'lucide-react';

function NoteModal({ note, onClose, onDelete }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[85vh] relative animate-in fade-in zoom-in duration-200">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 space-y-2">
          <h2 className="text-2xl font-bold text-orange-500 leading-tight capitalize">
            {note.course.name}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
              Course ID: {note.course.id}
            </span>
            <time dateTime={note.timestamp} className="text-gray-400">
              {new Date(note.timestamp).toLocaleString("fi-FI")}
            </time>
          </div>
        </div>

        <div className="overflow-y-auto max-h-[40vh] mb-6">
          <p
            className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed break-words" // added `break-words`
          >
            {note.text}
          </p>
        </div>

        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={() => {
              onDelete(note.id);
              onClose();
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteModal;
