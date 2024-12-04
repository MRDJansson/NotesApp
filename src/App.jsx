// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NotesNames from './components/NotesNames'
import AddCourses from './pages/AddCourses'
import Courses from './pages/Courses'
import MainBody from './pages/MainBody'
import Notes from './pages/Notes'
import NotesList from './pages/NotesList'



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
