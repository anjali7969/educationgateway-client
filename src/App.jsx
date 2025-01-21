import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                {/* <Route path="/courses" element={<Courses />} /> */}

            </Routes>
        </Router>
    );
}

export default App;