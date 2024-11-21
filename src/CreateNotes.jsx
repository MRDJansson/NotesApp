//CreateNotes.jsx

import { useState } from "react";
import { useStore } from "./store/Store";
import { Link } from "react-router-dom";

function CreateNotes(){
    const [name, setName] = useState("")
    const addNotes = useStore((state) => state.addNotes)


    const handleClick = () => {
        console.log(name);
        addNotes(name)
        setName("")
    }


    return(<>
        <div>            
        <input
        type="text"
        name=""
        value={name}
        onChange={(e) => {
            setName(e.target.value)
        }}
    />
    </div>
    <div><button onClick={handleClick}>Save</button>
    <button><Link to="/">Back</Link></button></div>
    </>)
}

export default CreateNotes;