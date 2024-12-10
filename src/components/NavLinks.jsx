// NavLinks.jsx

import { BookOpen, List, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

function NavLinks() {
    return (
        <div className="flex gap-4 mt-4 justify-end">
            <Link
                to="/add-course"
                className="flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white"
            >
                <Plus className="h-5 w-5" />
            </Link>
            <Link
                to="/add-notes"
                className="flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white"
            >
                <List className="h-5 w-5" />
            </Link>
            <Link
                to="/view-notes"
                className="flex items-center gap-2 p-2 px-4 bg-white text-orange-500 rounded-lg hover:bg-orange-600 hover:text-white"
            >
                <BookOpen className="h-5 w-5" />
            </Link>
        </div>
    );
}

export default NavLinks;
