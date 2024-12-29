// AppRoutesj.sx

// Importing necessary components from React Router
import { Route, Routes } from "react-router-dom"; // 'Route' and 'Routes' are used to define and render different routes in the app
import CourseView from "../pages/CourseView"; // Component to view and manage courses
import MainBody from "../pages/MainBody"; // Main body of the application, typically the homepage
import NoteAdd from "../pages/NoteAdd"; // Component to add new notes
import NotesView from "../pages/NoteView"; // Component to view and manage saved notes

function AppRoutes() {
  return (
    <Routes>
      
      {/* Main route rendering the main body of the app */}
      <Route path="/" element={<MainBody />} />  
      
      {/* Route for adding new courses */}
      <Route path="add-course" element={<CourseView />} />
      
      {/* Route for adding new notes */}
      <Route path="add-notes" element={<NoteAdd />} />
      
      {/* Route for viewing and managing saved notes */}
      <Route path="view-notes" element={<NotesView />} />
    </Routes>
  );
}

export default AppRoutes;
