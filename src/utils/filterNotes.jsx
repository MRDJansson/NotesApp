// filterNotes.jsx

export const filterNotes = (notes, selectedCourse) =>
    selectedCourse
      ? notes.filter((note) => note.course.name === selectedCourse)
      : notes;
  