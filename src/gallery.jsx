import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our <span className="text-green-600">Gallery</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Explore our projects showcasing successful land restoration, sustainable agriculture, and community-driven initiatives. See how we transform landscapes and create lasting environmental impact.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 row-span-2">
          <img src="../assets/images/1.jpg" alt="Gallery Image 1" className="w-full h-[450px] object-cover rounded-lg" />
        </div>
        <div className="grid grid-cols-2 gap-4">
        <img src="../assets/images/5.jpg" alt="Gallery Image 5" className="w-full h-full object-cover rounded-lg" />
          <img src="../assets/images/2.jpg" alt="Gallery Image 2" className="w-full h-full object-cover rounded-lg" />
          <img src="../assets/images/3.jpg" alt="Gallery Image 3" className="w-[900px] h-full object-cover rounded-lg" />
         

        </div>
        <div className="grid grid-cols-1 gap-4">
          <img src="../assets/images/4.jpg" alt="Gallery Image 4" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
