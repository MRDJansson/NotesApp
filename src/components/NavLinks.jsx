// NavLinks.jsx
import { BookOpen, List, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from "../store/Store";

function NavLinks() {
  const courses = useStore((state) => state.courses);
  const isCoursesEmpty = courses.length === 0;

  return (
    <div className="flex gap-1 mt-4 justify-end">
        <Link
            to="/add-notes"
            className=" rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:text-white"
        >
            <Plus className="h-5 w-5" strokeWidth={3}/>
        </Link>
        
        {isCoursesEmpty ? (
            <div className="flex items-center gap-2 p-2 px-4 bg-orange-500 border-2 border-gray-300 text-gray-300 rounded-lg cursor-not-allowed">
                <List className="h-5 w-5"/>
            </div>
        ) : (
            <Link
                to="/view-notes"
                className="flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white"
            >
                <List className="h-5 w-5" strokeWidth={3}/>  
            </Link>
        )}

        <Link
            to="/add-course"
            className="flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white"
        >
            <BookOpen className="h-5 w-5" strokeWidth={3} />
        </Link>
    </div>
  );
}

export default NavLinks;
