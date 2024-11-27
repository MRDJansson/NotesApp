import { create } from "zustand";

let noteId = 0;
let courseId = 0;

export const useStore = create((set) => ({
    lista: [],
    lista2: [],

    fetchCourseData: async () => {
        const url = "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses"
        try {
            const res = await fetch(url)
            const data = await res.json();

            courseId = data.length

            set({lista: data})
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

            set({lista2: data})
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
            courseName, 
            content: noteContent,
            date: new Date().toISOString()
         }],
    })),

    delNote: (id) => set((state) => ({
        lista2: state.lista2.filter(note => note.id !== id)
    }))

}));
