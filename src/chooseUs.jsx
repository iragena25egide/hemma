import React from 'react';
import { IoCheckbox } from "react-icons/io5";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-8 md:p-16 max-w-screen-xl mx-auto border rounded-lg">
     
      <div className="flex-shrink-0 w-full md:w-1/2">
        <img
          src="../assets/images/why.jpg" 
          alt="Young Plants"
          className="rounded-xl w-full object-cover"
        />
      </div>

      
      <div className="mt-8 md:mt-0 md:ml-12 w-full md:w-1/2">
        <h2 className="text-4xl font-semibold text-gray-800">
          They <span className="text-customTeal">Choose Us</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Clients choose HEMMA Company for our expertise, sustainable solutions,
          and community-focused approach to land restoration and agriculture.
        </p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-center">

              <IoCheckbox  className='text-customTeal' size={24}/>

            <span className="ml-4 text-gray-800 font-medium text-lg">
              Expertise in Land Restoration
            </span>
          </li>
          <li className="flex items-center">
           
              <IoCheckbox className='text-customTeal' size={24}/>
            
            <span className="ml-4 text-gray-800 font-medium text-lg">
              Community-Centric Approach
            </span>
          </li>
          <li className="flex items-center">

              <IoCheckbox className='text-customTeal' size={24}/>

            <span className="ml-4 text-gray-800 font-medium text-lg">
              Sustainable Solutions
            </span>
          </li>
          <li className="flex items-center">

             <IoCheckbox className='text-customTeal' size={24}/>
             
            <span className="ml-4 text-gray-800 font-medium text-lg">
              Commitment to Biodiversity
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
