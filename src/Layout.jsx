import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="flex space-x-4 items-center justify-center">
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" className="text-pink-500 hover:text-purple-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="aihe1" className="text-pink-500 hover:text-purple-700">
              Add SP
            </Link>
          </li>
          <li>
            <Link to="aihe2" className="text-pink-500 hover:text-purple-700">
              Check list
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
