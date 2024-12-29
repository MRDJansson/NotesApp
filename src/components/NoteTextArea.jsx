// NoteTextare.jsx

function NoteTextArea({ noteContent, setNoteContent, characterLimit }) {

  // Handle the note content change and ensure it doesn't exceed the character limit
  const handleChange = (e) => {
    if (e.target.value.length <= characterLimit) {
      setNoteContent(e.target.value);  // Update content if within limit
    }
  };

  return (
    <div className="mb-4">
      {/* --- Note Input Area --- */}
      <textarea
        className="w-full p-5 rounded-lg bg-white shadow-md border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={noteContent}
        onChange={handleChange} // Update note content when the user types
        placeholder="Write a note..."
        rows="4"
        maxLength={characterLimit} // Max length for note content
      />
      {/* --- Character Counter --- */}
      <p className="text-xs text-gray-500 mt-1">
        {noteContent.length}/{characterLimit} characters
      </p>
    </div>
  );
}

export default NoteTextArea;
