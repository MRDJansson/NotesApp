// CourseDropdownor.jsx

import React from "react";

function CourseDropdown({ courses, selectedCourse, onCourseChange, isDisabled }) {
  return (
    <div className="relative">
      <select
        className={`w-full p-3 border rounded-lg text-gray-700 ${
          isDisabled
            ? "bg-gray-100 border-gray-300 cursor-not-allowed"
            : "bg-white border-orange-gray focus:ring-2 focus:ring-orange-400 hover:border-orange-400"
        }`}
        value={selectedCourse}
        onChange={(e) => onCourseChange(e.target.value)}
        disabled={isDisabled}
      >
        <option value="" disabled>
          Select a course
        </option>
        {courses.map((course) => (
          <option key={course.id} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      {isDisabled && (
        <p className="mt-1 text-sm text-gray-500 italic">
          Dropdown disabled.
        </p>
      )}
    </div>
  );
}

export default CourseDropdown;
