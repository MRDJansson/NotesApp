// AddCourses.jsx

import { useState } from "react";
import { useStore } from "../store/Store";

function AddCourseNotes() {
    const [name, setName] = useState("");
    const addCourse = useStore((state) => state.addCourse);

    const handleClick = () => {
        if (name.length > 0){
        addCourse(name);
        setName("");}
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" onClick={handleClick}>save</button>
        </div>
    );
}

export default AddCourseNotes;
