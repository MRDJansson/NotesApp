//Courses.jsx

import { Link } from "react-router-dom";
import CourseNames from "../components/CourseNames";
import { useStore } from "../store/Store";
import { useFetchData } from "../utils/useFetchData";


function Courses() {
  const lista = useStore((state) => state.lista);
  const fetchCourseData = useStore((state) => state.fetchCourseData)
  const hasFetchedCourses = useStore((state) => state.hasFetchedCourses);

  useFetchData(fetchCourseData, hasFetchedCourses);

  return (
    <div>
      <ul>
        {lista.map((kurssi) => (
          <CourseNames key={kurssi.id} name={kurssi.name} id={kurssi.id} />
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

export default Courses;
