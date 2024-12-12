// MainButtons.jsx

import { Link, useLocation } from "react-router-dom";
import { useStore } from "../store/Store";

function MainButtons() {
  const courses = useStore((state) => state.courses);
  const isCoursesEmpty = courses.length === 0;

  const location = useLocation();
  const showMainButtons = location.pathname === "/";

  if (!showMainButtons) return null;

  return (
    <div>
      <div className="flex gap-1 my-4 justify-center items-center">
        <button className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Link to="/add-course">Add courses</Link>
        </button>
        <div className="relative group">
          <button
            className={`p-2 px-4 rounded-lg ${
              isCoursesEmpty
                ? "bg-gray-300"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
            disabled={isCoursesEmpty}
          >
            {isCoursesEmpty ? "Create notes" : <Link to="/add-notes">Create notes</Link>}
          </button>
          {isCoursesEmpty && (
            <div className="absolute bottom-full mb-3 left-1/2 transform -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-orange-600 text-white text-sm font-bold rounded-lg py-2 px-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <span>Add courses first</span>
                </div>
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-orange-600"></div>
              </div>
            </div>
          )}
        </div>
        <button className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          <Link to="/view-notes">List notes</Link>
        </button>
      </div>
    </div>
  );
}

export default MainButtons;

