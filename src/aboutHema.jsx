import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const AboutHemma = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,once:true }); 
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/about1.png')" }}
    >
      <div className="absolute inset-0 bg-customTeal bg-opacity-50"></div>
      <div className="relative text-center" data-aos="fade-down">
        <h1 className="text-white text-4xl font-bold mb-4">ABOUT HEMMA INVESTMENT</h1>
        <div className="flex justify-center">
          <div className="border-b-8 border-white w-full"></div>
        </div>
        <div className="flex justify-center mt-4" data-aos="zoom-in">
          <div className="relative border-l-8 border-white h-80" data-aos="fade-down">
            <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 border-b-4 border-r-4 border-white rotate-45 w-7 h-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHemma;
