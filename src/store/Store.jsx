import {create} from 'zustand'
import AddCourseNotes from '../AddCourseNotes'
import Notes from '../Notes'

export const useStore = create((set) => ({
    lista: ["lol", "moi"],

    addCourse: (name) => set((state) => ({
        lista: [...state.lista, name]
    }))

}))
