//AddCourseNotes.jsx

import { useState } from "react";
import { useStore } from "./store/Store";

function AddCourseNotes(){
    const [name, setName] = useState("")
    const addCourse = useStore((state) => state.addCourse)


    const handleClick = () => {
        console.log(name);
        addCourse(name)
        setName("")
    }


    return(
        <div>            
        <input
        type="text"
        name=""
        value={name}
        onChange={(e) => {
            setName(e.target.value)
        }}
    />
    <button onClick={handleClick}>save</button></div>
    )
}

export default AddCourseNotes;