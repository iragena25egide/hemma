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
      <header className="absolute top-0 left-0 w-full p-4 sm:p-6 flex justify-between items-center bg-opacity-50 border-b border-gray-300" >
        <div className="flex w-[20%] sm:w-[10%] lg:w-[8%]">
          <img src="../assets/images/logo.png" alt="Logo" className="w-full" />
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
            HOME
          </a>
          <Link to={"/about-Us"} className="font-medium hover:text-gray-300">
            ABOUT US
          </Link>
          <Link to={"/services"} className="font-medium hover:text-gray-300">
            SERVICES
          </Link>
          <Link to={"/team"} className="font-medium hover:text-gray-300">
            TEAM
          </Link>
          <div className="relative group">
            <button className="font-medium flex items-center hover:text-gray-300">
              More <FaAngleDown className="ml-1" />
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

        <Link
  to={"/contact"}
  className="bg-white text-customTeal font-medium px-5 py-2 rounded-full shadow-lg hover:bg-gray-200 transition hidden sm:block"
>
  Contact Us
</Link>

      </header>

      {showMobileMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-50 flex flex-col items-center py-6">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            ✕
          </button>
          <nav className="flex flex-col items-center space-y-4 text-white text-xl">
            <a href="#" className="font-medium hover:text-gray-300">
              HOME
            </a>
            <Link to={"/about-Us"} className="font-medium hover:text-gray-300">
              ABOUT US
            </Link>
            <Link to={"/services"} className="font-medium hover:text-gray-300">
              SERVICES
            </Link>
            <Link to={"/team"} className="font-medium hover:text-gray-300">
              TEAM
            </Link>
            <div className="relative group">
              <button className="font-medium flex items-center hover:text-gray-300">
                More <FaAngleDown className="ml-1" />
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
          <a
            href="#"
            className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-customTeal transition"
          >
            About Us
          </a>
          <a
            href="#"
            className="bg-white text-customTeal font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
          >
            Learn More
          </a>
        </div>
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

      <div className="fixed bottom-5 right-5 sm:block">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-customTeal text-white p-4 rounded-full shadow-lg hover:bg-customTeal transition sm:block"
        >
          <FaWhatsapp size={22} />
        </button>

        {showChat && (
  <div
    className="fixed bottom-16 right-5 bg-white shadow-lg rounded-lg w-full sm:w-[500px]"
    style={{ zIndex: 1050 }}
  >
    <div className="flex items-center justify-between bg-customTeal p-4 rounded-t-lg">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-2">
          <img
            src="../assets/images/logo.png" 
            alt="Hemma Investment Logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
        <div className="text-white font-bold">Hemma Investment</div>
      </div>
      <button onClick={() => setShowChat(false)} className="text-white">
        ✕
      </button>
    </div>
    <div
      className="p-4 rounded-b-lg"
      style={{
        backgroundImage: "url('../assets/images/whatsapp-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white p-4 rounded-lg shadow mb-4 w-3/4 ml-4">
        <p className="text-gray-800 font-medium">
          Hemma Investment Li...
        </p>
        <p className="text-gray-600">Hi there 👋</p>
        <p className="text-gray-600">How can we help you?</p>
      </div>
      <div className="bg-white rounded-full flex items-center px-4 py-2 shadow-md">
        <input
          type="text"
          className="w-full border-none focus:outline-none"
          placeholder="Write a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-customTeal rounded-full p-2"
        >
          <IoSend className="text-white" />
        </button>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default LandingPage;
