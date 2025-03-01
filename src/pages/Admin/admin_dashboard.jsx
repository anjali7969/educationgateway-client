import React, { useEffect, useState } from "react";
import { FaBook, FaCheckCircle, FaShoppingCart, FaUsers } from "react-icons/fa";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { getAllEnrollments, getAllOrders, getAllUsers, getCourses } from "../../api/api";

const AdminDashboard = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const [totalCourses, setTotalCourses] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalEnrollments, setTotalEnrollments] = useState(0);
    const [userStats, setUserStats] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getAllUsers();
                setTotalUsers(users.length);

                // ✅ Get Today's Date
                const userCounts = {};
                users.forEach((user) => {
                    const date = user.createdAt.split("T")[0]; // Extract only the date part
                    userCounts[date] = (userCounts[date] || 0) + 1; // Count users per date
                });

                // ✅ Convert Data into Chart Format
                const chartData = Object.keys(userCounts).map(date => ({
                    date,
                    users: userCounts[date],
                }));

                setUserStats(chartData);
            } catch (error) {
                console.error("❌ Error fetching users:", error);
            }
        };

        const fetchCourses = async () => {
            try {
                const courses = await getCourses();
                setTotalCourses(courses.length);
            } catch (error) {
                console.error("❌ Error fetching courses:", error);
            }
        };

        const fetchOrders = async () => {
            try {
                const orders = await getAllOrders();
                setTotalOrders(orders.length);
            } catch (error) {
                console.error("❌ Error fetching orders:", error);
            }
        };

        const fetchEnrollments = async () => {
            try {
                const enrollments = await getAllEnrollments();
                setTotalEnrollments(enrollments.length);
            } catch (error) {
                console.error("❌ Error fetching enrollments:", error);
            }
        };

        fetchUsers();
        fetchCourses();
        fetchOrders();
        fetchEnrollments();
    }, []);

    return (
        <div className="p-6">
            {/* ✅ Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg shadow-md flex items-center">
                    <FaUsers className="text-blue-600 text-3xl mr-3" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">{totalUsers}</p>
                        <p className="text-sm text-gray-600">Total Users</p>
                    </div>
                </div>

                <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center">
                    <FaBook className="text-red-600 text-3xl mr-3" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">{totalCourses}</p>
                        <p className="text-sm text-gray-600">Total Courses</p>
                    </div>
                </div>

                <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex items-center">
                    <FaShoppingCart className="text-yellow-600 text-3xl mr-3" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">{totalOrders}</p>
                        <p className="text-sm text-gray-600">Total Orders</p>
                    </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center">
                    <FaCheckCircle className="text-green-600 text-3xl mr-3" />
                    <div>
                        <p className="text-xl font-semibold text-gray-800">{totalEnrollments}</p>
                        <p className="text-sm text-gray-600">Enrolled Courses</p>
                    </div>
                </div>
            </div>

            {/* ✅ Users Report Chart */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h5 className="text-xl font-bold text-gray-900 mb-4">User Signups Over Time</h5>

                {/* ✅ Chart */}
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={userStats}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashboard;
