import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.png"; // ✅ Ensure the path is correct
import Sidebar from "../../components/Sidebar"; // ✅ Import Sidebar component

const AdminPanel = ({ onLogout }) => {
    useEffect(() => {
        const handleStorageChange = () => {
            console.log("Storage changed, checking user status...");
            // You can add logic to handle authentication status if needed
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* ✅ Sidebar Section */}
            <div className="w-64 bg-white p-4 shadow-md flex flex-col items-center">
                {/* ✅ Logo inside Sidebar */}
                <img src={logo} className="h-14 w-auto mb-4" alt="Logo" />

                {/* ✅ Sidebar Component with Logout Prop */}
                <Sidebar onLogout={onLogout} />
            </div>

            {/* ✅ Main Content Area */}
            <div className="flex-1 p-6">
                <h2 className="text-xl font-medium text-gray-600">Welcome Admin!</h2>

                {/* ✅ Dynamic Content from Routes */}
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPanel;
