// App.jsx
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import NoteItem from './components/NoteItem'
import AddCourses from './pages/CourseAdd'
import CoursesView from './pages/CourseView'
import MainBody from './pages/MainBody'
import NoteAdd from './pages/NoteAdd'
import NotesView from './pages/NoteView'



function App() {

  return (
    <>
    <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainBody />} >
            <Route path="aihe1" index element={<><NoteAdd /><NoteItem/></>} />
            <Route path="aihe2" index element={<NotesView />} />
            <Route path="aihe3" index element={<><AddCourses/><CoursesView /></>} />
          </Route>
        </Routes>
      </Router>
    <Footer />
    </>
  )
}

export default App
