// NavButtons.jsx
import { BookOpen, List, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from "../store/Store";
import Tooltip from './Tooltips';

function NavButtons() {
    const courses = useStore((state) => state.courses);
    const isCoursesEmpty = courses.length === 0;

    return (
        <div className="flex gap-1 mt-4 justify-end">
            {isCoursesEmpty ? (
                <Tooltip text="Add a course first">
                    <div className="flex items-center gap-2 p-2 px-4 bg-orange-500 border-2 border-gray-300 text-gray-300 rounded-lg cursor-not-allowed hover:scale-105">
                        <Plus className="h-5 w-5" />
                    </div>
                </Tooltip>
            ) : (
                    <Link
                        to="/add-notes"
                        className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
                    >
                        <Plus className="h-5 w-5" strokeWidth={3} />
                    </Link>
            )}

                <Link
                    to="/view-notes"
                    className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
                >
                    <List className="h-5 w-5" strokeWidth={3} />
                </Link>

                <Link
                    to="/add-course"
                    className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
                >
                    <BookOpen className="h-5 w-5" strokeWidth={3} />
                </Link>
        </div>
    );
}

export default NavButtons;
