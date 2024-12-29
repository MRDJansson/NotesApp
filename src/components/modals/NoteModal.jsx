// NoteModal.jsx

import { X } from 'lucide-react'; // Importing the X icon from lucide-react for the close button

function NoteModal({ note, onClose, onDelete }) {
  return (
    // Modal container: Fixed position, centered, with semi-transparent black background and blurred backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      
      {/* Modal content box: White background, rounded corners, shadow, padding, and animation */}
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full max-h-[85vh] relative animate-in fade-in zoom-in duration-200">
        
        {/* --- Close Button --- */}
        {/* Button to close the modal (calls the onClose function when clicked) */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          onClick={onClose}  // Closes the modal when clicked
          aria-label="Close"  // Accessibility label for screen readers
        >
          <X className="w-5 h-5" />  {/* Close icon */}
        </button>

        {/* --- Modal Header (Note Information) --- */}
        <div className="mb-4 space-y-2">
          {/* Title of the note (the course name) */}
          <h2 className="text-2xl font-bold text-orange-500 leading-tight capitalize">
            {note.course.name}  {/* Displays the course name associated with the note */}
          </h2>
          
          {/* Additional note information: Course ID and Timestamp */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {/* Course ID (displayed as a badge) */}
            <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
              Course ID: {note.course.id}  {/* Displays the unique course ID */}
            </span>
            {/* Timestamp of when the note was created */}
            <time dateTime={note.timestamp} className="text-gray-400">
              {new Date(note.timestamp).toLocaleString("fi-FI")}  {/* Formats and displays the timestamp */}
            </time>
          </div>
        </div>

        {/* --- Modal Body (Note Content) --- */}
        {/* Note's text content, scrollable if it's too long */}
        <div className="overflow-y-auto max-h-[40vh] mb-6">
          <p
            className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed break-words" // Added `break-words` to handle long lines
          >
            {note.text}  {/* Displays the text of the note */}
          </p>
        </div>

        {/* --- Modal Footer --- */}
        {/* Button to delete the note */}
        <div className="flex justify-end pt-4 border-t">
          <button
            onClick={() => {
              onDelete(note.id);  // Calls the onDelete function to delete the note
              onClose();  // Closes the modal after deletion
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
