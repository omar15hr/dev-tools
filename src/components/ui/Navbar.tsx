import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-white text-lg font-bold" to="/">
          DevTools
        </Link>

        <div className="flex space-x-6">
          <NavLink
            className={({ isActive }) =>
              `text-lg font-bold ${isActive ? "text-white" : "text-gray-500"}`
            }
            to="/components"
          >
            Components
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-lg font-bold ${isActive ? "text-white" : "text-gray-500"}`
            }
            to="/fronted"
          >
            Fronted
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `text-lg font-bold ${isActive ? "text-white" : "text-gray-500"}`
            }
            to="/backend"
          >
            Backend
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
