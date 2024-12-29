// CourseDropdownor.jsx

import React from "react";

// Dropdown to select a course for filtering notes
function CourseDropdown({ courses, selectedCourse, onCourseChange, isDisabled }) {
  return (
    <div className="relative">
      <select
        className={`w-full p-3 border rounded-lg text-gray-700 ${isDisabled
          ? "bg-gray-100 border-gray-300 cursor-not-allowed"   // Style for disabled state
          : "bg-white border-orange-gray focus:ring-2 focus:ring-orange-400 hover:border-orange-400"  // Style for enabled state
          }`}
        value={selectedCourse}  // Bind the value to the selectedCourse state
        onChange={(e) => onCourseChange(e.target.value)}  // Update selected course on change
        disabled={isDisabled}  // Disable the dropdown if isDisabled is true
      >
        <option value="" disabled>Select a course</option>  {/* Default option */}
        {courses.map((course) => (
          <option key={course.id} value={course.name}>
            {course.name}  {/* Display course names in the dropdown */}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CourseDropdown;

