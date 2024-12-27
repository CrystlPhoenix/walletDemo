import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCreditCard,
  FaExchangeAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const activeClass = "bg-gray-700 text-blue-300"; // Style for active links

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white min-h-screen`}
    >
      {/* Toggle Button */}
      <button
        className="p-4 focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? "<<" : ">>"}
      </button>

      {/* Sidebar Content */}
      <ul className="flex-1 mt-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-gray-700 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaHome />
            {isOpen && <span>Home</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cards"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-gray-700 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaCreditCard />
            {isOpen && <span>Cards</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-gray-700 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaExchangeAlt />
            {isOpen && <span>Transactions</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-gray-700 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaCog />
            {isOpen && <span>Settings</span>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `flex items-center gap-4 p-4 hover:bg-gray-700 ${
                isActive ? activeClass : ""
              }`
            }
          >
            <FaSignOutAlt />
            {isOpen && <span>Logout</span>}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
