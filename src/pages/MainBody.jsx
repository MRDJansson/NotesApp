//MainBody.jsx

import { Outlet } from "react-router-dom";
import MainButtons from "../components/MainButtons";

function MainBody() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6 p-6 py-10 bg-white rounded-lg shadow-md mx-auto max-w-3xl ">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to NotesApp!</h2>
        <p className="text-gray-600">
          Organize your notes and courses effortlessly. <br></br>Use the navigation under to add notes, list them, or manage your courses.
        </p>
        <MainButtons />
        <p className="text-sm text-gray-500">
          Follow these simple steps to get started:
        </p>
      </div>
      <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm max-w-xl">
        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
          <li>
            <strong className="text-orange-500">Add Courses</strong>: Begin by adding courses in the <em>"Add Courses"</em> section to organize your notes effectively.
          </li>
          <li>
            <strong className="text-orange-500">Create Notes:</strong> Once courses are added, go to the <em>"Create Notes"</em> section to start writing and saving notes.
          </li>
          <li>
            <strong className="text-orange-500">View and Manage Notes:</strong> Visit the <em>"View Notes"</em> section to browse or delete notes as needed.
          </li>
        </ol>
      </div>
      <p className="text-sm text-gray-500 italic">
        Get started by adding a course!
      </p>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default MainBody;
