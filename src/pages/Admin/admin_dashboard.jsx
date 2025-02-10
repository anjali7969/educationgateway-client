import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
// import ManageCourses from "../pages/admin/ManageCourses";
// import ManageStudents from "../pages/admin/ManageStudents";

const AdminDashboard = () => {
    return (
        <Router>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar Navigation */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <Routes>
                        {/* <Route path="/admin/courses" element={<ManageCourses />} />
                        <Route path="/admin/students" element={<ManageStudents />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default AdminDashboard;
