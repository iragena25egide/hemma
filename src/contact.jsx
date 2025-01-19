import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
    React.useEffect(() => {
        AOS.init({ duration: 1000 ,once:true});
    }, []);

    return (
        <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto z-0 py-4 sm:py-4">
            <div className="text-center mb-6" data-aos="fade-down">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-customTeal">
                    Contact <span className="text-gray-900">Us</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    We’re here to answer your questions, discuss your projects, and explore ways to collaborate. Reach out to HEMMA Investment today and let’s work together to restore land and nurture sustainable growth!
                </p>
            </div>

            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg w-full max-w-6xl mx-auto" data-aos="fade-down">
                <div className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden" >
                    <img src="../assets/images/contact.jpg" alt="Hands holding soil" className="object-cover w-full h-64 md:h-[513px]" />
                </div>
                <div className="w-full md:w-1/2 p-8 bg-customTeal rounded-b-lg md:rounded-r-lg md:rounded-b-none" >
                    <form className="space-y-6">
                        <div>
                            <label className="block text-white mb-1" htmlFor="full-name">Full name</label>
                            <input 
                                type="text" 
                                id="full-name" 
                                className="w-full p-3 rounded-lg border-0 text-white outline-none bg-transparent ring-1 ring-gray-200 placeholder-white" 
                                placeholder="Enter your full name" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-3 rounded-lg border-0 outline-none bg-transparent text-white ring-1 ring-gray-200 placeholder-white" 
                                placeholder="Enter your email" 
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                className="w-full p-3 rounded-lg border-0 bg-transparent outline-none resize-none text-white ring-1 ring-gray-200 placeholder-white" 
                                placeholder="Enter your message" 
                                rows="5"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-3 bg-white text-customTeal font-bold rounded-full shadow-md"
                        >
                            Send Us
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
