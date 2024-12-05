//Courses.jsx

import { Link } from "react-router-dom";
import CourseItem from "../components/CourseItem";
import { useStore } from "../store/Store";
import { useFetchData } from "../utils/useFetchData";


function CoursesView() {
  const courses = useStore((state) => state.courses);
  const fetchCourseData = useStore((state) => state.fetchCourseData)
  const hasFetchedCourses = useStore((state) => state.hasFetchedCourses);

  useFetchData(fetchCourseData, hasFetchedCourses, !hasFetchedCourses);

  return (
    <div>
      <ul>
        {courses.map((course) => (
          <CourseItem key={course.id} name={course.name} id={course.id} />
        ))}
      </ul>
      <div>
        <button>
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>

  );
}

export default CoursesView;
