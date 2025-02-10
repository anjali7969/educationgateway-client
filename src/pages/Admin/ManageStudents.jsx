import React, { useState } from "react";

const ManageStudents = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" },
        { id: 3, name: "Michael Johnson", email: "michael@example.com" },
    ]);

    const handleDeleteStudent = (id) => {
        setStudents(students.filter((student) => student.id !== id));
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Manage Students</h2>

            {/* Student List */}
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-3">ID</th>
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Email</th>
                        <th className="border p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id} className="text-center">
                            <td className="border p-3">{student.id}</td>
                            <td className="border p-3">{student.name}</td>
                            <td className="border p-3">{student.email}</td>
                            <td className="border p-3">
                                <button
                                    onClick={() => handleDeleteStudent(student.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageStudents;
