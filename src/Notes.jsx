//Courses.jsx

import { useLocation } from "react-router-dom";
import CourseNames from "./CourseNames";
import { useStore } from "./store/Store";



function Notes() {
  const lista2 = useStore((state) => state.lista2);
  const lista = useStore((state) => state.lista);



  return (
    <div>
      <div>
        <select name="" id="">{
          lista.map((kurssi, i) => (
            <option key={i} value={kurssi}>
              {kurssi}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {lista2.map((kurssi, i) => (
          <CourseNames key={i} name={kurssi} />
        ))}
      </ul>
    </div>
  );
}

export default Notes;
