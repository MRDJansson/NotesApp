import { create } from "zustand";

export const useStore = create((set) => ({
    lista: ["lol", "moi"],
    addCourse: (name) => set((state) => ({
        lista: [...state.lista, name],
    })),

    lista2: [],
    addNote: (courseName, noteContent) => set((state) => ({
        lista2: [...state.lista2, { courseName, content: noteContent }],
    })),
}));
