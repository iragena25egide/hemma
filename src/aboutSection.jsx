import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const AboutContent = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,once:true }); 
  }, []);

  return (
    <div className=" bg-white p-8">
      <div className="container mx-auto">
        <div className=" bg-gradient-to-b from-green-200 to-white rounded-lg  p-8 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-black mb-4" data-aos="fade-down">
            Who are <span className="text-customTeal">we?</span>
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start">
            <div className="lg:w-2/3" data-aos="fade-down">
              <p className="text-gray-700 mb-6 leading-relaxed">
                <span className="font-bold text-customTeal">HEMMA</span> Investment is a Rwanda-based company committed to the restoration of degraded lands, sustainable agriculture, and community empowerment. Established with a vision to address the growing challenges of deforestation, soil erosion, and land degradation, we aim to create sustainable solutions that benefit both the environment and local communities. We believe that land is not only a resource but also a legacy to be nurtured and preserved for future generations. By combining innovative techniques with a deep respect for traditional practices, HEMMA Investment is helping transform Rwanda's landscapes into thriving ecosystems.
              </p>
            </div>
            <div className="lg:w-1/3 lg:pl-8" data-aos="fade-down">
              <img
                src="../assets/images/gree-real-logo.png"
                alt="HEMMA Logo"
                className="rounded-lg shadow-md mx-auto lg:mx-0"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 w-full lg:w-3/3 flex flex-col lg:flex-row justify-between">
  <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:mr-4" data-aos="fade-down">
    <div className="flex items-center mb-6">
      <img src="../assets/images/mission.png" width={50} className="mr-6" alt="Mission icon" />
      <h3 className="text-2xl font-semibold text-gray-900">
        Our <span className="text-customTeal">Mission</span>
      </h3>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To create a sustainable future where restored lands, thriving ecosystems, and empowered communities coexist 
      in harmony, contributing to environmental and economic prosperity.
    </p>
  </div>

  <div className="bg-white p-8 rounded-lg shadow-lg flex-1 lg:ml-4" data-aos="fade-down">
    <div className="flex items-center mb-6">
      <img src="../assets/images/vission.png" width={50} alt="Vision icon" className="mr-6" />
      <h3 className="text-2xl font-semibold text-gray-900">
        Our <span className="text-customTeal">Vision</span>
      </h3>
    </div>
    <p className="text-gray-700 leading-relaxed">
      To restore degraded lands through innovative reforestation, soil conservation, and sustainable agricultural 
      practices while actively engaging and empowering local communities to achieve lasting ecological and economic 
      benefits.
    </p>
  </div>
</div>

      </div>
    </div>
  );
};

export default AboutContent;
