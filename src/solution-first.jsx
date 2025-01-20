import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const SolutionFirst = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,once:true }); 
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/solution.jpeg')" }}
    >
      <div className="absolute inset-0 bg-customTeal bg-opacity-50"></div>
      <div className="relative text-center" data-aos="fade-down">
      <h1 className="text-5xl font-semibold mb-4 text-white" style={{marginTop:'-100px'}}>Possible Solutions for Land Restoration</h1>
        <p className="text-xl text-white" style={{maxWidth:'700px',marginLeft:'80px'}}>Discover innovative approaches to improve the land and restore its natural balance. Empower communities and farmers for a sustainable future.</p>
          
        </div>
      </div>
  );
};

export default SolutionFirst;
