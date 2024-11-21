import { useState } from "react";
import Notes from "./Notes";
import Courses from "./Courses";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/AddCourse";


//MainBody.jsx
function MainBody() {

    const clickHandler = () => {
        console.log();
    }
return(
    <div>
        <button><Link to="/aihe1">Create notes for class</Link></button>
        <button><Link to="/aihe2">List notes</Link></button>
        <button><Link to="/aihe3">Add courses</Link></button>
        <Outlet />

    </div>
)
}

export default MainBody;