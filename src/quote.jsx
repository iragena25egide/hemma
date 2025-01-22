import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaPhone, } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";


const GetQuote = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-4 py-6 sm:py-12">
      {/* Header Section */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h1 className="text-2xl sm:text-4xl font-bold">
          <span className="text-black">GET</span>{" "}
          <span className="text-teal-500">QUOTE</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto" data-aos="fade-down" data-aos-delay="200">
          Get a quote from Hemma Investment to kickstart your journey toward
          better solutions. Fill in the form, and our team will connect with you
          within 24 hours.
        </p>
      </div>

      {/* Main Container */}
      <div
        className="bg-customTeal text-white p-6 sm:p-8 rounded-lg flex flex-col lg:flex-row gap-8 sm:gap-12 max-w-md sm:max-w-4xl w-full mb-6 sm:mb-12"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {/* Left Section */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold" data-aos="fade-down" data-aos-delay="600">
            Get a quote
          </h1>
          <p className="text-sm" data-aos="fade-down" data-aos-delay="800">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="1000">
          <a href="#" className="text-white text-2xl hover:text-green-200"><FaPhone /></a>
          <span className="material-icons">phone</span>
            <p className="text-sm sm:text-base">+0123 4567 8910</p>
          </div>
          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="1200">
          <a href="#" className="text-white text-2xl hover:text-green-200"><FaTwitter /></a>
          {/* <span className="material-icons">email</span> */}
            <p className="text-sm sm:text-base">hello@flowbase.com</p>
          </div>
          <div className="flex items-center gap-3" data-aos="fade-down" data-aos-delay="1400">
          <a href="#" className="text-white text-2xl hover:text-green-200"><FaLocationDot/></a>
            <p className="text-sm sm:text-base">102 Street 2714 Don</p>
          </div>
          <div>
                <h3 className="text-white text-lg font-semibold">Follow Us</h3>
                <div className="flex mt-4 space-x-4">
                <a href="#" className="text-white text-2xl hover:text-green-200"><FaTwitter /></a>
                <a href="#" className="text-white text-2xl hover:text-green-200"><FaInstagram /></a>
                <a href="#" className="text-white text-2xl hover:text-green-200"><FaFacebook /></a>
                <a href="#" className="text-white text-2xl hover:text-green-200"><FaYoutube /></a>
                </div>
                </div>
        </div>

        {/* Right Section */}
        <div className="bg-customTeal p-6 rounded-lg w-full lg:w-1/2 shadow-lg" data-aos="fade-down" data-aos-delay="1800">
          <form className="flex flex-col gap-4">
            {/* Input: Your Name */}
            <div>
              <label className="text-sm font-bold" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-white bg-opacity-0 text-white focus:outline-none focus:border-white"
              />
            </div>
            {/* Input: Email */}
            <div>
              <label className="text-sm font-bold" htmlFor="email">
                Mail
              </label>
              <input
                id="email"
                type="email"
                placeholder="Mail"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-white bg-opacity-0 text-white focus:outline-none focus:border-white"
              />
            </div>
            {/* Select: Service */}
            <div>
              <label className="text-sm font-bold" htmlFor="service">
                Select a Service
              </label>
              <select
                id="service"
                className="mt-1 p-3 border border-gray-300 rounded-md w-full bg-customTeal text-white focus:outline-none focus:border-white"
              >
                <option value="" className="bg-customTeal text-white">
                  Select Services
                </option>
                <option
                  value="consultation"
                  className="bg-customTeal text-white hover:bg-white hover:text-customTeal"
                >
                  Tree Nursery Products
                </option>
                <option
                  value="development"
                  className="bg-customTeal text-white hover:bg-white hover:text-customTeal"
                >
                  Organic Compost Products
                </option>
                <option
                  value="support"
                  className="bg-customTeal text-white hover:bg-white hover:text-customTeal"
                >
                  Technical Support and Consultancy
                </option>
              </select>
            </div>
            {/* Textarea: Message */}
            <div>
              <label className="text-sm font-bold text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="mt-1 p-3 border text-white border-gray-300 rounded-md w-full h-24 sm:h-32 resize-none bg-customTeal bg-opacity-0 text-gray-800 focus:outline-none focus:border-white"
              ></textarea>
            </div>
            {/* Button: Send Message */}
            <button
              type="submit"
              className="bg-customTeal text-white py-3 border border-gray-300 rounded-md hover:bg-opacity-0"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
