import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const ServicesSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our Land Restoration & Sustainability <span className="text-customTeal">Services</span>
        </h2>
        <p className="text-gray-600 mt-4">
          At HEMMA Company, we specialize in transforming degraded lands into thriving ecosystems. Our
          services focus on restoring soil health, enhancing biodiversity, and promoting sustainable
          agricultural practices for a greener, more productive future.
        </p>
      </div>

      {/* Services Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center group" data-aos="fade-down">
          <div className="flex items-center justify-center mb-4 relative h-20 w-20">
            {/* Original image */}
            <img
              src="../assets/images/organic.png"
              alt="Organic Compost"
              className="transition-all transform absolute h-full w-full group-hover:opacity-0"
            />
            {/* White version image */}
            <img
              src="../assets/images/organic-white.png"
              alt="Organic Compost White"
              className="transition-all transform absolute h-full w-full opacity-0 group-hover:opacity-100"
            />
          </div>
          <h3 className="text-xl font-semibold">Organic Compost Products</h3>
          <p className="mt-2">
            Nutrient-rich compost made from locally sourced organic waste.
          </p>
          <p className="text-sm mt-1">
            Features: Enriched with nutrients and microorganisms, eco-friendly production.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center group" data-aos="fade-down">
          <div className="flex items-center justify-center mb-4 relative h-20 w-20">
            {/* Original image */}
            <img
              src="../assets/images/tree.png"
              alt="Tree Nursery"
              className="transition-all transform absolute h-full w-full group-hover:opacity-0"
            />
            {/* White version image */}
            <img
              src="../assets/images/tree-white.png"
              alt="Tree Nursery White"
              className="transition-all transform absolute h-full w-full opacity-0 group-hover:opacity-100"
            />
          </div>
          <h3 className="text-xl font-semibold">Tree Nursery Products</h3>
          <p className="mt-2">
            High-quality seedlings for reforestation, afforestation, and agroforestry.
          </p>
          <p className="text-sm mt-1">
            Features: Native species, biodiversity support, sustainable growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center group" data-aos="fade-down">
          <div className="flex items-center justify-center mb-4 relative h-20 w-20">
            {/* Original image */}
            <img
              src="../assets/images/technical.png"
              alt="Technical Support"
              className="transition-all transform absolute h-full w-full group-hover:opacity-0"
            />
            {/* White version image */}
            <img
              src="../assets/images/tech-white.png"
              alt="Technical Support White"
              className="transition-all transform absolute h-full w-full opacity-0 group-hover:opacity-100"
            />
          </div>
          <h3 className="text-xl font-semibold">Technical Support and Consultancy</h3>
          <p className="mt-2">
            Expert guidance for land restoration projects, including technical and project management support.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12 text-center" data-aos="fade-down">
        <button
          className="bg-customTeal hover:bg-customTeal text-white py-4 px-8 rounded-full shadow-lg transition-all"
        >
          <Link to={"/services"}>More on Services</Link>
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
