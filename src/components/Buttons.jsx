import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store/Store";

function Buttons() {
  const lista = useStore((state) => state.lista);
  const isCoursesEmpty = lista.length === 0;
  
  const location = useLocation();
  const showButtons = location.pathname === "/";

  if (!showButtons) return null;

  return (
    <div>
      <button disabled={isCoursesEmpty}>
        {isCoursesEmpty ? (
          "Add courses first"
        ) : (
          <Link to="/aihe1">Create notes for class</Link>
        )}
      </button>
      <button>
        <Link to="/aihe2">List notes</Link>
      </button>
      <button>
        <Link to="/aihe3">Add courses</Link>
      </button>
    </div>
  );
}

export default Buttons;
