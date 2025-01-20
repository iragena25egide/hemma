import React, { useEffect } from 'react';
import { FaTree, FaLeaf, FaTools, FaChartLine, FaUserShield, FaHandsHelping } from 'react-icons/fa';
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
      <div className="py-12 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Tree Nursery Products */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between px-6" data-aos="fade-down">
          <div className="md:w-1/2 flex flex-col justify-between h-full mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tree Nursery Products</h2>
            <p className="text-gray-700 mb-4">
              We provide high-quality seedlings of various tree species, including indigenous and fast-growing trees, ideal for reforestation, afforestation, and agroforestry projects.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Native species adapted to local environmental conditions.</li>
              <li>Varieties that support biodiversity and ecosystem restoration.</li>
              <li>Seedlings grown using sustainable practices.</li>
            </ul>
            <Link
              to="/nurseryTree"
              className="bg-customTeal text-white font-medium px-6 w-1/2 mx-auto text-center py-3 rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              Read More
            </Link>
          </div>
          <div className="md:w-1/2 px-4">
            <img src="../assets/images/nurs.jpg" alt="Tree Nursery" className="rounded-lg shadow-lg w-full h-auto md:h-[300px] object-cover" />
          </div>
        </div>

        {/* Organic Compost Products */}
        <div className="mb-12 flex flex-col md:flex-row-reverse items-center justify-between px-6" data-aos="fade-down">
          <div className="md:w-1/2 flex flex-col justify-between h-full mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Organic Compost Products</h2>
            <p className="text-gray-700 mb-4">
              Our nutrient-rich compost, made from locally sourced organic materials, is perfect for improving soil fertility and supporting plant growth.
            </p>
            <ul className="list-disc pl-5 text-gray-700 mb-4">
              <li>Made from locally sourced organic waste.</li>
              <li>Enriched with essential nutrients and beneficial microorganisms.</li>
              <li>Produced using environmentally friendly methods.</li>
            </ul>
            <Link
              to="/organic"
              className="bg-customTeal text-white font-medium px-6 py-3 w-1/2 mx-auto text-center rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              Read More
            </Link>
          </div>
          <div className="md:w-1/2 px-4">
            <img src="../assets/images/comp.jpg" alt="Organic Compost" className="rounded-lg shadow-lg w-full h-auto md:h-[300px] object-cover" />
          </div>
        </div>

        {/* Technical Support and Consultancy */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between px-6" data-aos="fade-down">
          <div className="md:w-1/2 flex flex-col justify-between h-full mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Support and Consultancy</h2>
            <p className="text-gray-700 mb-4">
              We offer expert advice and support on land restoration projects, providing technical guidance and project management to ensure successful outcomes.
            </p>
            <Link
              to="/technicalAdvice"
              className="bg-customTeal text-white font-medium px-6 py-3 w-1/2 mx-auto text-center rounded-full shadow-lg hover:bg-gray-700 transition"
            >
              Read More
            </Link>
          </div>
          <div className="md:w-1/2 px-4">
            <img src="../assets/images/tx.jpg" alt="Technical Support" className="rounded-lg shadow-lg w-full h-auto md:h-[300px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
