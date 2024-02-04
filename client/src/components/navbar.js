import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 h-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to="/">WellNest</NavLink>
        </div>

        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <NavLink to="/user" className="nav-link">
                Home
              </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <NavLink to="/journal" className="nav-link">
                Journal
              </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <NavLink to="/Questionnaire" className="nav-link">
                Chatbot
              </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              <NavLink to="/therapistDetail" className="nav-link">
                Therapist
              </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
