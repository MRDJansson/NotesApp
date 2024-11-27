//Courses.jsx

import { Link } from "react-router-dom";
import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";
import { useEffect } from "react";


function Courses() {
  const lista = useStore((state) => state.lista);
  const fetchCourseData = useStore((state) => state.fetchCourseData)

  useEffect(() => {
    fetchCourseData();
  }, [fetchCourseData])

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
