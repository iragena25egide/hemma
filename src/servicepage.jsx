import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Servicepage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <img
          src="../assets/images/serv.jpg"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-customTeal bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-4" data-aos="fade-down">
            HEMMA INVESTMENT SERVICES
          </h1>
          <p className="text-lg text-white max-w-2xl" data-aos="fade-down">
            Providing high-quality services in tree nursery products, organic compost, and expert consultancy. We are dedicated to sustainable practices and community empowerment.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {/* Row 1: Tree Nursery */}
        <div
          className="bg-gradient-to-b from-green-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row items-center"
          data-aos="fade-up"
        >
          <div className="md:w-1/2">
            <img
              src="../assets/images/nurs.jpg"
              alt="Tree Nursery"
              className="rounded-lg shadow-md w-full h-64 object-cover mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 flex flex-col text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Tree Nursery <span className="text-customTeal">Products</span>
              </h2>
              <p className="text-gray-700 mb-4">
                High-quality seedlings for reforestation, afforestation, and agroforestry projects.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Native species adapted to local environmental conditions.</li>
                <li>Varieties that support biodiversity and ecosystem restoration.</li>
                <li>Seedlings grown using sustainable practices.</li>
              </ul>
            </div>
            <Link
              to="/nurseryTree"
              className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg transition mt-6 mx-auto"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Row 2: Organic Compost */}
        <div
          className="bg-gradient-to-b from-green-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row-reverse items-center"
          data-aos="fade-up"
        >
          <div className="md:w-1/2">
            <img
              src="../assets/images/comp.jpg"
              alt="Organic Compost"
              className="rounded-lg shadow-md w-full h-64 object-cover mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pr-6 flex flex-col text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Organic Compost <span className="text-customTeal">Products</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Nutrient-rich compost to improve soil fertility and support plant growth.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Made from locally sourced organic waste.</li>
                <li>Enriched with essential nutrients and microorganisms.</li>
                <li>Produced using environmentally friendly methods.</li>
              </ul>
            </div>
            <Link
              to="/organic"
              className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg transition mt-6 mx-auto"
            >
              Read More
            </Link>
          </div>
        </div>

        {/* Row 3: Technical Support */}
        <div
          className="bg-gradient-to-b from-green-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col md:flex-row items-center"
          data-aos="fade-up"
        >
          <div className="md:w-1/2">
            <img
              src="../assets/images/tx.jpg"
              alt="Technical Support"
              className="rounded-lg shadow-md w-full h-64 object-cover mb-4 md:mb-0"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 flex flex-col text-center md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Technical Support <span className="text-customTeal">and Consultancy</span>
              </h2>
              <p className="text-gray-700 mb-4">
                Expert advice and support on land restoration projects, including technical guidance and project management.
              </p>
            </div>
            <Link
              to="/technicalAdvice"
              className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg transition mt-6 mx-auto"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
