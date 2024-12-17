function NoteTextarea({ noteContent, setNoteContent, characterLimit }) {

    const handleChange = (e) => {
        if (e.target.value.length <= characterLimit) {
          setNoteContent(e.target.value);
        }
      };

    return (
      <div className="mb-4">
        <textarea
          className="w-full p-5 rounded-lg bg-white shadow-md border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={noteContent}
          onChange={handleChange}
          placeholder="Write a note..."
          rows="4"
          maxLength={characterLimit}
        />
        <p className="text-xs text-gray-500 mt-1">
          {noteContent.length}/{characterLimit} characters
        </p>
      </div>
    );
  }

  export default NoteTextarea;