import React from 'react';

const ServicesSection = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Our Land Restoration & Sustainability <span className="text-customTeal">Services</span>
        </h2>
        <p className="text-gray-600 mt-4">
          At HEMMA Company, we specialize in transforming degraded lands into thriving ecosystems. Our
          services focus on restoring soil health, enhancing biodiversity, and promoting sustainable
          agricultural practices for a greener, more productive future.
        </p>
      </div>

      {/* Services Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {/* Card 1 */}
        <div
          className="bg-customTeal hover:bg-customTeal transition-all p-6 rounded-lg shadow-md text-center"
        >
          <div className="flex items-center justify-center text-customTeal mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6m2 8.5H7c-.828 0-1.5-.672-1.5-1.5V17a7 7 0 1114 0v2c0 .828-.672 1.5-1.5 1.5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Organic Compost Products</h3>
          <p className="text-gray-600 mt-2">
            Nutrient-rich compost made from locally sourced organic waste.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Features: Enriched with nutrients and microorganisms, eco-friendly production.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white hover:bg-gray-100 transition-all p-6 rounded-lg shadow-md text-center"
        >
          <div className="flex items-center justify-center text-customTeal mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16h8m-4-9v13M12 2a7 7 0 00-7 7v4a2 2 0 002 2h10a2 2 0 002-2V9a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Tree Nursery Products</h3>
          <p className="text-gray-600 mt-2">
            High-quality seedlings for reforestation, afforestation, and agroforestry.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Features: Native species, biodiversity support, sustainable growth.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white hover:bg-gray-100 transition-all p-6 rounded-lg shadow-md text-center"
        >
          <div className="flex items-center justify-center text-customTeal mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Technical Support and Consultancy</h3>
          <p className="text-gray-600 mt-2">
            Expert guidance for land restoration projects, including technical and project management support.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-12 text-center">
        <button
          className="bg-customTeal hover:bg-customTeal -700 text-white py-6 px-10 rounded-full shadow-lg transition-all"
        >
          More on Services
        </button>
      </div>
    </div>
  );
};

export default ServicesSection;
