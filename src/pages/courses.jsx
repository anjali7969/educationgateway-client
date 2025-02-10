import React, { useMemo, useState } from "react";
import { FiGrid, FiList, FiSearch } from "react-icons/fi";
import Footer from "../components/Footer"; // Footer Component
import Navbar from "../components/NavBar"; // Navbar Component

// Sample Course Data
const courseData = [
    {
        id: 1,
        title: "Full-Stack Web Development",
        category: "Programming",
        price: 14999, // Price in NPR
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
        description: "Learn modern web development technologies like React, Node.js, and MongoDB."
    },
    {
        id: 2,
        title: "Data Science with Python",
        category: "Data Science",
        price: 12999, // Price in NPR
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1",
        description: "Master data analysis, machine learning, and visualization using Python."
    },
    {
        id: 3,
        title: "UI/UX Design Fundamentals",
        category: "Design",
        price: 9999, // Price in NPR
        image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a1",
        description: "Understand user experience and interface design with hands-on projects."
    }
];

// Categories for filtering
const categories = ["All", "Programming", "Data Science", "Design"];

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [viewMode, setViewMode] = useState("grid");
    const [selectedCourse, setSelectedCourse] = useState(null);

    const filteredCourses = useMemo(() => {
        return courseData.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, selectedCategory]);

    return (
        <>
            <Navbar />

            {/* Main Container */}
            <div className="min-h-screen bg-white flex flex-col items-center mt-24">

                {/* Fixed Search & Filters */}
                <div className="w-full max-w-7xl bg-white px-6 py-4 shadow-md rounded-lg fixed top-24 z-50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                        {/* Search Input */}
                        <div className="relative flex-1 max-w-xl">
                            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="w-full pl-12 pr-4 py-2 h-12 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Category Dropdown */}
                        <div className="relative">
                            <select
                                className="w-48 h-12 px-4 border border-gray-300 bg-transparent rounded-md focus:ring-2 focus:ring-blue-500"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                {categories.map(category => (
                                    <option key={category} value={category} className="text-gray-800">
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Grid/List Toggle */}
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-3 rounded-md ${viewMode === "grid" ? "bg-blue-500 text-white" : "text-gray-600"}`}
                            >
                                <FiGrid size={20} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-3 rounded-md ${viewMode === "list" ? "bg-blue-500 text-white" : "text-gray-600"}`}
                            >
                                <FiList size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Scrollable Courses Section */}
                <div className="w-full max-w-7xl mt-32 overflow-y-auto max-h-[calc(100vh-200px)] px-6">
                    {filteredCourses.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-lg shadow">
                            <p className="text-gray-600">No courses found matching your criteria</p>
                        </div>
                    ) : (
                        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
                            {filteredCourses.map(course => (
                                <div
                                    key={course.id}
                                    className={`bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow cursor-pointer ${viewMode === "list" ? "flex items-center space-x-4" : ""
                                        }`}
                                    onClick={() => setSelectedCourse(course)}
                                >
                                    <img
                                        src={course.image}
                                        alt={course.title}
                                        className={`rounded-md ${viewMode === "list" ? "w-24 h-24" : "w-full h-48"
                                            } object-cover`}
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                                        <p className="text-gray-800 font-bold mt-1">रु {course.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Course Modal */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
                        <div className="p-6">
                            {/* Close Button */}
                            <div className="flex justify-between items-start mb-4">
                                <h2 className="text-xl font-semibold">{selectedCourse.title}</h2>
                                <button
                                    onClick={() => setSelectedCourse(null)}
                                    className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            {/* Course Content */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <img
                                    src={selectedCourse.image}
                                    alt={selectedCourse.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <div className="space-y-4">
                                    <p className="text-gray-600"><span className="font-semibold">Category:</span> {selectedCourse.category}</p>
                                    <p className="text-gray-600"><span className="font-semibold">Price:</span> रु {selectedCourse.price}</p>
                                    <p className="text-gray-600">{selectedCourse.description}</p>
                                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Courses;
