import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaAngleDown, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
    });
  }, []);

  return (
    <header className="w-full bg-customTeal p-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center" data-aos="fade-down">
        <div className="text-white text-2xl font-bold flex items-center">
         <Link to={'/'}><img src="../assets/images/logo.png" width={60} alt="Hemma Investment Logo" className="mr-2" /></Link> 
         <Link to={'/'}> <h4>HEMMA INVESTMENT</h4></Link>
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
              <Link to={'/'} className="block px-4 py-2 hover:bg-gray-100">
                             HEMMA INVESTMENT
                           </Link>
                           <Link to={'/services'} className="block px-4 py-2 hover:bg-gray-100">
                             SERVICES
                           </Link>
            </div>
          </div>
        </nav>

        
        <Link to={"/contact"}
          className="bg-white text-customTeal font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden md:block"
        >
          Contact Us
        </Link>

       
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars size={24} />
        </button>
      </div>

     
      {isMobileMenuOpen && (
        <div 
          className="md:hidden bg-customTeal text-white mt-4 space-y-4 py-4 px-6 relative" 
          data-aos="fade-in"
        >
          <button 
            onClick={() => setMobileMenuOpen(false)} 
            className="absolute top-2 right-4 text-white text-2xl"
          >
            ✕
          </button>
          <Link to={'/'} className="block font-medium hover:text-gray-300">HOME</Link>
          <Link to={'/about-Us'} className="block font-medium hover:text-gray-300">ABOUT US</Link>
          <Link to={'/services'} className="block font-medium hover:text-gray-300">SERVICES</Link>
          <Link to={'/team'} className="block font-medium hover:text-gray-300">TEAM</Link>

          <div className="relative">
            <button className="font-medium flex items-center hover:text-gray-300 w-full">
              More <span className="ml-1"><FaAngleDown /></span>
            </button>
            <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-full">
              <Link to={'/'} className="block px-4 py-2 hover:bg-gray-100">
                             HEMMA INVESTMENT
                           </Link>
                           <Link to={'/services'} className="block px-4 py-2 hover:bg-gray-100">
                             SERVICES
                           </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
