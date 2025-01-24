import React from "react";
import aboutImage from "../assets/images/about-image.png"; // Replace with actual image path
import Navbar from "../components/NavBar"; // Import Navbar component
import Footer from "../components/footer"; // Import Footer component

const AboutUs = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* About Us Section */}
      <section className="py-10 px-6 bg-white">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 mb-8">
            WEEKEND UX Providing The Best Opportunities To The Students Around The Globe.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src={aboutImage}
                alt="About Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div>
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
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Features</h3>
          <p className="text-lg text-gray-600 mb-8">
            We are always working to provide you with the best of the features in all aspects of e-learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Commenting out the icon section */}
            {/* <div className="feature-box">
              <img
                src="path-to-icon1" // Add the icon for standardization
                alt="Standardization"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Standardized Content</h4>
              <p className="text-gray-600">
                All our learning content is carefully designed to follow the best practices and industry standards to ensure top-quality education.
              </p>
            </div>
            <div className="feature-box">
              <img
                src="path-to-icon2" // Add the icon for reduced costs
                alt="Reduced Costs"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Affordable Pricing</h4>
              <p className="text-gray-600">
                We offer competitive pricing models to ensure that high-quality education is accessible to all learners.
              </p>
            </div>
            <div className="feature-box">
              <img
                src="path-to-icon3" // Add the icon for customization
                alt="More Customization"
                className="w-12 h-12 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">More Customization</h4>
              <p className="text-gray-600">
                Tailor your learning experience to fit your needs. Whether you're a beginner or an expert, we offer personalized courses to help you grow.
              </p>
            </div> */}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Benefits</h3>
          <p className="text-lg text-gray-600 mb-8">
            By Joining WEEKEND UX Platform, One Can Avail a Lot Of Benefits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="benefit-box">
              <h4 className="text-xl font-semibold text-gray-800">01</h4>
              <h5 className="text-xl font-semibold text-gray-800">Standardization</h5>
              <p className="text-gray-600">
                Streamlined and quality-ensured materials for all students.
              </p>
            </div>
            <div className="benefit-box">
              <h4 className="text-xl font-semibold text-gray-800">02</h4>
              <h5 className="text-xl font-semibold text-gray-800">Reduced Costs</h5>
              <p className="text-gray-600">
                Affordable pricing ensures learning is accessible to everyone.
              </p>
            </div>
            <div className="benefit-box">
              <h4 className="text-xl font-semibold text-gray-800">03</h4>
              <h5 className="text-xl font-semibold text-gray-800">More Customization</h5>
              <p className="text-gray-600">
                Personalized courses and support for your unique learning style.
              </p>
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
