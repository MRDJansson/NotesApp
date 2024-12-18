// sortNotes.js

export const sortNotesByOrder = (notes, sortOrder) => {
    return [...notes].sort((a, b) => {
        if (sortOrder === "newest") {
            return new Date(b.timestamp) - new Date(a.timestamp);
        } else {
            return new Date(a.timestamp) - new Date(b.timestamp);
        }
    });
};
