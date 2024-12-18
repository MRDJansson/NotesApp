// Storje.jsx

import { create } from "zustand";


export const useStore = create((set) => ({
    noteId: 0,
    courseId: 0,
    courses: [],
    notes: [],
    hasFetchedNotes: false,
    hasFetchedCourses: false,



    fetchCourseData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        try {
            const res = await fetch(url)
            const data = await res.json();

            set({
                courses: data,
                hasFetchedCourses: true,
                courseId: data.length
            });
        } catch (error) {
            console.log("Failed to fetch", error);
        }
    },

    fetchNotesData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
        try {
            const res = await fetch(url)
            const data = await res.json();

            set({
                notes: data,
                hasFetchedNotes: true,
                noteId: data.length
            });

        } catch (error) {
            console.log("Failed to fetch", error);
        }
    },

    addCourse: (name) => set((state) => ({
        courses: [...state.courses, { id: state.courseId++, name }],
    })),


    addNote: (courseName, noteContent) => set((state) => ({
        notes: [
            ...state.notes,
            {
                id: state.noteId++,
                course: state.courses.find((c) => c.name === courseName),
                text: noteContent,
                timestamp: new Date(),
            },
        ],
    })),

    delNote: (id) => set((state) => ({
        notes: state.notes.filter(note => note.id !== id)
    }))

}));
