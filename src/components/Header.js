import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800">
      <nav className="p-4 lg:p-6 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          DeesBeautiess
        </Link>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className={`flex items-stretch lg:hidden text-lg text-white focus:outline-none transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            {isOpen ? "X" : "☰"}
          </button>
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:bg-gray-700 px-2 py-1 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:bg-gray-700 px-2 py-1 rounded">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about-me" className="text-white hover:bg-gray-700 px-2 py-1 rounded">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/contact-me" className="text-white hover:bg-gray-700 px-2 py-1 rounded">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden bg-gray-700 text-white p-4 transition duration-300">
          <ul>
            <li className="mb-2">
              <Link to="/" className="text-white hover:text-gray-400">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/services" className="text-white hover:text-gray-400">
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/about-me" className="text-white hover:text-gray-400">
                About Me
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/contact-me" className="text-white hover:text-gray-400">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
