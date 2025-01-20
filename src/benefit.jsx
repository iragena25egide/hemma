import React from 'react';
import 'aos/dist/aos.css';

const Benefits = () => {
  return (
    <div>
      {/* Main Background Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('../assets/images/ben.jpeg')` }}>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-customTeal bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white p-6 max-w-2xl">
            {/* Project Title and Description */}
            <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Project Beneficiaries</h1>
            <p className="text-xl mb-8" data-aos="fade-down">
              Hemma’s projects bring real value to our beneficiaries by promoting sustainable agriculture and enhancing livelihoods.
              We work with local communities to improve food security, restore degraded land, and create economic opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Benefits Cards Section */}
      <div className="py-16 bg-gray-50" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                title: (
                  <>
                    <span className="text-customTeal">Boost  your </span>agricultural production
                  </>
                ),
                description: 
                  'Our projects empower farmers to increase their yields by introducing modern, sustainable agricultural practices.',
                image: '../assets/images/bost.jpeg', // Replace with your image path
              },
              {
                title: (
                  <>
                    <span className="text-customTeal">Enjoy our product</span>  and helpful advice
                  </>
                ),
                description: 
                  'We provide tailored solutions and expert advice to ensure long-term success in farming and land management.',
                image: '../assets/images/enjoy.jpeg', // Replace with your image path
              },
              {
                title: (
                  <>
                    <span className="text-customTeal">Compatible with</span>  modern technology
                  </>
                ),
                description: 
                  'Our initiatives are aligned with the latest agricultural technologies, integrating them for higher efficiency and sustainability.',
                image: '../assets/images/compatible.jpeg', // Replace with your image path
              },
            ].map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer">
                {/* Large Image */}
                <img src={card.image} alt={card.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-700">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
