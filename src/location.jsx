import React from 'react';
import 'aos/dist/aos.css';

const Location = () => {
  return (
    <div className="py-16 bg-white">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-customTeal mb-4">Location</h1>
        <p className="text-xl text-gray-700">
          Explore our strategic location in Kigali, Rwanda, where Hemma Investment thrives and makes a significant impact.
        </p>
      </div>

      {/* Main Content - Location Details */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-customTeal" data-aos="fade-down">
        {/* Left Side - Image in Portrait Mode */}
        <div className="flex justify-center items-center" style={{marginLeft:'-50px'}}>
          <img
            src="/../assets/images/map.jpeg" // Replace with your image path
            alt="Location Image"
            className="w-full h-full object-cover rounded-lg" // Ensures the image fits well in the container
          />
        </div>

        {/* Right Side - Address Info */}
        <div className="flex flex-col justify-center items-start text-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-white">HEMMA LOCATION</h1>
          <p className="text-lg mb-6 text-customPurple">Kigali,</p>
          <p className="text-lg mb-6 text-customPurple">Rwanda</p>
          <p className="text-md mb-4 text-customPurple">Postalcode: 00000</p>
          <p className="text-md mb-4 text-white">
            For more details, please feel free to contact us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
