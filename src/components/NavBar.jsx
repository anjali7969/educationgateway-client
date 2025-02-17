import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assets/images/logo.png";

const Navbar = ({ onSignInClick, onSignUpClick, onLogout }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        // Check authentication status when the navbar loads
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }

        // Listen for storage changes (to update navbar when login/logout happens)
        const handleStorageChange = () => {
            const updatedUser = localStorage.getItem("user");
            if (updatedUser) {
                setUser(JSON.parse(updatedUser));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUser(null);
        if (onLogout) onLogout(); // Check if onLogout function exists and call it
        navigate("/"); // Redirect to homepage after logout
    };

    return (
        <nav className="bg-white fixed w-full z-40 top-0 transition-colors duration-300">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto py-0 px-6">
                {/* Logo Section */}
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-24 md:h-28" alt="Logo" />
                </Link>

                {/* Navigation Links */}
                <div className="items-center hidden md:flex space-x-8">
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/">Home</Link>

                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/courses">Courses</Link>
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/aboutus">About Us</Link>
                    <Link className="text-gray-700 font-semibold hover:text-blue-500" to="/contactus">Contact Us</Link>
                </div>

                {/* Conditional Rendering: Show Cart & Logout if Logged In */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            {/* Welcome Message */}
                            <span className="text-gray-700 font-semibold">Welcome, {user?.name}</span>

                            {/* Cart Icon */}
                            <Link to="/cart" className="text-gray-700 hover:text-blue-500 text-lg">
                                <FaShoppingCart size={24} />
                            </Link>

                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            {/* Sign In & Sign Up Buttons */}
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
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;