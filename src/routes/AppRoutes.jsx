// AppRoutesj.sx

import { Route, Routes } from "react-router-dom";
import CoursesView from "../pages/CourseView";
import MainBody from "../pages/MainBody";
import NoteAdd from "../pages/NoteAdd";
import NotesView from "../pages/NoteView";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainBody />} />
      <Route path="add-course" element={<CoursesView />} />
      <Route path="add-notes" element={<NoteAdd />} />
      <Route path="view-notes" element={<NotesView />} />
    </Routes>
  );
}

export default AppRoutes;
