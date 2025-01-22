import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility
  const dropdownRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
    });

    // Add click event listener to close dropdown when clicking outside of it
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    // Attach the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full bg-customTeal p-4 sticky top-0 z-50">
      {/* Navbar container */}
      <div className="container mx-auto flex justify-between items-center" data-aos="fade-down">
        {/* Logo */}
        <div className="text-white text-2xl font-bold flex items-center">
          <Link to={"/"}>
            <img src="../assets/images/real-white-logo.png" width={70} alt="Hemma Investment Logo" className="mr-2" />
          </Link>
          <Link to={"/"}>
            <h4>HEMMA INVESTMENT</h4>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <Link to={"/"} className="font-medium hover:text-gray-300">Home</Link>
          <Link to={"/about-Us"} className="font-medium hover:text-gray-300">About Us</Link>
          <Link to={"/services"} className="font-medium hover:text-gray-300">Services</Link>
          <Link to={"/team"} className="font-medium hover:text-gray-300">Team</Link>

          {/* Dropdown for "More" menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)} // Show the dropdown menu when hovered
            onMouseLeave={() => setDropdownOpen(false)} // Hide the dropdown menu when mouse leaves
            ref={dropdownRef} // Attach ref to dropdown div
          >
            <button className="font-medium flex items-center hover:text-gray-300">
              More <FaAngleDown className="ml-1" />
            </button>
            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div className="absolute bg-white text-black mt-[0px] rounded-lg shadow-lg w-36"> {/* Adjusted with mt-[8px] */}
                <div className="w-56 rounded-md shadow-lg bg-customTeal text-white border border-white">
                  <div className="py-1">
                   
                    <Link to={'/location'} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
                      Location
                    </Link>
                    <Link to={"/possible-solutions"} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
                      Possible Solutions
                    </Link>
                    <Link to={'/benefit'} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
                      Project Beneficiaries
                    </Link>
                    <Link to={'/quote'} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal ">
                      Get a quote
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Desktop "Contact Us" Button */}
        <Link
          to={"/contact"}
          className="bg-white text-customTeal font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden md:block"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Button */}
        {!isMobileMenuOpen && (
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FaBars size={24} />
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-customTeal text-white z-50 flex flex-col items-center py-8 space-y-4"
          data-aos="fade-in"
        >
          {/* Close button */}
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-6 text-white text-3xl">
            ✕
          </button>

          {/* Mobile navigation links */}
          <Link to={"/"} className="block font-medium text-xl hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to={"/about-Us"} className="block font-medium text-xl hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link to={"/services"} className="block font-medium text-xl hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            Services
          </Link>
          <Link to={"/team"} className="block font-medium text-xl hover:text-gray-300" onClick={() => setMobileMenuOpen(false)}>
            Team
          </Link>

          {/* Dropdown for "More" menu in mobile */}
        {/* Dropdown for "More" menu in mobile */}
       {/* Dropdown for "More" menu in mobile */}
<div className="relative group" >
  <button className="font-medium flex items-center hover:text-gray-300">
    More <FaAngleDown className="ml-1" />
  </button>
  <div className="absolute hidden group-hover:block bg-white text-black mt-1 rounded-lg shadow-lg w-36 sm:w-48 md:w-56">
    {/* Dropdown container that gets centered and adjusts padding for left side */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-6 md:px-8 rounded-md shadow-lg bg-customTeal text-white border border-white">
      <div className="py-1">
        <Link to={'/location'} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
          Location
        </Link>
        <Link to={"/possible-solutions"} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
          Possible Solutions
        </Link>
        <Link to={"/benefit"} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
          Project Beneficiaries
        </Link>
        <Link to={"/quote"} className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal">
          Get a quote
        </Link>
      </div>
    </div>
  </div>
</div>



        </div>
      )}
    </header>
  );
};

export default Navbar;
