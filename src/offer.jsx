import React from 'react'
import { IoCheckbox } from "react-icons/io5";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Offer = () => {
 React.useEffect(() => {
     AOS.init({
       duration: 2000, 
       easing: 'ease-out-back', 
       once: true, 
     });
   }, []);
 
   return (
     <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
       <div className="flex flex-col lg:flex-row items-center justify-between">
         <div className="w-full lg:w-1/2" data-aos="fade-down">
           <img
             src="../assets/images/why.jpg"
             alt="Young Plants"
             className="rounded-xl w-full object-cover h-[300px] sm:h-[400px] lg:h-[450px]"
           />
         </div>
 
         <div className="mt-8 lg:mt-0 lg:ml-12 w-full lg:w-1/2" data-aos="fade-down">
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
             What We <span className="text-customTeal">Offer</span>
           </h2>
           <p className="text-gray-600 mt-4">
            Our company HEMMA offers different services that help the community like
            sustainable solutions, approach to land restoration and agriculture.
           </p>
 
           <ul className="mt-6 space-y-4">
             <li className="flex items-center" data-aos="fade-down">
               <IoCheckbox className="text-customTeal" size={24} />
               <span className="ml-4 text-gray-800 font-medium text-lg">
                 Expertise in Land Restoration
               </span>
             </li>
             <li className="flex items-center" data-aos="fade-down">
               <IoCheckbox className="text-customTeal" size={24} />
               <span className="ml-4 text-gray-800 font-medium text-lg">
                 Community-Centric Approach
               </span>
             </li>
             <li className="flex items-center" data-aos="fade-down">
               <IoCheckbox className="text-customTeal" size={24} />
               <span className="ml-4 text-gray-800 font-medium text-lg">
                 Sustainable Solutions
               </span>
             </li>
             <li className="flex items-center" data-aos="fade-down">
               <IoCheckbox className="text-customTeal" size={24} />
               <span className="ml-4 text-gray-800 font-medium text-lg">
                 Commitment to Biodiversity
               </span>
             </li>
           </ul>
         </div>
       </div>
     </section>

   )
}

export default Offer