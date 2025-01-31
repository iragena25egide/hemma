import React, { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Link } from "react-router-dom";


const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-back', 
      once: true, 
    });
  }, []);

  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16">
      <h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 leading-tight"
        data-aos="fade-down"
      >
        Caring For Your <span className="text-customTeal">Land</span>,
        <span className="text-customTeal"> Nurturing Nature</span>, Our Expertise
      </h2>

      <p
        className="text-gray-600 text-center mt-4 max-w-3xl mx-auto"
        data-aos="fade-down"
      >
        HEMMA Company specializes in land restoration and sustainable agriculture, 
        using innovative techniques to improve soil health, boost productivity, and 
        create a greener future.
      </p>

      <div className="mt-10 flex flex-col lg:flex-row w-full gap-8 lg:items-stretch">
        <div className="space-y-8 w-full lg:w-1/2 flex flex-col justify-between">
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1" data-aos="fade-down">
            <div className="flex items-center mb-4">
              <img src="../assets/images/mission.png" width={40} className="mr-4" alt="Mission icon" />
              <h3 className="text-xl font-semibold text-gray-900">
                Our <span className="text-customTeal">Mission</span>
              </h3>
            </div>
            <p className="text-gray-600">
              To create a sustainable future where restored lands, thriving ecosystems, and 
              empowered communities coexist in harmony, contributing to environmental and economic prosperity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex-1" data-aos="fade-down">
            <div className="flex items-center mb-4">
              <img src="../assets/images/vission.png" width={40} alt="Vision icon" className="mr-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Our <span className="text-customTeal">Vision</span>
              </h3>
            </div>
            <p className="text-gray-600">
              To restore degraded lands through innovative reforestation, soil conservation, and sustainable 
              agricultural practices while actively engaging and empowering local communities to achieve 
              lasting ecological and economic benefits.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2" data-aos="fade-down">
          <img
            src="../assets/images/exp.jpg"
            alt="Green Garden Path"
            className="w-full rounded-lg shadow-lg h-[300px] sm:h-[400px] lg:h-[450px] object-cover"
          />
        </div>
      </div>

      <div className="mt-12 bg-customTeal text-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-down">
        <p>
          HEMMA produces and sells tree seedlings for agroforestry and forestry. It also sells 
          fruit tree seedlings. It provides training and technical support to farmers, especially women. 
          It is a Rwandan-based company focused on land restoration and sustainable agriculture. It enhances 
          soil fertility and promotes sustainable agricultural practices. The company seeks to improve 
          environmental health while providing economic benefits to local communities.
        </p>
      </div>

      <div className="mt-6 flex justify-center">
        <Link
          to={'/about-Us'}
          className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-customTeal transition"
          data-aos="fade-down"
        >
          More about us
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
