import React, { useState } from "react";

const ManageCourses = () => {
    const [courses, setCourses] = useState([
        { id: 1, title: "Full-Stack Web Development", price: "₹14999" },
        { id: 2, title: "Data Science with Python", price: "₹12999" },
        { id: 3, title: "UI/UX Design Fundamentals", price: "₹9999" },
    ]);

    const [newCourse, setNewCourse] = useState({ title: "", price: "" });

    const handleAddCourse = () => {
        if (newCourse.title && newCourse.price) {
            setCourses([...courses, { id: courses.length + 1, ...newCourse }]);
            setNewCourse({ title: "", price: "" });
        }
    };

    const handleDeleteCourse = (id) => {
        setCourses(courses.filter((course) => course.id !== id));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage Courses</h2>

            {/* Course List */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-3">ID</th>
                        <th className="border p-3">Title</th>
                        <th className="border p-3">Price</th>
                        <th className="border p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="text-center">
                            <td className="border p-3">{course.id}</td>
                            <td className="border p-3">{course.title}</td>
                            <td className="border p-3">{course.price}</td>
                            <td className="border p-3">
                                <button
                                    onClick={() => handleDeleteCourse(course.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Add New Course */}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Add New Course</h3>
                <div className="flex gap-4">
                    <input
                        type="text"
                        placeholder="Course Title"
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <input
                        type="text"
                        placeholder="Price (₹)"
                        value={newCourse.price}
                        onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                        className="border p-2 rounded w-full"
                    />
                    <button
                        onClick={handleAddCourse}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ManageCourses;
