import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutInvest = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-green-100 text-white">
      {/* Left section with background image */}
      <div
        className="md:w-1/2 w-full p-8 bg-cover bg-center relative text-white"
        style={{ backgroundImage: "url('../assets/images/main.jpg')" }}
      >
        {/* Overlay to darken background */}
        <div className="absolute inset-0 bg-customTeal bg-opacity-40"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold text-center">Our</h2>
          <h3 className="text-3xl md:text-5xl font-semibold mt-6 text-center">Sustainability</h3>
          <p
            className="mt-6 leading-relaxed text-center text-lg md:text-xl max-w-full md:max-w-2xl mx-auto"
          >
            Creating solutions that ensure long-term environmental, social, and economic balance.
          </p>
          <h3 className="text-3xl md:text-5xl font-semibold mt-12 text-center">
            Environmental Stewardship
          </h3>
          <p
            className="mt-3 leading-relaxed text-center text-lg md:text-xl max-w-full md:max-w-2xl mx-auto"
          >
            Actively involving local communities in decision-making and implementation to promote ownership and lasting results.
          </p>
        </div>
      </div>

      {/* Right section with values */}
      <div className="md:w-1/2 w-full bg-customGreen p-6 md:p-8 flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-customPurple">Values</h2>

        {/* Innovation section */}
        <div className="mt-8 flex flex-col items-center text-black">
          <img
            src="../assets/images/values.jpg"
            alt="Innovation"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full"
          />
          <h3 className="text-2xl md:text-4xl font-semibold mt-4">Innovation</h3>
          <p className="mt-4 text-center leading-relaxed text-sm md:text-base">
            Leveraging cutting-edge practices to maximize our impact.
          </p>
        </div>

        {/* Community Empowerment section */}
        <div className="mt-8 flex flex-col items-center text-black">
          <img
            src="../assets/images/comm.jpg"
            alt="Community Empowerment"
            className="w-full h-auto"
            style={{
              maxWidth: '100%',
              borderRadius: '10px',
            }}
          />
          <h3 className="text-2xl md:text-4xl font-semibold mt-4">
            Community Empowerment
          </h3>
          <p className="mt-4 text-center leading-relaxed text-sm md:text-base">
            Working tirelessly to protect and rejuvenate natural ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInvest;
