import React from "react";
import aboutImage1 from "../assets/images/about-image.png"; // Replace with the first image path
import aboutImage2 from "../assets/images/about-image2.png"; // Replace with the second image path
import Navbar from "../components/NavBar"; // Import Navbar component
import Footer from "../components/footer"; // Import Footer component

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <div className="relative bg-white min-h-screen pt-16">
        <header className="relative z-10 py-10">
          <div className="container mx-auto text-left mb-20">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">About Us</h2>
            <div className="container mx-auto text-left mb-10">
              <h3 className="text-4xl font-bold text-gray-800 gap-8 relative z-10">
                <span className="block"><span className="text-yellow-400">GateWay Education</span> Providing The</span>
                <span className="block">Best Opportunities To The <span className="text-gray-800"></span></span>
                <span className="block">Students Around The Globe<span className="text-yellow-800"></span></span>

              </h3>
            </div>
          </div>
        </header>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side (Text) */}
          <div className="md:w-1/2 text-left mt-4">
            <p className="text-lg text-gray-700 mb-4">
              GateWay Education is a leading platform offering top-tier e-learning solutions to students worldwide. Our mission is to provide comprehensive learning programs, empowering students to achieve their career goals and excel in the digital world.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 font-semibold hover:text-blue-700"
            >
              Join Us →
            </a>
          </div>

          {/* Right side (Images) */}
          <div className="md:w-1/2 flex justify-between items-center">
            <div className="w-1/2">
              <img
                src={aboutImage1}
                alt="Image 1"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="w-1/2 ml-4">
              <img
                src={aboutImage2}
                alt="Image 2"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
