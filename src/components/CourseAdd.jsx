// CourseAdd.jsx

import { useState } from "react";
import { useStore } from "../store/Store";
import SaveButton from "./buttons/SaveButton";

function CourseAdd() {
  const [name, setName] = useState("");
  const addCourse = useStore((state) => state.addCourse);

  const isButtonDisabled = name.length === 0;
  
  const handleClick = () => {
    if (name.length > 0) {
      addCourse(name);
      setName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter course name"
      />
      <SaveButton
        isDisabled={isButtonDisabled}
        onClick={handleClick}
      />
    </div>
  );
}

export default CourseAdd;
