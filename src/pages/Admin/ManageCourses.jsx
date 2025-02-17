import React, { useEffect, useState } from "react";
import { createCourse, deleteCourse, getCourses } from "../../api/api";

const ManageCourses = () => {
    const [courses, setCourses] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newCourse, setNewCourse] = useState({
        title: "",
        description: "",
        videoUrl: "",
        image: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Fetch Courses from Backend
    useEffect(() => {
        fetchAllCourses();
    }, []);

    const fetchAllCourses = async () => {
        try {
            const fetchedCourses = await getCourses();
            setCourses(fetchedCourses);
        } catch (error) {
            setError("Failed to fetch courses. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    // ✅ Handle Course Addition
    const handleAddCourse = async () => {
        if (!newCourse.title || !newCourse.description || !newCourse.videoUrl) {
            alert("Please fill in all required fields.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("title", newCourse.title);
            formData.append("description", newCourse.description);
            formData.append("videoUrl", newCourse.videoUrl);
            formData.append("profilePicture", newCourse.image);  // ✅ Fix key name here

            const addedCourse = await createCourse(formData);
            setCourses([...courses, addedCourse]);
            setNewCourse({ title: "", description: "", videoUrl: "", image: null });
            setIsModalOpen(false);
        } catch (error) {
            alert("Failed to add course. Please try again.");
        }
    };


    // ✅ Handle Course Deletion
    const handleDeleteCourse = async (id) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            try {
                await deleteCourse(id);
                setCourses((prevCourses) => prevCourses.filter((course) => course._id !== id)); // ✅ Corrected state update
            } catch (error) {
                alert("Failed to delete course. Please try again.");
            }
        }
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl text-gray-800 font-semibold">Manage Courses</h2>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    + Add Course
                </button>
            </div>

            {/* Display Courses in Table Format */}
            {loading ? (
                <p>Loading courses...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : null}

            {!loading && courses.length > 0 ? (
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200 text-gray-800">
                            <th className="border p-3">No.</th>
                            <th className="border p-3">Title</th>
                            <th className="border p-3">Description</th>
                            <th className="border p-3">Video</th>
                            <th className="border p-3">Image</th>
                            <th className="border p-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, index) => (
                            <tr key={course._id} className="text-center text-gray-700">
                                <td className="border p-3">{index + 1}</td>
                                <td className="border p-3">{course.title}</td>
                                <td className="border p-3">{course.description}</td>
                                <td className="border p-3">
                                    <a
                                        href={course.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Watch
                                    </a>
                                </td>
                                <td className="border p-3">
                                    <img
                                        src={course.image ? `http://localhost:5003${course.image.startsWith("/") ? course.image : "/" + course.image}` : "/default-image.jpg"}
                                        alt={course.title}
                                        className="w-20 h-20 object-cover rounded"
                                    />
                                </td>
                                <td className="border p-3">
                                    <button
                                        onClick={() => handleDeleteCourse(course._id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                !loading && <p className="text-gray-500">No courses found.</p>
            )}

            {/* ✅ Modal for Adding Course */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
                    <div className="bg-white p-6 rounded shadow-lg w-96">
                        <h3 className="text-xl text-gray-700 font-semibold mb-4">Add New Course</h3>

                        {/* Title Input */}
                        <input
                            type="text"
                            placeholder="Course Title"
                            value={newCourse.title}
                            onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                            className="border p-2 w-full mb-3 bg-white text-gray-900 rounded"
                        />

                        {/* Description Input */}
                        <textarea
                            placeholder="Course Description"
                            value={newCourse.description}
                            onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                            className="border p-2 w-full mb-3 bg-white text-gray-900 rounded"
                        />

                        {/* Video URL Input */}
                        <input
                            type="text"
                            placeholder="Video URL"
                            value={newCourse.videoUrl}
                            onChange={(e) => setNewCourse({ ...newCourse, videoUrl: e.target.value })}
                            className="border p-2 w-full mb-3 bg-white text-gray-900 rounded"
                        />

                        {/* Image Upload */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setNewCourse({ ...newCourse, image: e.target.files[0] })}
                            className="border p-2 w-full mb-3 bg-white text-gray-900 rounded"
                        />

                        {/* Buttons */}
                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddCourse}
                                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                Add Course
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageCourses;
