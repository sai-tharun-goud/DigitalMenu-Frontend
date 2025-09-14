import type { FC } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar: FC = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl font-bold text-indigo-600">FreeMenu</Link>
      <div className="flex gap-6">
        {["/", "/about", "/contact", "/login"].map((path) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `text-gray-700 font-medium hover:text-indigo-600 ${
                isActive ? "text-indigo-600 underline" : ""
              }`
            }
          >
            {path === "/"
              ? "Home"
              : path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1)}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
