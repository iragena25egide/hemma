import React from 'react';

const Gallery = () => {
  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-customTeal">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Explore our collection of images showcasing our land restoration projects, community engagements, 
          and sustainable agricultural practices.
        </p>
      </div>

      {/* Gallery Image */}
      <div className="mt-12">
        <img
          src="../assets/images/gallery.png"
          alt="Gallery"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Gallery;
