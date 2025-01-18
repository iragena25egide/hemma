import React from "react";

const AboutSection = () => {
  return (
    <section className="max-w-5xl px-20 mx-auto py-16">
     
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 leading-tight">
        Caring For Your <span className="text-customTeal">Land</span>,
        <span className="text-customTeal">Nurturing Nature</span>, Our Expertise
      </h2>
      
      
      <p className="text-gray-600 text-center mt-4 max-w-2xl mx-auto">
        HEMMA Company specializes in land restoration and sustainable agriculture, 
        using innovative techniques to improve soil health, boost productivity, and 
        create a greener future.
      </p>

      
      <div className="mt-10 flex w-full gap-6 justify-between items-center">
       
        <div className="space-y-6 w-1/2">
          
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start ">
            <div className="mr-4">
              <span className="text-customTeal text-4xl">⚙️</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our <span className="text-customTeal">Mission</span></h3>
              <p className="text-gray-600 mt-2">
                To create a sustainable future where restored lands, thriving ecosystems, and 
                empowered communities coexist in harmony, contributing to environmental and economic prosperity.
              </p>
            </div>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-start">
            <div className="mr-4">
              <span className="text-green-500 text-4xl">🔄</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Our <span className="text-green-500">Vision</span></h3>
              <p className="text-gray-600 mt-2">
                To restore degraded lands through innovative reforestation, soil conservation, and sustainable 
                agricultural practices while actively engaging and empowering local communities to achieve 
                lasting ecological and economic benefits.
              </p>
            </div>
          </div>
        </div>

        
        <div className="w-1/2">
          <img
            src="../assets/images/exp.jpg"
            alt="Green Garden Path"
            className="w-full rounded-lg shadow-lg h-[450px]"
          />
        </div>
      </div>

      
      <div className="mt-12 bg-customTeal text-white p-6 rounded-lg shadow-lg text-center">
        <p>
          HEMMA produces and sells tree seedlings for agroforestry and forestry. It also sells 
          fruit tree seedlings. It provides training and technical support to farmers, especially women. 
          It is a Rwandan-based company focused on land restoration and sustainable agriculture. It enhances 
          soil fertility and promotes sustainable agricultural practices. The company seeks to improve 
          environmental health while providing economic benefits to local communities.
        </p>
      </div>

     
      <div className="mt-6 flex justify-center">
        <a
          href="#"
          className="bg-customTeal text-white font-medium px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          More about us
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
