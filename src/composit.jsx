import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const OrganicCompostProducts = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-16 px-8">
      <div 
        className="bg-white rounded-lg shadow-lg max-w-7xl w-full overflow-hidden flex flex-col md:flex-row mx-auto" 
        data-aos="fade-down"
      >
       
        <div className="w-full md:w-1/2">
          <img
            src="../assets/images/comp.jpg"
            alt="Organic Compost"
            className="w-full h-64 md:h-[732px] object-cover object-center rounded-t-lg md:rounded-l-lg md:rounded-t-none"
           
          />
        </div>

       
        <div 
          className="w-full md:w-1/2 px-6 py-8 flex flex-col justify-between"
        
        >
          
          <div>
            <h2 className="text-3xl font-bold text-customTeal mb-4">Organic Compost Products</h2>
            <p className="text-gray-600 text-lg mb-6">
              Our nutrient-rich compost is made from locally sourced organic materials such as plant residues, food scraps, and agricultural by-products. This compost is carefully processed to create a rich, dark humus that improves soil structure, increases moisture retention, and provides essential nutrients for healthy plant growth.
              <br /><br />
              The compost is ideal for a wide range of applications, from enhancing garden soil to improving agricultural productivity. By using our compost, you contribute to reducing organic waste, promoting sustainable practices, and enriching the environment.
            </p>
          </div>

          {/* Bullet Points */}
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
            <li>Made from locally sourced organic waste, reducing the environmental footprint.</li>
            <li>Enriched with essential nutrients such as nitrogen, phosphorus, and potassium to promote plant health.</li>
            <li>Produced using environmentally friendly methods that minimize carbon emissions.</li>
            <li>Improves soil structure, promotes healthy root development, and enhances moisture retention.</li>
            <li>Supports sustainable farming and gardening practices by reducing the need for chemical fertilizers.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrganicCompostProducts;
