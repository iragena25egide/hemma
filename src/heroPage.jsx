import React, { useState } from "react";
import { FaWhatsapp, FaAngleDown } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const LandingPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSendMessage = () => {
    const phoneNumber = "+250798555420";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('../assets/images/hero.jpg')" }}
    >
      <header className="absolute top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-center bg-opacity-50 border-b border-gray-300">
        <div className="flex w-[20%] sm:w-[10%] lg:w-[8%]">
          <img src="../assets/images/real-white-logo.png" alt="Logo" className="w-full" />
        </div>

        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden text-white"
        >
          <IoMenu size={24} />
        </button>

        {/* Desktop Menu */}
        <nav className={`md:flex space-x-6 text-white ${showMobileMenu ? 'block' : 'hidden'}`}>
          <a href="#" className="font-medium hover:text-gray-300">
            Home
          </a>
          <Link to={"/about-Us"} className="font-medium hover:text-gray-300">
            About us
          </Link>
          <Link to={"/services"} className="font-medium hover:text-gray-300">
            Services
          </Link>
          <Link to={"/team"} className="font-medium hover:text-gray-300">
            Team
          </Link>
          <div className="relative group">
            {/* Button to toggle the dropdown */}
            <button className="font-medium flex items-center hover:text-gray-300">
              More <FaAngleDown className="ml-1" />
            </button>

            {/* Dropdown menu */}
            <div className="absolute bg-customTeal text-white rounded-lg shadow-lg w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 border border-white">
              <div className="py-1">
                <Link
                  to={'/location'}
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                >
                  Location
                </Link>
               
                <Link 
                  to="/possible-solutions"  
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                >
                  Possible Solutions
                </Link>
                <Link
                  to={'/benefit'}
                  className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                >
                  Project Beneficiaries
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Link
          to={"/contact"}
          className="bg-white text-customTeal font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden sm:block"
        >
          Contact Us
        </Link>
      </header>

      {showMobileMenu && (
        <div 
          className="fixed top-0 left-0 w-full h-full bg-customTeal z-50 flex flex-col items-center py-6" 
          style={{ backgroundColor: 'customTeal' }} // Removing `bg-opacity-90` for an opaque background
        >
          {/* Close button for the mobile menu */}
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
        
          {/* Navigation links */}
          <nav className="flex flex-col items-center space-y-4 text-white text-xl">
            <a href="#" className="font-medium hover:text-gray-300">
              Home
            </a>
            <Link to={"/about-Us"} className="font-medium hover:text-gray-300">
              About Us
            </Link>
            <Link to={"/services"} className="font-medium hover:text-gray-300">
              Services
            </Link>
            <Link to={"/team"} className="font-medium hover:text-gray-300">
              Team
            </Link>
            
            {/* Dropdown for "More" */}
            <div className="relative group">
              <button className="font-medium flex items-center hover:text-gray-300">
                More <FaAngleDown className="ml-1" />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-black mt-2 rounded-lg shadow-lg w-36">
                <div className="absolute w-56 rounded-md shadow-lg bg-customTeal text-white border border-white">
                  <div className="py-1">
                    <Link
                      href={'/location'}
                      className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                    >
                      Location
                    </Link>
                    <Link
                      to={"/possible-solutions"}
                      className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                    >
                      Possible Solutions
                    </Link>
                    <Link
                      to={"/benefit"}
                      className="block px-4 py-2 text-sm hover:bg-fuchsia-50 hover:text-customTeal"
                    >
                      Project Beneficiaries
                    </Link>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-400 cursor-not-allowed"
                    >
                      Get a quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}

      <div className="flex flex-col items-center justify-center text-center min-h-screen px-6" >
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold" data-aos="fade-down">
          HEMMA INVESTMENT
        </h1>
        <p className="text-white text-lg sm:text-xl mt-4 max-w-2xl" data-aos="fade-up">
          HEMMA Company is dedicated to restoring degraded lands, improving soil
          health, and promoting sustainable agriculture. Through innovative
          practices and community engagement, we aim to create resilient
          ecosystems, enhance livelihoods, and build a greener, more sustainable
          future for all.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to={'/about-Us'}
            className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-customTeal transition"
          >
            About Us
          </Link>
          <a
            href="#"
            className="bg-white text-customTeal font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-3 flex justify-center items-center space-x-4 sm:space-x-10 w-11/12 sm:w-2/3 lg:w-2/4 max-w-4xl" >
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            10<span className="text-customTeal">+</span>
          </h2>
          <p className="text-gray-500">Years Experience</p>
        </div>
        <div className="border-l border-gray-300 h-12"></div>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            5K<span className="text-customTeal">+</span>
          </h2>
          <p className="text-gray-500">Products</p>
        </div>
        <div className="border-l border-gray-300 h-12"></div>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            5K<span className="text-customTeal">+</span>
          </h2>
          <p className="text-gray-500">Satisfied Clients</p>
        </div>
        <div className="border-l border-gray-300 h-12"></div>
        <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            8<span className="text-customTeal">+</span>
          </h2>
          <p className="text-gray-500">Local Team Members</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
