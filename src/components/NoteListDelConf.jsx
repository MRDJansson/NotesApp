// NoteListDelConf.jsx

function NoteListDelConf({ note, onDelete, onCancel, rememberChoice, setRememberChoice }) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Confirm Delete</h2>
          <p className="text-gray-600 mb-4">
            Are you sure you want to delete this note? This action cannot be undone.
          </p>
  
          <div className="flex items-center mb-4">
            <input
              id="rememberChoice"
              type="checkbox"
              className="mr-2"
              checked={rememberChoice}
              onChange={(e) => setRememberChoice(e.target.checked)}
            />
            <label htmlFor="rememberChoice" className="text-gray-500 text-sm">
              Remember my choice
            </label>
          </div>
  
          <div className="flex justify-end space-x-2">
            <button
              onClick={onCancel}
              className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Cancel
            </button>
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
  
  export default NoteListDelConf;
  