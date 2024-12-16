// Header.jsx

import { Link } from 'react-router-dom';
import NavButtons from './NavButtons';

function Header() {
  return (
    <header className="bg-orange-500 text-white p-3 shadow-lg py-b-5">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          NotesApp
        </Link>
        <NavButtons />
      </div>
    </header>
  );
}

export default Header;
