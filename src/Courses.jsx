//Courses.jsx

import Notes from "./Notes";
import { useStore } from "./store/Store";

function Courses() {
  const lista = useStore((state) => state.lista);

  return (
    <div>
      <ul>
        {lista.map((kurssi, i) => (
          <Notes key={i} name={kurssi} />
        ))}
      </ul>
    </div>
  );
}

export default Courses;
