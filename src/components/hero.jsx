import React from "react";
import imageLeft from "../assets/images/circle.png"; // Add path for your left image
import imageRight from "../assets/images/right_circle.png"; // Add path for your right image
import heroImage from "../assets/images/woman.png"; // Import your hero image

const Hero = () => {
    return (
        <div className="relative bg-white min-h-screen pt-10"> {/* Adjusted padding-top */}
            {/* Hero Section */}
            <header className="relative z-10 py-18">
                <div className="container mx-auto px-12 flex flex-col md:flex-row items-center justify-between">
                    {/* Left side (Text) */}
                    <div className="md:w-1/2 text-center md:text-left relative mt-[-40px]">
                        <h1 className="text-6xl font-bold text-gray-800 leading-tight relative z-10">
                            <span className="block">Up Your <span className="text-blue-600">Skills</span></span>
                            <span className="block">To <span className="text-blue-600">Advance</span> Your</span>
                            <span className="block"><span className="text-blue-600">Career</span> Path</span>
                        </h1>

                        <p className="text-gray-600 mt-4">
                            Learn UI-UX Design skills with weekend UX. The latest online learning system and material that help your knowledge growing.
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start space-x-4">
                            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Get Started</a>
                            <a href="#" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white">Free trial</a>
                        </div>
                    </div>

                    {/* Right side (Image) */}
                    <div className="md:w-1/2 mt-2 md:mt-0 flex justify-center items-center relative">
                        <div className="bg-blue-600 p-0 rounded-full flex justify-center items-center z-10">
                            <img
                                src={heroImage}
                                alt="Hero"
                                className="object-cover w-68 h-68 rounded-full" // Set object-cover to ensure it covers the circle
                            />
                        </div>
                    </div>

                    {/* Left image behind text (background) */}
                    <img
                        src={imageLeft}
                        alt="Left Circle"
                        className="absolute left-0 top-0 w-48 md:w-64 opacity-100 z-0" // Moved to background and size adjusted
                    />

                    {/* Right image behind text */}
                    <img
                        src={imageRight}
                        alt="Right Circle"
                        className="absolute right-0 top-0 w-32 md:w-48 opacity-100 z-0"
                    />
                </div>
            </header>

            {/* Search Bar */}
            <div className="mt-8 md:mt-0 flex justify-center w-full">
                <div className="relative w-full max-w-4xl">
                    <input
                        type="text"
                        className="w-full px-6 py-4 border-2 border-blue-500 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
                        placeholder="Search for Institution/Courses/Classes..."
                    />
                    <button
                        className="absolute right-0 top-0 bottom-0 px-6 py-4 bg-blue-500 text-white border-2 border-blue-500 rounded-r-md flex items-center justify-center hover:bg-blue-600 focus:outline-none"
                    >
                        <span className="text-xl">Search</span>
                        <svg
                            className="w-5 h-5 ml-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.742 11.742a8 8 0 1 0-1.415 1.414 5 5 0 1 1 1.414 1.415l4 4a1 1 0 0 0 1.415-1.415l-4-4z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Statistics Section */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div>
                        <p className="text-3xl font-bold text-blue-600">2K+</p>
                        <p className="text-gray-600">Video Courses</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-blue-600">5K+</p>
                        <p className="text-gray-600">Online Courses</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-blue-600">250+</p>
                        <p className="text-gray-600">Tutors</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
