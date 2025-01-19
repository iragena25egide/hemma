import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const TreeNurseryProducts = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-6">
      <div 
        className="bg-white rounded-lg shadow-lg max-w-6xl w-full overflow-hidden flex flex-col md:flex-row" 
        data-aos="fade-down"
      >
      
        <div className="w-full md:w-1/2">
          <img
            src="../assets/images/nurs.jpg"
            alt="Tree Nursery"
            className="w-full h-64 md:h-[830px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
           
          />
        </div>

        {/* Right Text Section */}
        <div 
          className="w-full md:w-1/2 px-6 py-8 flex flex-col justify-between"
         
        >
          {/* Header and Subheader */}
          <div>
            <h2 className="text-3xl font-bold text-customTeal mb-4">Tree Nursery Products</h2>
            <p className="text-gray-600 text-lg mb-8">
              At our tree nursery, we offer a variety of high-quality seedlings that cater to a wide range of planting needs. Our selection includes indigenous species that are well-adapted to local environmental conditions, as well as fast-growing varieties that can be utilized in reforestation, afforestation, and agroforestry projects.
              <br /><br />
              We take pride in growing our seedlings using sustainable practices that promote biodiversity and environmental restoration. Whether you are working on a large-scale restoration project or a small-scale agroforestry initiative, our trees are cultivated to thrive in diverse climates and soil types, making them a perfect choice for your project.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Native species adapted to local environmental conditions for increased survival rates.</li>
            <li>Varieties that support biodiversity, improve soil quality, and restore ecosystems.</li>
            <li>Seedlings grown using sustainable practices that minimize environmental impact.</li>
            <li>Fast-growing trees ideal for creating shelterbelts, windbreaks, or erosion control.</li>
            <li>Varieties suited for urban greening, forestry projects, and carbon sequestration.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreeNurseryProducts;
