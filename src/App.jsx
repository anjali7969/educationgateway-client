import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/NavBar"; // Import Navbar

import AboutUs from "./pages/about_us";
import AdminPanel from "./pages/Admin/admin_panel"; // Admin Panel
import ManageCourses from "./pages/Admin/ManageCourses"; // Manage Courses
import ManageStudents from "./pages/Admin/ManageStudents"; // Manage Students
import ContactUs from "./pages/contact_us";
import Courses from "./pages/courses";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";
import StudentDashboard from "./pages/Student/student_dashboard";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = (userData) => {
        localStorage.setItem("authToken", userData.token);
        localStorage.setItem("user", JSON.stringify(userData.user));
        setUser(userData.user);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null);
        window.location.reload(); // Refresh to update UI
    };

    return (
        <Router>
            {/* 🛑 Hide Navbar when an Admin is logged in */}
            {!user || user.role !== "Admin" ? <Navbar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} /> : null}

            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<Login onLoginSuccess={handleLogin} />} />
                <Route path="/signup" element={<Signup onSignupSuccess={handleLogin} />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/student" element={<StudentDashboard />} />

                {/* 🛑 Admin Panel with Nested Routes */}
                {user && user.role === "Admin" && (
                    <Route path="/admin" element={<AdminPanel />}>
                        <Route path="courses" element={<ManageCourses />} />
                        <Route path="students" element={<ManageStudents />} />
                    </Route>
                )}
            </Routes>
        </Router>
    );
}

export default App;