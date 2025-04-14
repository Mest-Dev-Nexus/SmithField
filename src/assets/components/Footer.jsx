import { Instagram, LinkedinIcon, Mail, Phone } from "lucide-react";
import React from "react";
import logo from '../images/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex justify-between items-center flex-col gap-6 lg:flex-row">
          <img className="h-24 w-auto" src={logo} alt="SmithField" />
          
          <ul className="text-base text-center sm:flex items-center justify-center gap-8">
            <li>
              <a href="/" className="text-white hover:text-green-400">
                Home
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="/services" className="text-white hover:text-green-400">
                Services
              </a>
            </li>
            <li className="sm:my-0 my-2">
              <a href="/shop" className="text-white hover:text-green-400">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-green-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        
        <div className="flex space-x-3 justify-center mb-6">
          <a href="https://gh.linkedin.com/company/smithfield-agribusiness" className="flex justify-center w-8 h-8 rounded-full bg-gray-800 items-center hover:bg-green-600">
            <LinkedinIcon width="auto" height="16" className="text-white" />
          </a>
          <a href=" https://www.instagram.com/smithfield_agribusiness/" className="flex justify-center w-8 h-8 rounded-full bg-gray-800 items-center hover:bg-green-600">
            <Instagram width="auto" height="16" className="text-white" />
          </a>
          <a href="smithfieldagribusiness@gmail.com
" className="flex justify-center w-8 h-8 rounded-full bg-gray-800 items-center hover:bg-green-600">
            <Mail width="auto" height="16" className="text-white" />
          </a>
          <a href="tel:+233538303383" className="flex justify-center w-8 h-8 rounded-full bg-gray-800 items-center hover:bg-green-600">
            <Phone width="auto" height="16" className="text-white" />
          </a>
        </div>
        
        <div className="py-4 border-t border-gray-700">
          <div className="flex items-center justify-center">
            <span className="text-gray-400 text-sm">
              © 2024 SmithField | All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;