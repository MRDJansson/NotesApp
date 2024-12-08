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
      <div className="flex gap-1 my-4 justify-center items-center">
        <button
          className={`p-2 px-4 rounded-lg ${
            isCoursesEmpty ? "bg-gray-300" : "bg-orange-500 text-white hover:bg-orange-600"
          }`}
          disabled={isCoursesEmpty}
        >
          {isCoursesEmpty ? "Create notes" : <Link to="/aihe1">Create notes</Link>}
        </button>
        <button className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Link to="/aihe2">List notes</Link>
        </button>
        <button className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Link to="/aihe3">Add courses</Link>
        </button>
      </div>

      <div>{isCoursesEmpty && "Add courses first"}</div>
    </div>
  );
}

export default NavButtons;
