import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import Courses from './Courses'
import AddCourse from './pages/AddCourse'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddCourses from './AddCourses'
import CreateNotes from './CreateNotes'
import NotesNames from './NotesNames'
import Notes from './Notes'
import NotesList from './NotesList'



function App() {

  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainBody />} >
            <Route path="aihe1" index element={<><Notes /><NotesNames/></>} />
            <Route path="aihe2" index element={<NotesList />} />
            <Route path="aihe3" index element={<><AddCourses/><Courses /></>} />
          </Route>
        </Routes>
      </Router>
    <Footer />
    </>
  )
}

export default App
