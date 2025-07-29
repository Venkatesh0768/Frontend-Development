import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex space-x-4 bg-gray-200 p-4 items-center justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "bg-red-300 px-3 py-1 rounded" : "px-3 py-1"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "bg-red-300 px-3 py-1 rounded" : "px-3 py-1"
        }
      >
        About
      </NavLink>

      <NavLink
        to="/user"
        className={({ isActive }) =>
          isActive ? "bg-red-300 px-3 py-1 rounded" : "px-3 py-1"
        }
      >
        User
      </NavLink>
    </nav>
  );
}

export default NavBar;
