// CourseSelector.jsx

import React from "react";

function CourseSelect({ courses, selectedCourse, onCourseChange, isDisabled }) {
  return (
    <select
      value={selectedCourse}
      onChange={(e) => onCourseChange(e.target.value)}
      disabled={isDisabled}
    >
      <option value="">Select a course</option>
      {courses.map((course) => (
        <option key={course.id} value={course.name}>
          {course.name}
        </option>
      ))}
    </select>
  );
}

export default CourseSelect;
