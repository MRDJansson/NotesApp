//CourseView.jsx

import BackButton from "../components/buttons/BackButton"; // Back button to return to the previous screen
import CardTitleDesc from "../components/cards/CardTitleDesc"; // Card displaying title and description for the page
import CourseAdd from "../components/CourseAdd"; // Component to add a new course
import CourseItem from "../components/CourseItem"; // Component to display individual course
import { useStore } from "../store/Store"; // Access global state from the store
import { useFetchData } from "../utils/useFetchData"; // Custom hook to handle data fetching

function CourseView() {
  // --- Fetching state and functions from the store ---
  const courses = useStore((state) => state.courses);                     // List of courses from the store
  const fetchCourseData = useStore((state) => state.fetchCourseData);     // Function to fetch courses from the API
  const hasFetchedCourses = useStore((state) => state.hasFetchedCourses); // Flag indicating if courses have been fetched

  // --- Fetch course data if not fetched yet ---
  useFetchData(fetchCourseData, hasFetchedCourses, !hasFetchedCourses);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-md border-r-4 border-b-4 border-orange-500">
      {/* --- Card Title and Description --- */}
      <CardTitleDesc
        title="Manage Your Courses"
        description="Add new courses to organize your notes effectively. You can manage, view, or delete courses here."
      />

      {/* --- Add New Course Form --- */}
      <CourseAdd />

      <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Available Courses</h2>

      {/* --- List of Courses --- */}
      <ul className="space-y-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem key={course.id} name={course.name} id={course.id} /> // Display each course
          ))
        ) : (
          <p className="text-gray-500">No courses available. Please add some courses first.</p>
        )}
      </ul>

      {/* --- Back Button --- */}
      <div className="mt-6 text-right">
        <BackButton />
      </div>
    </div>
  );
}

export default CourseView;
