// MainButtons.jsx

import { Link } from "react-router-dom"; // Links for navigation
import { useStore } from "../../store/Store"; // Zustand for state management
import Tooltips from "../Tooltips";

function MainButtons() {
  const courses = useStore((state) => state.courses); // Fetch courses from store
  const isCoursesEmpty = courses.length === 0;        // Check if courses exist

  return (
    <div>
      <div className="flex gap-1 my-4 justify-center items-center">
        {/* Link-button for creating notes. Disabled if no courses exist and shows a tooltip*/}
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

        {/* Link-button for adding courses */}
        <Link
          to="/add-course"
          className="p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:scale-105"
        >
          Add Courses
        </Link>

        {/* Link-button for viewing notes */}
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
