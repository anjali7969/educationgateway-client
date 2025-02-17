// import React, { useEffect, useState } from "react";
// import { FaBook, FaCheckCircle, FaListAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import Footer from "../../components/Footer";
// import Navbar from "../../components/NavBar";

// const StudentDashboard = () => {
//     const navigate = useNavigate();

//     // Fetching user details
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (storedUser) {
//             setUser(storedUser);
//         } else {
//             navigate("/login"); // Redirect to login if no user found
//         }
//     }, [navigate]);

//     // Logout function
//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         setUser(null);
//         navigate("/login");
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen">
//             {/* Navbar */}
//             <Navbar user={user} onLogout={handleLogout} />

//             {/* Dashboard Container with Proper Spacing */}
//             <section className="container mx-auto px-6 py-36">
//                 <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">

//                     {/* Student Profile Section */}
//                     <div className="flex flex-col md:flex-row items-center justify-between bg-orange-50 p-5 rounded-lg shadow-sm">
//                         <div className="flex items-center space-x-3">
//                             <img
//                                 src="/path-to-profile.jpg"
//                                 alt="Student Profile"
//                                 className="w-14 h-14 rounded-full object-cover border border-gray-300"
//                             />
//                             <div>
//                                 <h2 className="text-lg font-bold text-gray-800">{user?.fullName || "Student"}</h2>
//                                 <p className="text-gray-500 text-sm">Student</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation Tabs */}
//                     <div className="flex justify-around border-b mt-5 pb-2 text-gray-600 text-sm font-medium">
//                         <button className="px-3 py-2 border-b-2 border-orange-500 text-orange-600">Dashboard</button>
//                         <button className="px-3 py-2 hover:text-orange-500">Courses</button>
//                         <button className="px-3 py-2 hover:text-orange-500">Wishlist</button>
//                         <button className="px-3 py-2 hover:text-orange-500">Purchase History</button>
//                         <button className="px-3 py-2 hover:text-orange-500">Settings</button>
//                     </div>

//                     {/* Dashboard Stats */}
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
//                         <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center">
//                             <FaBook className="text-red-600 text-3xl mr-3" />
//                             <div>
//                                 <p className="text-xl font-semibold text-gray-800">12</p>
//                                 <p className="text-sm text-gray-600">Enrolled Courses</p>
//                             </div>
//                         </div>

//                         <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
//                             <FaListAlt className="text-blue-600 text-3xl mr-3" />
//                             <div>
//                                 <p className="text-xl font-semibold text-gray-800">5</p>
//                                 <p className="text-sm text-gray-600">Active Courses</p>
//                             </div>
//                         </div>

//                         <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center">
//                             <FaCheckCircle className="text-green-600 text-3xl mr-3" />
//                             <div>
//                                 <p className="text-xl font-semibold text-gray-800">9</p>
//                                 <p className="text-sm text-gray-600">Completed Courses</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Recommended Courses */}
//                     <section className="mt-10">
//                         <h3 className="text-xl font-semibold text-gray-800">Recommended Courses</h3>
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
//                             <div className="bg-white p-4 rounded-lg shadow-md">
//                                 <img src="/path-to-image.jpg" alt="Course" className="w-full h-36 object-cover rounded" />
//                                 <h4 className="text-md font-semibold text-gray-800 mt-2">React for Beginners</h4>
//                                 <button className="mt-2 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700">
//                                     Enroll Now
//                                 </button>
//                             </div>
//                             <div className="bg-white p-4 rounded-lg shadow-md">
//                                 <img src="/path-to-image.jpg" alt="Course" className="w-full h-36 object-cover rounded" />
//                                 <h4 className="text-md font-semibold text-gray-800 mt-2">Advanced JavaScript</h4>
//                                 <button className="mt-2 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700">
//                                     Enroll Now
//                                 </button>
//                             </div>
//                             <div className="bg-white p-4 rounded-lg shadow-md">
//                                 <img src="/path-to-image.jpg" alt="Course" className="w-full h-36 object-cover rounded" />
//                                 <h4 className="text-md font-semibold text-gray-800 mt-2">UI/UX Design Principles</h4>
//                                 <button className="mt-2 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700">
//                                     Enroll Now
//                                 </button>
//                             </div>
//                         </div>
//                     </section>
//                 </div>
//             </section>

//             {/* Footer */}
//             <Footer />
//         </div>
//     );
// };

// export default StudentDashboard;

import React, { useEffect, useState } from "react";
import { FaBook, FaCheckCircle, FaHeart, FaListAlt, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getCourses } from "../../api/api"; // ✅ Import API call

import Footer from "../../components/Footer";
import Navbar from "../../components/NavBar";

const StudentDashboard = ({ user }) => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("dashboard"); // Controls which section is visible
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("latest");
    const [statusFilter, setStatusFilter] = useState("all");
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Define wishlistCourses here
    const wishlistCourses = [
        {
            id: "1",
            title: "Complete Web Development",
            price: "Rs. 1500",
            oldPrice: "Rs. 2000",
            rating: "4.8 ⭐",
            image: "/path-to-web-course.jpg",
        },
        {
            id: "2",
            title: "Python for Data Science",
            price: "Rs. 1800",
            oldPrice: "Rs. 2200",
            rating: "4.7 ⭐",
            image: "/path-to-python-course.jpg",
        },
        {
            id: "3",
            title: "AI & Machine Learning",
            price: "Rs. 2500",
            oldPrice: "Rs. 3000",
            rating: "4.9 ⭐",
            image: "/path-to-ai-course.jpg",
        },
    ];

    // 🚀 Redirect Admins to /admin instead of Student Dashboard
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (!storedUser) {
            navigate("/login"); // Redirect if no user is logged in
        } else if (storedUser.role === "Admin") {
            navigate("/admin"); // Prevent Admins from seeing student dashboard
        }
    }, [navigate]);

    // ✅ Fetch Courses from Backend
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const fetchedCourses = await getCourses();
            setCourses(fetchedCourses);
        } catch (error) {
            setError("Failed to fetch courses. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Filtered Courses Based on Search & Status
    const filteredCourses = courses
        .filter(course =>
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => (sortBy === "latest" ? b._id - a._id : a._id - b._id));

    // ✅ Logout function
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("authToken");
        window.dispatchEvent(new Event("storage"));
        navigate("/");
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Navbar */}
            <Navbar user={user} />

            {/* Logout Button */}
            <div className="flex justify-end p-4">
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition-all"
                >
                    Logout
                </button>
            </div>

            {/* Dashboard Container */}
            <section className="container mx-auto px-6 py-20">
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-6xl mx-auto">


                    {/* Student Profile Section */}
                    {/* <div className="flex flex-col md:flex-row items-center justify-between bg-blue-100 p-5 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-3">
                            <img
                                src="/path-to-profile.jpg"
                                alt="Student Profile"
                                className="w-14 h-14 rounded-full object-cover border border-gray-300"
                            />
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">{user?.fullName || "Student"}</h2>
                                <p className="text-gray-500 text-sm">Student</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Navigation Tabs */}
                    <div className="flex justify-around border-b mt-3 pb-2 text-gray-600 text-sm font-medium">
                        <button className={`px-3 py-2 ${activeTab === "dashboard" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-500"}`} onClick={() => setActiveTab("dashboard")}>Dashboard</button>
                        <button className={`px-3 py-2 ${activeTab === "courses" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-500"}`} onClick={() => setActiveTab("courses")}>Courses</button>
                        <button className={`px-3 py-2 ${activeTab === "wishlist" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-500"}`} onClick={() => setActiveTab("wishlist")}>Wishlist</button>
                        <button className={`px-3 py-2 ${activeTab === "purchaseHistory" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-500"}`} onClick={() => setActiveTab("purchaseHistory")}>Purchase History</button>
                        <button className={`px-3 py-2 ${activeTab === "settings" ? "border-b-2 border-blue-600 text-blue-600" : "hover:text-blue-500"}`} onClick={() => setActiveTab("settings")}>Settings</button>
                    </div>

                    {/* Keep Existing Dashboard and Courses */}
                    {activeTab === "dashboard" && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
                                <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center">
                                    <FaBook className="text-red-600 text-3xl mr-3" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-800">12</p>
                                        <p className="text-sm text-gray-600">Enrolled Courses</p>
                                    </div>
                                </div>
                                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
                                    <FaListAlt className="text-blue-600 text-3xl mr-3" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-800">5</p>
                                        <p className="text-sm text-gray-600">Active Courses</p>
                                    </div>
                                </div>
                                <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center">
                                    <FaCheckCircle className="text-green-600 text-3xl mr-3" />
                                    <div>
                                        <p className="text-xl font-semibold text-gray-800">9</p>
                                        <p className="text-sm text-gray-600">Completed Courses</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* ✅ Courses Section */}
                    {activeTab === "courses" && (
                        <>
                            {/* Courses Header */}
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-semibold text-gray-800">Courses ({courses.length})</h2>
                            </div>

                            {/* Filters: Search & Sort By */}
                            {/* Filters: Search, Sort By, Status */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                {/* Search Input */}
                                <input
                                    type="text"
                                    placeholder="Search in your courses..."
                                    className="border p-2 rounded w-1/3 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />

                                {/* Sort By Dropdown */}
                                <select
                                    className="border p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="latest">Latest</option>
                                    <option value="oldest">Oldest</option>
                                </select>

                                {/* Status Filter Dropdown */}
                                <select
                                    className="border p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">All Courses</option>
                                    <option value="completed">Completed</option>
                                    <option value="inprogress">In Progress</option>
                                </select>
                            </div>


                            {/* ✅ Courses Grid */}
                            {loading ? (
                                <p>Loading courses...</p>
                            ) : error ? (
                                <p className="text-red-500">{error}</p>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {filteredCourses.map((course) => (
                                        <div key={course._id} className="bg-white p-4 rounded-lg shadow-md">
                                            <img
                                                src={course.image ? `http://localhost:5003${course.image.startsWith("/") ? course.image : "/" + course.image}` : "/default-image.jpg"}
                                                alt={course.title || "Course Image"}
                                                className="w-full h-36 object-cover rounded"
                                            />



                                            <h4 className="text-lg font-semibold text-gray-800 mt-3">{course.title}</h4>
                                            <p className="text-gray-600 text-sm">{course.description}</p>

                                            <div className="flex justify-between items-center mt-3">
                                                <a
                                                    href={course.videoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600"
                                                >
                                                    Watch Course
                                                </a>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            )}
                        </>
                    )}
                    {/* Wishlist Section */}
                    {activeTab === "wishlist" && (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 py-6">Wishlist ({wishlistCourses.length})</h2>
                            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                                <table className="w-full border-collapse">
                                    <thead className="bg-gray-100 text-gray-700">
                                        <tr>
                                            <th className="p-4 text-left">Course</th>
                                            <th className="p-4 text-left">Price</th>
                                            <th className="p-4 text-left">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wishlistCourses.map((course) => (
                                            <tr key={course.id} className="border-b">
                                                <td className="p-4 flex items-center">
                                                    <img src={course.image} alt={course.title} className="w-16 h-16 rounded mr-4" />
                                                    <div>
                                                        <p className="font-semibold text-gray-700">{course.title}</p>
                                                        <p className="text-yellow-500 text-sm font-semibold">{course.rating}</p>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-black font-semibold">
                                                    {course.price} {course.oldPrice && <span className="text-gray-500 line-through ml-2">{course.oldPrice}</span>}
                                                </td>
                                                <td className="p-4 flex items-center space-x-2">
                                                    <button className="bg-gray-300 text-gray-800 px-3 py-2 rounded text-sm hover:bg-gray-400">
                                                        Buy Now
                                                    </button>
                                                    <button className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 flex items-center">
                                                        <FaShoppingCart className="mr-2" /> Add to Cart
                                                    </button>
                                                    <button className="text-red-600 hover:text-black-500">
                                                        <FaHeart size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}


                    {activeTab === "purchaseHistory" && (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4 py-6">Purchase History</h2>

                            <div className="bg-white text-gray-800 shadow-md rounded-lg overflow-hidden">
                                {[
                                    {
                                        date: "1st September, 2021 at 11:30 PM",
                                        courses: 3,
                                        total: "Rs. 2000",
                                        paymentMethod: "Credit Card",
                                        expanded: true,
                                        details: [
                                            {
                                                title: "Learn Ethical Hacking From Scratch",

                                                price: "Rs. 2000",
                                                rating: "4.7 (451,444 Reviews)",
                                                image: "/path-to-hacking-course.jpg",
                                            },
                                            {
                                                title: "Mega Digital Marketing Course A-Z: 12 Courses in 1 + Updates",

                                                price: "Rs. 1500",
                                                rating: "4.7 (451,444 Reviews)",
                                                image: "/path-to-marketing-course.jpg",
                                            },
                                        ],
                                    },
                                    {
                                        date: "31st August, 2021 at 11:30 PM",
                                        courses: 2,
                                        total: "Rs. 2000",
                                        paymentMethod: "Esewa",
                                    },
                                    {
                                        date: "24th August, 2021 at 6:34 PM",
                                        courses: 1,
                                        total: "Rs. 1000 ",
                                        paymentMethod: "Khalti",
                                    },
                                    {
                                        date: "1st September, 2021 at 8:47 PM",
                                        courses: 1,
                                        total: "Rs. 1500",
                                        paymentMethod: "Esewa",
                                    },
                                    {
                                        date: "1st September, 2021 at 11:30 PM",
                                        courses: 5,
                                        total: "Rs. 2999",
                                        paymentMethod: "Esewa",
                                    },
                                    {
                                        date: "17th July, 2021 at 10:51 AM",
                                        courses: 7,
                                        total: "Rs. 3500",
                                        paymentMethod: "Credit Card",
                                    },
                                ].map((purchase, index) => (
                                    <div key={index} className="border-b p-4">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <p className="text-lg font-semibold">{purchase.date}</p>
                                                <p className="text-sm text-gray-600">{purchase.courses} Courses • <span className="text-green-600">{purchase.total}</span> • {purchase.paymentMethod}</p>
                                            </div>
                                            <button className="p-2 text-gray-500 hover:text-gray-700">
                                                {purchase.expanded ? "⬆" : "⬇"}
                                            </button>
                                        </div>

                                        {purchase.expanded && purchase.details && (
                                            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                                                {purchase.details.map((course, i) => (
                                                    <div key={i} className="flex items-center mb-4 border-b pb-3">
                                                        <img src={course.image} alt={course.title} className="w-16 h-16 rounded mr-6" />
                                                        <div>
                                                            <p className="font-semibold text-gray-700">{course.title}</p>
                                                            {/* <p className="text-sm text-gray-500">Course by: {course.instructor}</p> */}
                                                            <p className="text-yellow-500 text-sm font-semibold">{course.rating}</p>
                                                        </div>
                                                        <p className="ml-auto font-semibold text-gray-900">{course.price}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <p className="text-center text-gray-500 mt-4">Yay! You have seen all your purchase history. 😎</p>
                        </>
                    )}

                    {activeTab === "settings" && (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Settings</h2>

                            {/* Account Settings Section */}
                            <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Profile Picture Upload */}
                                    <div className="flex flex-col items-center">
                                        <img src="/path-to-profile.jpg" alt="Profile" className="w-32 h-32 rounded-md object-cover border border-gray-300" />
                                        <input type="file" id="profile-upload" className="hidden" />
                                        <label htmlFor="profile-upload" className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-300">
                                            Upload Photo
                                        </label>
                                    </div>

                                    {/* Account Details */}
                                    <div className="col-span-2">
                                        <div className="grid grid-cols-2 gap-4">
                                            <input type="text" placeholder="First name" className="border p-3 rounded-lg w-full bg-white text-gray-700" />
                                            <input type="text" placeholder="Last name" className="border p-3 rounded-lg w-full bg-white text-gray-700" />
                                        </div>
                                        <input type="text" placeholder="Username" className="border p-3 rounded-lg w-full mt-4 bg-white text-gray-700" />
                                        <input type="email" placeholder="Email address" className="border p-3 rounded-lg w-full mt-4 bg-white text-gray-700" />
                                        <textarea placeholder="Your title, profession, or small biography" className="border p-3 rounded-lg w-full mt-4 h-20 bg-white text-gray-700"></textarea>
                                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Change Password Section */}
                            <h2 className="text-2xl font-semibold text-gray-800 my-6">Change Password</h2>
                            <div className="bg-white shadow-md rounded-lg p-6 md:p-10">
                                <div className="grid grid-cols-1 gap-4">
                                    <input type="password" placeholder="Current Password" className="border p-3 rounded-lg w-full bg-white text-gray-700" />
                                    <input type="password" placeholder="New Password" className="border p-3 rounded-lg w-full bg-white text-gray-700" />
                                    <input type="password" placeholder="Confirm New Password" className="border p-3 rounded-lg w-full bg-white text-gray-700" />
                                </div>
                                <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-all">
                                    Change Password
                                </button>
                            </div>
                        </>
                    )}


                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default StudentDashboard;

