import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AboutUs from "./pages/about_us";
import HomePage from "./pages/homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/courses" element={<Courses />} /> */}
                <Route path="/aboutus" element={<AboutUs />} />

            </Routes>
        </Router>
    );
}

export default App;