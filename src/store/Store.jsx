// Storje.jsx

import { create } from "zustand";

let noteId = 0;
let courseId = 0;

export const useStore = create((set) => ({
    lista: [],
    lista2: [],
    hasFetchedNotes: false,
    hasFetchedCourses: false,

    fetchCourseData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        try {
            const res = await fetch(url)
            const data = await res.json();

            courseId = data.length

            set({ lista: data, hasFetchedCourses: true })
        } catch (error) {
            console.log("Failed to fetch", error);
        }
    },

    fetchNotesData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes"
        try {
            const res = await fetch(url)
            const data = await res.json();

            noteId = data.length

            set({ lista2: data, hasFetchedNotes: true })
        } catch (error) {
            console.log("Failed to fetch", error);
        }
    },

    addCourse: (name) => set((state) => ({
        lista: [...state.lista, { id: courseId++, name }],
    })),
    

    addNote: (courseName, noteContent) => set((state) => ({
        lista2: [...state.lista2, {
            id: noteId++,
            course: {name: courseName}, 
            text: noteContent,
            timestamp: new Date()
         }],
    })),

    delNote: (id) => set((state) => ({
        lista2: state.lista2.filter(note => note.id !== id)
    }))

}));
