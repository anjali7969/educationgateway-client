import React from "react";
// import Button from "../Button/button";
import logo from "../assets/images/logo.png"; // Import your logo image

const Navbar = () => {
    return (
        <nav className="bg-white fixed w-full z-40 top-0 transition-colors duration-300 shadow-md">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo Section */}
                <a href="#" className="flex items-center space-x-3">
                    <img src={logo} className="h-16 md:h-24" alt="Logo" />
                </a>

                {/* Navigation Links */}
                <div className="items-center hidden md:flex space-x-8">
                    <a className="text-blue-700 font-medium hover:text-blue-500" href="#">Home</a>
                    <a className="text-gray-700 font-medium hover:text-blue-500" href="#">Courses</a>
                    <a className="text-gray-700 font-medium hover:text-blue-500" href="#">About Us</a>
                    <a className="text-gray-700 font-medium hover:text-blue-500" href="#">Pricing</a>
                    <a className="text-gray-700 font-medium hover:text-blue-500" href="#">Contact</a>
                </div>

                {/* Buttons */}
                {/* <div className="flex items-center space-x-4">
                    <Button label="Log in" variant="secondary" />
                    <Button label="Sign up" variant="primary" />
                </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
