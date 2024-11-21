import {create} from 'zustand'
import AddCourseNotes from '../AddCourses'
import Notes from '../Notes'

export const useStore = create((set) => ({
    lista: ["lol", "moi"],

    addCourse: (name) => set((state) => ({
        lista: [...state.lista, name]
    })),

    lista2: ["juttuja", "jeps"],
    addNotes: (name) => set((state) => ({
        lista2: [...state.lista2, name]
    }))

}))
