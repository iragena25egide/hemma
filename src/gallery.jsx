import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-out-back', // Easing function
      once: true, // Animate only once
    });
  }, []);

  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-customTeal">Gallery</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Explore our collection of images showcasing our land restoration projects, community engagements, 
          and sustainable agricultural practices.
        </p>
      </div>

     <div className='grid grid-cols-3'>
        <div className='flex' data-aos="fade-down">
            <img src="../assets/images/1.jpg" alt="" />
        </div>
        <div className='flex flex-col'>
        
        <div className='grid grid-cols-2 h-1/2' data-aos="fade-down">
            <img src='../assets/images/5.jpg' className='h-full' />
            <img src='../assets/images/2.jpg' className='h-full'/>
        </div>
        <div data-aos="fade-up">
        <img src="../assets/images/3.jpg" alt="" />
        </div>
        </div>
        <div className='flex' data-aos="fade-up">
        <img src="../assets/images/4.jpg" alt="" />
        </div>
     </div>
    </section>
  );
};

export default Gallery;
