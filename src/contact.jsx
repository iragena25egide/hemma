import React from 'react';

function ContactUs() {
    return (
        <div className="flex flex-col items-center py-12 bg-gray-50">
            <h2 className="text-4xl font-bold text-customTeal mb-4">Contact<span>Us</span></h2>
            <p className="text-center text-gray-600 mb-8 max-w-lg">
                We’re here to answer your questions, discuss your projects, and explore ways to collaborate. Reach out to HEMMA Investment today and let’s work together to restore land and nurture sustainable growth!
            </p>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-5xl">
                <div className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    <img src="../assets/images/contact.jpg" alt="Hands holding soil" className="object-cover w-full h-64 md:h-full" />
                </div>
                <div className="w-full md:w-1/2 p-8 bg-customTeal rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white mb-1" htmlFor="full-name">Full name</label>
                            <input 
                                type="text" 
                                id="full-name" 
                                className="w-full p-3 rounded-lg border-0 text-gray-900 outline-none bg-transparent ring-1 ring-gray-200" 
                                placeholder="Enter your full name" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 rounded-lg border-0 outline-none bg-transparent text-gray-900 ring-1 ring-gray-200" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="w-full p-3 rounded-lg border-0 bg-transparent outline-none resize-none text-gray-900 ring-1 ring-gray-200" 
                                placeholder="Enter your message" 
                                rows="5"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-gray-200 text-customTeal font-bold rounded-full shadow-md "
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
