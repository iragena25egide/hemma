import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const AboutInvest = () => {
  useEffect(() => {
    AOS.init({ duration: 2000,once:true }); 
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-green-100 text-white">
  <div
  className="md:w-1/2 p-8 bg-cover bg-center relative text-white"
  style={{ backgroundImage: "url('../assets/images/main.jpg')" }}
>
  <div className="absolute inset-0 bg-customTeal bg-opacity-40"></div>
  <div className="relative z-10">
    <h2 className="text-4xl font-bold">Our</h2>
    <h3 className="text-3xl font-semibold mt-4">Sustainability</h3>
    <p className="mt-4">
      Creating solutions that ensure long-term environmental, social, and economic balance.
    </p>
    <h3 className="text-3xl font-semibold mt-6">Environmental Stewardship</h3>
    <p className="mt-4">
      Actively involving local communities in decision-making and implementation to promote ownership and lasting results.
    </p>
  </div>
</div>


    <div className="md:w-1/2 bg-customGreen p-8">
      <h2 className="text-4xl font-bold text-center">Values</h2>
      <div className="mt-8 flex flex-col items-center">
        <img src="../assets/images/values.jpg" alt="Innovation" className="w-24 h-24 rounded-full"/>
        <h3 className="text-3xl font-semibold mt-4">Innovation</h3>
        <p className="mt-4 text-center">
          Leveraging cutting-edge practices to maximize our impact.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center">
        <img src="../assets/images/comm.jpg" alt="Community Empowerment" className="w-24 h-24"/>
        <h3 className="text-3xl font-semibold mt-4">Community Empowerment</h3>
        <p className="mt-4 text-center">
          Working tirelessly to protect and rejuvenate natural ecosystems.
        </p>
      </div>
    </div>
  </div>
  );
};

export default AboutInvest;
