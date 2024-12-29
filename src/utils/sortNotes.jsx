// sortNotes.js

// --- Sorting Function ---
// Sorts the notes based on the selected order: 'newest' or 'oldest'
export const sortNotesByOrder = (notes, sortOrder) => {
    return [...notes].sort((a, b) => {
        if (sortOrder === "newest") {
            return new Date(b.timestamp) - new Date(a.timestamp);  // Sort by newest first
        } else {
            return new Date(a.timestamp) - new Date(b.timestamp);  // Sort by oldest first
        }
    });
};
