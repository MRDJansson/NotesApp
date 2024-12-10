// Header.jsx

import NavLinks from './NavLinks';

function Header() {
    return (
        <header className="bg-orange-500 text-white p-6 shadow-lg">
            <div className="max-w-3xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold tracking-tight">
                    NotesApp
                </h1>
                <NavLinks />
            </div>
        </header>
    );
}

export default Header;
