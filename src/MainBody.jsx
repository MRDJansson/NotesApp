import { useState } from "react";
import Notes from "./Notes";
import Courses from "./Courses";
import { Link, Outlet, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/AddCourse";
import { useStore } from "./store/Store";



//MainBody.jsx
function MainBody() {

    const lista = useStore((state) => state.lista);
    const isCoursesEmpty = lista.length === 0 ;

    const location = useLocation();
    const showButtons = location.pathname === '/';

return(
    <div>
        {showButtons && (
            <>
            <button disabled={isCoursesEmpty}>
                {isCoursesEmpty ? (
                    "Add courses first"
                ) : (
                    <Link to="/aihe1">Create notes for class</Link>
                )}
            </button>            
            <button><Link to="/aihe2">List notes</Link></button>
            <button><Link to="/aihe3">Add courses</Link></button>
            </>
        )}

        <Outlet />

    </div>
)
}

export default MainBody;