import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MainBody from './MainBody'
import Courses from './Courses'
import Notes from './Notes'
import Home from './pages/AddCourse'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddCourseNotes from './AddCourseNotes'


function App() {

  return (
    <>
    <Header />
    {/* <Home /> */}
    <Router>
    <Routes>
        <Route path="/" element={<MainBody />} >
          <Route path="aihe1" index element={<><Home /><AddCourseNotes/></>} />
          <Route path="aihe2" index element={<Courses />} />
          <Route path="aihe3" index element={<Notes />} />
        </Route>
      </Routes>
      </Router>
    <Footer />
    </>
  )
}

export default App
