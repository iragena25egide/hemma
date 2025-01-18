import React from 'react';

const AboutHemma = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/about1.png')" }}
    >
      <div className="absolute inset-0 bg-green-700 bg-opacity-70"></div>
      <div className="relative text-center">
        <h1 className="text-white text-4xl font-bold mb-4">About HEMMA Investment</h1>
        <div className="flex justify-center">
          <div className="border-b-2 border-white w-1/2"></div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="border-l-2 border-white h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHemma;
