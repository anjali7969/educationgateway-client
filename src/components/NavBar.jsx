// import React from "react";
// import logo from "../assets/images/logo.png"; // Ensure the logo path is correct

// const Navbar = ({ onSignUpClick }) => {
//     return (
//         <nav className="bg-white fixed w-full z-40 top-0 transition-colors duration-300">
//             <div className="max-w-screen-xl flex items-center justify-between mx-auto py-0 px-6">
//                 {/* Logo Section */}
//                 <a href="#" className="flex items-center space-x-0">
//                     <img src={logo} className="h-24 md:h-28" alt="Logo" />
//                 </a>

//                 {/* Navigation Links */}
//                 <div className="items-center hidden md:flex space-x-8">
//                     <a className="text-blue-700 font-semibold hover:text-blue-500 text-base" href="#">Home</a>
//                     <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="/courses">Courses</a>
//                     <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="/aboutus">About Us</a>
//                     {/* <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">Pricing</a> */}
//                     {/* <a className="text-gray-700 font-semibold hover:text-blue-500 text-base" href="#">Contact</a> */}
//                 </div>

//                 {/* Buttons Section (Right side) */}
//                 <div className="flex items-center space-x-4">
//                     <button onClick={onSignUpClick}
//                         className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white">
//                         Sign In
//                     </button>
//                     {/* <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                         Create Free Account
//                     </button> */}
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = ({ onSignInClick, onSignUpClick }) => {
    return (
        <nav className="bg-white fixed w-full z-40 top-0 transition-colors duration-300">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-0 px-6">
                {/* Logo Section */}
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-24 md:h-28" alt="Logo" />
                </Link>

                {/* Navigation Links */}
                <div className="items-center hidden md:flex space-x-8">
                    {/* <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/">Home</Link> */}
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/courses">Courses</Link>
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/aboutus">About Us</Link>
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/contactus">Contact Us</Link>
                </div>

                {/* Sign In & Sign Up Buttons */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={onSignInClick}
                        className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-all">
                        Sign In
                    </button>
                    <button
                        onClick={onSignUpClick}
                        className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-all">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;





