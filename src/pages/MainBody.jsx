//MainBody.jsx

import { Outlet } from "react-router-dom";
import MainBodyInfo from "../components/MainBodyInfo";
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
      <MainBodyInfo />
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
