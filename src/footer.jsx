import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="bg-customTeal py-12">
            <div className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-white text-3xl font-bold">HEMMA<br/>INVESTMENT</h2>
                        <p className="text-white mt-8 max-w-sm">
                            HEMMA Company specializes in land restoration and sustainable agriculture in Rwanda.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                        <ul className="text-white mt-4 space-y-2">
                            
                            <li><Link to={'/about-Us'} className="hover:underline">About Us</Link></li>
                            <li><Link to={'/services'} className="hover:underline">Services</Link></li>
                            <li><Link to={'/'} className="hover:underline">Articles</Link></li>
                            <li><Link to={'/possible-solutions'} className="hover:underline">Solutions</Link></li>
                        </ul>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                        <ul className="text-white mt-4 space-y-2">
                            <li>Email: <a href="mailto:info@hemmainvestment.com" className="hover:underline">info@hemmainvestment.com</a></li>
                            <li>Email: <a href="mailto:habemmanuel06@gmail.com" className="hover:underline">habemmanuel06@gmail.com</a></li>
                            <li>Location: Kigali, Rwanda</li>
                            <li>Phone: +250 788 353 294</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold">Follow Us</h3>
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaTwitter /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaInstagram /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaFacebook /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-gray-200 font-bold">&copy; {new Date().getFullYear()} Hemma Investment. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
