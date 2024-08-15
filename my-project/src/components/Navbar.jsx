import React from 'react';
// import { BrowserRouter as Router, Route, Routes, a } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-6 bg-gray-900 flex justify-center">
        <img src="logo.jpg" alt="Logo" className="w-20 h-20 rounded-full" />
      </div>
      <nav className="flex items-center flex-col mt-4 space-y-2">
        <a href="/" className="px-4 py-2 hover:bg-gray-700">
          Home
        </a>
        <a href="/about" className="px-4 py-2 hover:bg-gray-700">
          About Us
        </a>
        <a href="/services" className="px-4 py-2 hover:bg-gray-700">
          Services
        </a>
        <a href="/contact" className="px-4 py-2 hover:bg-gray-700">
          Contact
        </a>
      </nav>
    </div>
  );
};


export default Navbar;
