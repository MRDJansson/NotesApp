//Courses.jsx

import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";


function Courses() {
  const lista = useStore((state) => state.lista);


  return (
    <div>
      <ul>
        {lista.map((kurssi, i) => (
          <CourseNames key={i} name={kurssi} />
        ))}
      </ul>
    </div>
  );
}

export default Courses;
