import React from 'react';

const AboutContent = () => {
  return (
    <div className="bg-gradient-to-b from-green-100 to-white p-8">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Who are <span className="text-teal-500">we?</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-2/3">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="font-bold text-green-600">HEMMA</span> Investment is a Rwanda-based company committed to the restoration of degraded lands, sustainable agriculture, and community empowerment. Established with a vision to address the growing challenges of deforestation, soil erosion, and land degradation, we aim to create sustainable solutions that benefit both the environment and local communities. We believe that land is not only a resource but also a legacy to be nurtured and preserved for future generations. By combining innovative techniques with a deep respect for traditional practices, HEMMA Investment is helping transform Rwanda's landscapes into thriving ecosystems.
              </p>
            </div>
            <div className="lg:w-1/3 lg:pl-8">
              <img
                src="../assets/images/logo.png"
                alt="HEMMA Logo"
                className="rounded-lg shadow-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-green-600 text-3xl mb-2">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3 className="text-xl font-bold text-customTeal mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To create a sustainable future where restored lands, thriving ecosystems, and empowered communities coexist in harmony, contributing to environmental and economic prosperity.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-teal-500 text-3xl mb-2">
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="text-xl font-bold text-customTeal mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To restore degraded lands through innovative reforestation, soil conservation, and sustainable agricultural practices while actively engaging and empowering local communities to achieve lasting ecological and economic benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
