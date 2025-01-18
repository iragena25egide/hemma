import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-green-600 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">HEMMA</div>
        
        <nav className="hidden md:flex space-x-6 text-white">
          <a href="#" className="font-medium hover:text-gray-300">Home</a>
          <a href="#" className="font-medium hover:text-gray-300">About Us</a>
          <a href="#" className="font-medium hover:text-gray-300">Services</a>
          <a href="#" className="font-medium hover:text-gray-300">Team</a>
          <div className="relative group">
            <button className="font-medium flex items-center hover:text-gray-300">
              More <span className="ml-1">▼</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-36">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
        </nav>

        <a
          href="#"
          className="bg-white text-green-600 font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Navbar;
