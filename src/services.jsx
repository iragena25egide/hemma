import React from 'react';

const ServicesSection = () => {
  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
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
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="../assets/images/organic.png" width={80} alt="Organic Compost" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-white">Organic Compost Products</h3>
          <p className="text-gray-600 hover:text-white mt-2">
            Nutrient-rich compost made from locally sourced organic waste.
          </p>
          <p className="text-sm text-gray-500 hover:text-white mt-1">
            Features: Enriched with nutrients and microorganisms, eco-friendly production.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="../assets/images/tree.png" width={80} alt="Tree Nursery" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-white">Tree Nursery Products</h3>
          <p className="text-gray-600 hover:text-white mt-2">
            High-quality seedlings for reforestation, afforestation, and agroforestry.
          </p>
          <p className="text-sm text-gray-500 hover:text-white mt-1">
            Features: Native species, biodiversity support, sustainable growth.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white hover:bg-customTeal hover:text-white transition-all p-6 rounded-lg shadow-md text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="../assets/images/technical.png" width={80} alt="Technical Support" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 hover:text-white">Technical Support and Consultancy</h3>
          <p className="text-gray-600 hover:text-white mt-2">
            Expert guidance for land restoration projects, including technical and project management support.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12 text-center">
        <button
          className="bg-customTeal hover:bg-green-700 text-white py-4 px-8 rounded-full shadow-lg transition-all"
        >
          More on Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
