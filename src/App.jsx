// App.jsx

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CourseAdd from "./pages/CourseAdd";
import CoursesView from "./pages/CourseView";
import MainBody from "./pages/MainBody";
import NoteAdd from "./pages/NoteAdd";
import NotesView from "./pages/NoteView";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Header />

      <div className="flex-grow container mx-auto p-4">
        <Router>
          <Routes>
            <Route path="/" element={<MainBody />}>
              <Route
                path="add-notes"
                index
                element={
                  <div className="space-y-4">
                    <NoteAdd />
                  </div>
                }
              />
              <Route path="list-notes" index element={<NotesView />} />
              <Route
                path="add-course"
                index
                element={
                  <div>
                    <CourseAdd />
                    <CoursesView />
                  </div>
                }
              />
            </Route>
          </Routes>
        </Router>
      </div>

      <Footer />
    </div>
  );
}

export default App;

