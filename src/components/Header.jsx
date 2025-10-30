import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-16">

          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Abhishek Gupta
            </Link>
          </div>


          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              About
            </NavLink>
             <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Project
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Github
            </NavLink>
          </nav>


          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Home
            </NavLink>
           
            <NavLink
              to="/project"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Project
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                    border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }
            >
              Github
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
