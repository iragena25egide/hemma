import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const ContactUsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url('contact-hero.jpg')` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white max-w-2xl">
            We are here to assist you with any inquiries or support you may need.
            <br /> Reach out to us via email, phone, or our social media channels.
            <br /> Our team is ready to help and ensure you have the best experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
