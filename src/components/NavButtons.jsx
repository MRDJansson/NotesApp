// NavButtons.jsx

import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store/Store";

function NavButtons() {
  const courses = useStore((state) => state.courses);
  const isCoursesEmpty = courses.length === 0;

  const location = useLocation();
  const showNavButtons = location.pathname === "/";

  if (!showNavButtons) return null;

  return (
    <div>
      <button disabled={isCoursesEmpty}>
        {isCoursesEmpty ? (
          "Create notes for class"
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
      <div>{isCoursesEmpty && "Add courses first"}</div>
    </div>
  );
}

export default NavButtons;
