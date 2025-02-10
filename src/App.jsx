import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about_us";
import AdminDashboard from "./pages/Admin/admin_dashboard";
import ContactUs from "./pages/contact_us";
import Courses from "./pages/courses";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/courses" element={<Courses />} /> */}
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/admin" element={<AdminDashboard />} />

            </Routes>
        </Router>
    );
}

export default App;