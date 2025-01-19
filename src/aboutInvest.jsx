import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const AboutInvest = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,once:true }); 
  }, []);

  return (
    <div className="bg-gradient-to-b from-green-100 to-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
       
        <div className="mb-12 text-center" data-aos="fade-down">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Hemma Investments</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Hemma Investments is dedicated to reversing land degradation and promoting sustainable agricultural practices. By integrating innovative solutions with community engagement, we strive to create resilient landscapes and sustainable livelihoods.
          </p>
        </div>

        <div className="mb-12" data-aos="fade-down">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{ name: 'John Doe', role: 'Chief Executive Officer' }, { name: 'Jane Smith', role: 'Head of Operations' }, { name: 'Emily Johnson', role: 'Community Engagement Manager' }].map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow text-center" data-aos="flip-down">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12 mt-8 flex flex-col md:flex-row items-center" data-aos="fade-down">
          <div className="md:w-1/2">
            <img
              src="../assets/images/nursery.jpg"
              alt="Restoration Project"
              className="w-full rounded-lg shadow-lg h-auto md:h-80 object-cover"
              data-aos="zoom-in"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 text-center md:text-left" data-aos="fade-down">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Restoration Projects</h2>
            <p className="text-gray-700 leading-relaxed">
              Our restoration projects focus on reversing land degradation through innovative practices like tree planting, soil conservation, and community involvement, aiming to enhance both ecological and economic value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInvest;
