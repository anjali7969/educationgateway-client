// import Footer from "../components/footer";
// import Hero from "../components/hero";
// import Navbar from "../components/NavBar";

// const HomePage = () => {
//     return (
//         <>
//             < Navbar />
//             < Hero />
//             <Footer />
//         </>
//     );
// };

// export default HomePage; 

import React, { useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/NavBar";
import Login from "../pages/login";
import Signup from "./signup";


const HomePage = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [isSignupOpen, setSignupOpen] = useState(false);

    return (
        <>
            {/* Apply blur only when modal is open */}
            <div className={`${isLoginOpen || isSignupOpen ? "blur-md" : ""} transition-all duration-300`}>
                <Navbar
                    onSignInClick={() => setLoginOpen(true)}
                    onSignUpClick={() => setSignupOpen(true)}
                />
                <Hero />
                <Footer />
            </div>

            {/* Login Modal should be outside to prevent blurring */}
            <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
            <Signup isOpen={isSignupOpen} onClose={() => setSignupOpen(false)} />
        </>
    );
};

export default HomePage;




