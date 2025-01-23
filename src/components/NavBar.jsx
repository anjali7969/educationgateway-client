import React from "react";
import logo from "../assets/images/logo1.png"; // Import your logo image

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full z-40 top-0  transition-colors duration-300">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-0 px-6"> {/* Reduced padding for compact navbar */}
                {/* Logo Section */}
                <a href="#" className="flex items-center space-x-0"> {/* Reduced space between logo and text */}
                    <img src={logo} className="h-20 md:h-24" alt="Logo" /> {/* Increased logo size */}
                    {/* <span className="text-xl font-bold text-blue-600">GateWay <span className="text-black">Education</span></span> Added text next to logo */}
                </a>

                {/* Navigation Links */}
                <div className="items-center hidden md:flex space-x-6"> {/* Reduced space between links */}
                    <a className="text-blue-700 font-semibold hover:text-blue-500 text-base" href="#">Home</a>
                    <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">Courses</a>
                    <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">About Us</a>
                    <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">Pricing</a>
                    <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};
