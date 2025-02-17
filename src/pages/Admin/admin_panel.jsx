import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png"; // Ensure correct path
import Sidebar from "../../components/Sidebar";

const AdminPanel = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar Navigation */}
            <div className="w-64 bg-white p-4 shadow-md flex flex-col items-center">
                {/* Logo inside Sidebar */}
                <img src={logo} className="h-14 w-auto mb-4" alt="Logo" />

                {/* Sidebar Links */}
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">

                <h2 className="text-xl font-medium text-gray-600">Welcome Admin!</h2>

                {/* Header Section
                <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
                    <h2 className="text-xl font-medium text-gray-600">Welcome Admin!</h2>
                </div> */}

                {/* Dynamic Content */}

                <Outlet />

            </div>
        </div>
    );
};

export default AdminPanel;
