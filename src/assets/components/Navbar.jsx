import React, { useState } from "react";
import { Menu, X, ShoppingCart, Package } from "lucide-react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ShopCart from "../components/Cart/ShopCart";

// Store Popup Component
const StorePopup = ({ onClose }) => {
  const storefronts = [
    { name: "Retail", url: "https://paystack.shop/mobile-makola-retail" },
    { name: "Wholesale", url: "https://paystack.shop/mobile-makola-wholesale" },
    { name: "Farm Inputs", url: "https://paystack.shop/mobile-makola-farm-inputs" }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-sm w-full border border-green-200">
        <div className="flex justify-between items-center p-4 border-b border-green-100 bg-green-50 rounded-t-xl">
          <div className="flex items-center gap-3">
            <Package className="text-green-600" size={24} />
            <h3 className="text-lg font-semibold text-green-900">Select Store</h3>
          </div>
          <button
            onClick={onClose}
            className="text-green-600 hover:text-green-800 p-1 rounded-full hover:bg-green-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-2">
          {storefronts.map((store, index) => (
            <a
              key={index}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 border border-green-200 hover:border-green-400 text-green-800 hover:text-green-900 transition-all duration-200 font-medium"
              onClick={onClose}
            >
              {store.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStorePopupOpen, setIsStorePopupOpen] = useState(false);
  const { isCartOpen, toggleCart, cartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openStorePopup = () => {
    setIsStorePopupOpen(true);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const closeStorePopup = () => {
    setIsStorePopupOpen(false);
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
            
            {/* Shop Button with Store Popup */}
            <button
              onClick={openStorePopup}
              className="nav-link flex items-center gap-1 hover:text-green-600 transition-colors"
            >
              Shop
            </button>

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
            {/* <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-green-600"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button> */}

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
            <Link
              to="/"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
              onClick={toggleMenu}
            >
              Services
            </Link>
            
            {/* Mobile Shop Button with Store Popup */}
            <button
              onClick={openStorePopup}
              className=" w-full text-left px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100 flex items-center gap-2"
            >
              <Package size={18} />
              Shop
            </button>

            <Link
              to="/about"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md font-medium text-gray-800 hover:text-green-600 hover:bg-green-100"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}

      {/* Store Popup Modal */}
      {isStorePopupOpen && <StorePopup onClose={closeStorePopup} />}

      {/* <ShopCart /> */}
    </nav>
  );
};

export default Navbar;