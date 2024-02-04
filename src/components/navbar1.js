import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar1 = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-50 h-16">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">WellNest</div>

        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
                <NavLink to="/therapist" className="nav-link">
                    Home
                </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
                <NavLink to="/therapistRequest" className="nav-link">
                    Requests
                </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
                <NavLink to="/past" className="nav-link">
                    Past
                </NavLink>
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
                <NavLink to="/pending" className="nav-link">
                    Pending   
                </NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
