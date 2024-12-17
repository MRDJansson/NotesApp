// MainButtons.jsx

import { Link } from "react-router-dom";
import { useStore } from "../../store/Store";
import Tooltips from "../Tooltips";

function MainButtons() {
  const courses = useStore((state) => state.courses);
  const isCoursesEmpty = courses.length === 0;

  return (
    <div>
      <div className="flex gap-1 my-4 justify-center items-center">
        <Link
          to="/add-course"
          className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:scale-105"
        >
          Add Courses
        </Link>

          {isCoursesEmpty ? (
            <Tooltips text="Add a Course First!">
              <div
                className="p-2 px-4 rounded-lg bg-gray-300 cursor-not-allowed"
                aria-disabled="true"
              >
                Create Notes
              </div>
            </Tooltips>
          ) : (
            <Link
              to="/add-notes"
              className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:scale-105"
            >
              Create Notes
            </Link>
          )}

        <Link
          to="/view-notes"
          className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:scale-105"
        >
          View Notes
        </Link>
      </div>
    </div>
  );
}

export default MainButtons;
