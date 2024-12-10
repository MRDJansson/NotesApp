//CourseView.jsx

import { Link } from "react-router-dom";
import CourseAdd from "../components/CourseAdd";
import CourseItem from "../components/CourseItem";
import { useStore } from "../store/Store";
import { useFetchData } from "../utils/useFetchData";

function CoursesView() {
  const courses = useStore((state) => state.courses);
  const fetchCourseData = useStore((state) => state.fetchCourseData);
  const hasFetchedCourses = useStore((state) => state.hasFetchedCourses);

  useFetchData(fetchCourseData, hasFetchedCourses, !hasFetchedCourses);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md border-r-4 border-b-4 border-orange-500">
      <CourseAdd /> {/* CourseAdd component at the top */}
      
      <h1 className="text-2xl font-semibold text-gray-800 mt-6 mb-6">Available Courses</h1>

      <ul className="space-y-4">
        {courses.length > 0 ? (
          courses.map((course) => (
            <CourseItem key={course.id} name={course.name} id={course.id} />
          ))
        ) : (
          <p className="text-gray-500">No courses available. Please add some courses first.</p>
        )}
      </ul>

      <div className="mt-6 text-right">
        <Link
          to="/"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Back
        </Link>
      </div>
    </div>
  );
}

export default CoursesView;
