// Header.jsx
// Header.jsx
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

function Header() {
  return (
    <header className="bg-orange-500 text-white p-3 shadow-lg py-b-5">
      <div className="max-w-3xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          NotesApp
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
