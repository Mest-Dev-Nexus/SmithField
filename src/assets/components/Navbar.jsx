import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ShopCart from "../components/Cart/ShopCart";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isCartOpen, toggleCart, cartCount } = useCart(); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img className="h-12 w-auto" src={logo} alt="Smithfield" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
          </div>

          {/* Right-side items */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button 
              onClick={toggleCart} // Use the toggleCart from context
              className="relative p-2 text-gray-700 hover:text-green-600"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            {["/", "/services", "/shop", "/about", "/contact"].map((path) => (
              <Link
                key={path}
                to={path}
                className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
                onClick={toggleMenu}
              >
                {path === "/" ? "Home" : path.slice(1).replace(/^\w/, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}

      <ShopCart />
    </nav>
  );
};

export default Navbar;