import React, { useState } from 'react';
import { FaWhatsapp, FaAngleDown, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-customTeal p-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <h4>HEMMA INVESTMENT</h4>
        </div>

      
        <nav className="hidden md:flex space-x-6 text-white">
            <Link to={'/'} className="font-medium hover:text-gray-300">HOME</Link>
            <Link to={'/about-Us'} className="font-medium hover:text-gray-300">ABOUT US</Link>
            <Link to={'/services'} className="font-medium hover:text-gray-300">SERVICES</Link>
            <Link to={'/team'} className="font-medium hover:text-gray-300">TEAM</Link>
          <div className="relative group">
            <button className="font-medium flex items-center hover:text-gray-300">
              More <span className="ml-1"><FaAngleDown /></span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-36">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </button>

       
        <Link to={"/contact"}
          
          className="bg-white text-customTeal font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </div>

     
      {isMobileMenuOpen && (
        <div className="md:hidden bg-customTeal text-white mt-4 space-y-4 py-4 px-6">
          <a href="#" className="block font-medium hover:text-gray-300">Home</a>
          <a href="#" className="block font-medium hover:text-gray-300">About Us</a>
          <a href="#" className="block font-medium hover:text-gray-300">Services</a>
          <a href="#" className="block font-medium hover:text-gray-300">Team</a>
          <div className="relative">
            <button className="font-medium flex items-center hover:text-gray-300 w-full">
              More <span className="ml-1"><FaAngleDown /></span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-full">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Option 2</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
