// CourseAdd.jsx

import { useState } from "react";
import { useStore } from "../store/Store"; // Access store to add a course
import SaveButton from "./buttons/SaveButton"; // Button to save the new course

function CourseAdd() {
  // --- Local state variables ---
  const [name, setName] = useState("");                    // Store the name of the new course
  const addCourse = useStore((state) => state.addCourse);  // Function to add a course from the store

  // --- Disable button if name is empty ---
  const isButtonDisabled = name.length === 0;

  // --- Handle the click to add a course ---
  const handleClick = () => {
    if (name.length > 0) { // Only add the course if a name is provided
      addCourse(name);     // Add the course to the store
      setName("");         // Reset the input field
    }
  };

  return (
    <div>
      {/* --- Course Name Input Field --- */}
      <input
        type="text"
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={name}
        onChange={(e) => setName(e.target.value)}  // Update the name state as the user types
        placeholder="Enter course name"
      />
      {/* --- Save Button to Add Course --- */}
      <SaveButton
        isDisabled={isButtonDisabled}   // Disable the button if no name is provided
        onClick={handleClick}           // Call the handler to add the course
      />
    </div>
  );
}

export default CourseAdd;
