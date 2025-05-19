import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="w-full border-b-2 border-cyan-300 bg-white px-4 sm:px-6 py-3 shadow-sm">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        
        {/* Left Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-cyan-600">Contact Us</a>
          <a href="#" className="hover:text-cyan-600">FAQ's</a>
          <a href="#" className="hover:text-cyan-600">Track Order</a>
        </div>

        {/* Center Logo */}
        <div className="text-center md:order-none">
          <h1 className="text-lg md:text-xl font-bold">
            My Gallery<span className="text-blue-600 align-super text-xs">®</span>
          </h1>
          <p className="text-xs text-gray-600 tracking-wider">SINCE 2024</p>
        </div>

        {/* Right Links */}
        <div className="flex flex-wrap justify-center md:justify-end items-center space-x-2 md:space-x-4 text-sm md:text-base">
          <a href="#" className="hover:text-cyan-600">My Account</a>
          <span className="text-gray-400">/</span>
          <a href="#" className="hover:text-cyan-600">Logout</a>
          <FaShoppingCart className="ml-2 text-lg cursor-pointer hover:text-cyan-600" />
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
