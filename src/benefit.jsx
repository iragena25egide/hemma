import React from 'react';

const Benefits = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url('../assets/images/crop-rotation.jpeg')` }}>
      <div className="absolute inset-0 bg-customTeal bg-opacity-30 flex items-center justify-center">
        <div className="text-center text-white p-6 max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">THE BENEFITS OF HEMMA</h1>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="inline-block bg-customTeal rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
              Boost your agricultural Production.
            </li>
            <li className="flex items-center">
              <span className="inline-block bg-green-500 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
             Enjoy our Product and our helpful Advice.
            </li>
            <li className="flex items-center">
              <span className="inline-block bg-green-500 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </span>
              Compatible in modern Technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
