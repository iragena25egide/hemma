import React from 'react';

function ContactUs() {
    return (
        <div className="flex flex-col items-center py-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-customTeal mb-4">Contact Us</h2>
            <p className="text-center text-gray-600 mb-8 max-w-lg">
                We’re here to answer your questions, discuss your projects, and explore ways to collaborate. Reach out to HEMMA Investment today and let’s work together to restore land and nurture sustainable growth!
            </p>
            <div className="flex bg-white rounded-lg shadow-lg w-full max-w-4xl">
                <div className="w-1/2 rounded-l-lg overflow-hidden">
                    <img src="../assets/images/contact.jpg" alt="Hands holding soil" className="object-cover w-full h-full" />
                </div>
                <div className="w-1/2 p-8 bg-customTeal rounded-r-lg">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white mb-1" htmlFor="full-name">Full name</label>
                            <input 
                                type="text" 
                                id="full-name" 
                                className="w-full p-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-green-200" 
                                placeholder="Enter your full name" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-green-200" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="w-full p-3 rounded-lg border-0 text-gray-900 focus:ring-2 focus:ring-green-200" 
                                placeholder="Enter your message" 
                                rows="5"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-white text-green-500 font-bold rounded-lg shadow-md hover:bg-green-100"
                        >
                            Send Us
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
