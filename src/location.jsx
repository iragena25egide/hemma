import React from 'react';

const Location = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('/../assets/images/coperative.jpeg')` }}>
      <div className="absolute inset-0 bg-customTeal bg-opacity-20 flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-lg">
          <h1 className="text-4xl font-bold mb-4">HEMMA LOCATION</h1>
          <p className="text-lg mb-6">
           Kigali,Rwanda
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Location;
