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
      <section className="py-20 px-20 bg-white">
        <div className="container mx-auto text-left mb-20">
          <h2 className="text-4xl font-bold text-blue-800 mb-30">About Us</h2>
          <p className="text-xl font-bold text-black-600  mb-10 ">
            GateWay Education Providing The Best Opportunities To The Students Around The Globe.
          </p>
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side (Text) */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700 mb-4">
              WEEKEND UX is a leading platform offering top-tier e-learning solutions to students worldwide. Our mission is to provide comprehensive learning programs for UI/UX design, empowering students to achieve their career goals and excel in the digital world.
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
