import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-customTeal py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-white text-2xl font-bold">HEMMA INVESTMENT</h2>
                        <p className="text-white mt-2 max-w-sm">
                            HEMMA Company specializes in land restoration and sustainable agriculture in Rwanda.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                        <ul className="text-white mt-2 space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Service</a></li>
                            <li><a href="#" className="hover:underline">Articles</a></li>
                            <li><a href="#" className="hover:underline">Solutions</a></li>
                        </ul>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-white text-lg font-semibold">Contact Us</h3>
                        <ul className="text-white mt-2 space-y-2">
                            <li>Email: <a href="mailto:info@hemmainvestment.com" className="hover:underline">info@hemmainvestment.com</a></li>
                            <li>Email: <a href="mailto:habemmanuel06@gmail.com" className="hover:underline">habemmanuel06@gmail.com</a></li>
                            <li>Location: Kigali, Rwanda</li>
                            <li>Phone: +250 788 353 294</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-semibold">Follow Us</h3>
                        <div className="flex mt-2 space-x-4">
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaTwitter /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaInstagram /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaFacebook /></a>
                            <a href="#" className="text-white text-2xl hover:text-green-200"><FaYoutube /></a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="text-center mt-4">
        <p className="text-gray-200 font-bold">&copy; {new Date().getFullYear()} Hemma investment. All rights reserved.</p>
      </footer>
        </footer>
    );
}

export default Footer;
