//Courses.jsx

import Notes from "./Notes";
import { useStore } from "./store/Store";

function Courses() {
  const lista = useStore((state) => state.lista); // Access shared state

  return (
    <div>
      <ul>
        {lista.map((kurssi, i) => (
          <Notes key={i} name={kurssi} /> // Correctly render Notes component
        ))}
      </ul>
    </div>
  );
}

export default Courses;
