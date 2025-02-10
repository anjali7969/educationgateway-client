import React from "react";
import { FiBook, FiHome, FiLogOut, FiUsers } from "react-icons/fi"; // Icons for sidebar
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-screen w-60 bg-white shadow-lg flex flex-col justify-between fixed">
            {/* Logo Section */}
            <div className="flex items-center justify-center py-6">
                <span className="text-2xl font-bold text-gray-700">Admin Panel</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col flex-grow">
                <Link
                    to="/admin/dashboard"
                    className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                    <FiHome className="mr-3" /> Dashboard
                </Link>

                <Link
                    to="/admin/courses"
                    className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                    <FiBook className="mr-3" /> Manage Courses
                </Link>

                <Link
                    to="/admin/students"
                    className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                >
                    <FiUsers className="mr-3" /> Manage Students
                </Link>
            </nav>

            {/* Logout Button */}
            <div className="p-6 border-t border-gray-200">
                <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition">
                    <FiLogOut className="mr-3" /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
