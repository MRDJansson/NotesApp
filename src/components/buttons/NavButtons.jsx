// NavButtons.jsx

// Importing necessary components and icons
import { BookOpen, List, Plus } from 'lucide-react'; // Importing icons for the navigation buttons
import { Link } from 'react-router-dom'; // 'Link' is used for navigation between routes in the app
import { useStore } from "../../store/Store"; // Using the Zustand store to manage global state
import Tooltip from '../Tooltips'; // Tooltip component for showing tooltips when hovering over buttons

function NavButtons() {
    // Accessing the list of courses from the global state
    const courses = useStore((state) => state.courses);
    
    // Checking if the courses list is empty, to conditionally render buttons
    const isCoursesEmpty = courses.length === 0;

    return (
        <div className="flex gap-1 justify-end">            
            {/* If no courses are available, disable the "Add Note" button and show a tooltip */}
            {isCoursesEmpty ? (
                <Tooltip text="Add a course first">
                    <div className="flex items-center gap-2 p-2 px-4 bg-orange-500 border-2 border-gray-300 text-gray-300 rounded-lg cursor-not-allowed hover:scale-105">
                        <Plus className="h-5 w-5" />
                    </div>
                </Tooltip>
            ) : (
                // If courses are available, show the "Add Note" button as a link
                <Link
                    to="/add-notes"
                    className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
                >
                    <Plus className="h-5 w-5" strokeWidth={3} />
                </Link>
            )}

            {/* Link to navigate to the "Add Course" page */}
            <Link
                to="/add-course"
                className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
            >
                <BookOpen className="h-5 w-5" strokeWidth={3} />
            </Link>

            {/* Link to navigate to the "View Notes" page */}
            <Link
                to="/view-notes"
                className="rounded-md border-2 border-white flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white hover:scale-105"
            >
                <List className="h-5 w-5" strokeWidth={3} />
            </Link>
        </div>
    );
}

export default NavButtons;

