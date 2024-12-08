// AddCourses.jsx

import { useState } from "react";
import { useStore } from "../store/Store";

function CourseAdd() {
    const [name, setName] = useState("");
    const addCourse = useStore((state) => state.addCourse);

    const handleClick = () => {
        if (name.length > 0){
        addCourse(name);
        setName("");}
    };

    return (
        <div className="p-6 rounded-t-md border-r-4 border-orange-500 bg-white shadow-md max-w-2xl mx-auto">
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter course name"
            />
            <button
                onClick={handleClick}
                className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600"
            >
                Save
            </button>
        </div>
    );
}

export default CourseAdd;
