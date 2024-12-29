// Storje.jsx

import { create } from "zustand"; // Zustland for state management

// Create a Zustand store to manage the global state for courses, notes, and related operations
export const useStore = create((set) => ({

    // --- State variables ---
    noteId: 0,               // Tracking for next note ID
    courseId: 0,             // Tracking for next course ID
    notes: [],               // List for notes
    courses: [],             // List for courses
    hasFetchedNotes: false,  // Flags wheter notes has been tfetched
    hasFetchedCourses: false,// Flags wheter courses has been fetched

    // --- Fetch functions ---  

    // Fetches course data from the API and updates the store
    fetchCourseData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        try {
            const res = await fetch(url)
            const data = await res.json();

            set({
                courses: data, // Populating the courses array with fetched data
                hasFetchedCourses: true, // Mark courses as fetched
                courseId: data.length // Update the courseId to allow next id's to be unique
            });
        } catch (error) {
            console.log("Failed to fetch courses data", error);
        }
    },

    // Fetches notes data from the API and updates the store
    fetchNotesData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
        try {
            const res = await fetch(url)
            const data = await res.json();

            set({
                notes: data, // Populating the notes array with fetched data
                hasFetchedNotes: true, // Mark notes as fetched
                noteId: data.length // Update the noteId to allow next id's to be unique
            });

        } catch (error) {
            console.log("Failed to fetch notes data", error);
        }
    },

    // --- State modification functions ---

    // Adds a new course to the store
    addCourse: (name) => set((state) => ({
        courses: [...state.courses, { id: state.courseId++, name }], // Append the new course and grow id by one
    })),


    // Adds a new note to the store
    addNote: (courseName, noteContent) => set((state) => ({
        notes: [...state.notes,
        {
            id: state.noteId++, // Assign id and grow it by one per added note
            course: state.courses.find((c) => c.name === courseName), // Associate the note with course
            text: noteContent, // Save note content
            timestamp: new Date(), // Add timestamp
        },
        ],
    })),

    // Deletes a note by its ID
    delNote: (id) => set((state) => ({
        notes: state.notes.filter(note => note.id !== id) // Remove the note with the matching id
    }))

}));
