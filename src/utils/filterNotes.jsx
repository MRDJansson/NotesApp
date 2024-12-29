// filterNotes.jsx

// Filter notes by the selected course, return all notes if no course is selected
export const filterNotes = (notes, selectedCourse) =>
  selectedCourse
    ? notes.filter((note) => note.course.name === selectedCourse) // Filter by course name
    : notes;  // Return all notes if no course is selected
