import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const TechnicalSupportConsultancy = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16 px-8">
      <div 
        className="bg-white rounded-lg shadow-lg max-w-7xl w-full overflow-hidden flex flex-col md:flex-row mx-auto" 
        data-aos="fade-down"
      >
        {/* Left Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="../assets/images/tech3.jpeg"
            alt="Technical Support"
            className="w-full h-64 md:h-[900px] object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-t-none"
          
          />
        </div>

        {/* Right Text Section */}
        <div 
          className="w-full md:w-1/2 px-6 py-8 flex flex-col justify-between"
        >
          {/* Header and Subheader */}
          <div>
            <h2 className="text-3xl font-bold text-customTeal mb-4">Technical Support and Consultancy</h2>
            <p className="text-gray-600 text-lg mb-8">
              At our firm, we provide specialized technical support and consultancy for land restoration projects. Our experienced team of experts offers in-depth knowledge and guidance in restoring ecosystems, rehabilitating degraded lands, and implementing sustainable practices to achieve long-term environmental benefits. 
              <br /><br />
              We understand the unique challenges each land restoration project presents and offer tailored solutions to meet the specific needs of your project. From the initial planning phase to project execution, we are committed to delivering high-quality services that ensure successful outcomes. Our consultants are equipped with the skills and expertise to oversee the entire restoration process, ensuring that each phase is carried out efficiently and effectively.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Expert guidance on land restoration strategies, including soil rehabilitation, water conservation, and biodiversity enhancement.</li>
            <li>Project management support to ensure smooth execution, from site assessment to post-restoration monitoring.</li>
            <li>Customized solutions tailored to your project needs, with a focus on sustainability and ecological balance.</li>
            <li>Access to a network of industry professionals, including environmental consultants, engineers, and project managers.</li>
            <li>Comprehensive technical reports and assessments to track progress and ensure compliance with environmental standards.</li>
            <li>Long-term project support with ongoing consultation and monitoring to ensure project sustainability and success.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSupportConsultancy;
