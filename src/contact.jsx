import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formStatus, setFormStatus] = useState('');

    React.useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                access_key: '610649f2-45fc-45dc-8a31-5987642d5513', 
                subject: 'Message From Contact Form',
                ...formData
            })
        });

        const result = await response.json();

        if (result.success) {
            setFormStatus('Thank you! Your message has been sent.');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setFormStatus('Oops! Something went wrong.');
        }

        setIsSubmitting(false);
    };

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
                <div className="w-full md:w-1/2 rounded-t-lg md:rounded-l-lg md:rounded-t-none overflow-hidden">
                    <img src="../assets/images/contact.jpg" alt="Hands holding soil" className="object-cover w-full h-64 md:h-[513px]" />
                </div>
                <div className="w-full md:w-1/2 p-8 bg-customTeal rounded-b-lg md:rounded-r-lg md:rounded-b-none">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-white mb-1" htmlFor="name">Full name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-0 text-white outline-none bg-transparent ring-1 ring-gray-200 placeholder-white"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-0 outline-none bg-transparent text-white ring-1 ring-gray-200 placeholder-white"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-white mb-1" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-0 bg-transparent outline-none resize-none text-white ring-1 ring-gray-200 placeholder-white"
                                placeholder="Enter your message"
                                rows="5"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-3 bg-white text-customTeal font-bold rounded-full shadow-md"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Us'}
                        </button>
                    </form>
                    {formStatus && <p className="text-white mt-4">{formStatus}</p>}
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
