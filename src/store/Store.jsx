import { create } from "zustand";

let noteId = 0;

export const useStore = create((set) => ({
    lista: [],
    addCourse: (name) => set((state) => ({
        lista: [...state.lista, { id: noteId++, name }],
    })),
    
    lista2: [],
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
