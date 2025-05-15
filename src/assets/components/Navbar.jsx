import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-green-50 shadow-md sticky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center">
            <Link to="/">
              <img className="h-12 w-auto" src={logo} alt="Smithfield" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-800 hover:text-green-600 hover:bg-green-100 px-3 py-2 rounded-md font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-green-600 hover:bg-green-100 px-3 py-2 rounded-md font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/shop"
              className="text-gray-800 hover:text-green-600 hover:bg-green-100 px-3 py-2 rounded-md font-medium transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-600 hover:bg-green-100 px-3 py-2 rounded-md font-medium transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-green-600 hover:bg-green-100 px-3 py-2 rounded-md font-medium transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <button className="bg-black text-white px-4 py-2 rounded-full font-medium hidden sm:block hover:bg-green-600 transition duration-300">
                 Login
              </button>
            </Link>

            {/*menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">
                  {isMenuOpen ? "Close menu" : "Open menu"}
                </span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* show or hide on click */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
            >
              Services
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
            >
              Contact Us
            </Link>

           
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;