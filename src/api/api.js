import axios from 'axios';

//  Backend API Base URL
const API_BASE_URL = "http://localhost:5003";  // Change this when deploying

//  Axios Instance for API Calls
const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,  // Allows sending cookies if needed
    headers: { 'Content-Type': 'application/json' },
});

//  Register User Function
export const registerUser = async (userData) => {
    try {
        console.log("📤 Sending request to:", `${API_BASE_URL}/auth/register`);
        console.log("📝 Data being sent:", userData);

        const response = await api.post("/auth/register", userData);

        console.log("✅ Response received:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Registration Error:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Login User Function
export const loginUser = async (userData) => {
    try {
        console.log("📤 Sending login request to:", `${API_BASE_URL}/auth/login`);
        console.log("📝 Data being sent:", userData);

        const response = await api.post("/auth/login", userData);

        console.log("✅ Login Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Login Error:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Get Courses Function
export const getCourses = async () => {
    try {
        console.log("📤 Fetching courses from:", `${API_BASE_URL}/courses`);

        const response = await api.get("/courses");

        console.log("✅ Courses Received:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error Fetching Courses:", error.response?.data || error.message);
        throw error;
    }
};

//  Get Assignments Function
// export const getAssignments = async () => {
//     try {
//         console.log("📤 Fetching assignments from:", `${API_BASE_URL}/assignment`);

//         const response = await api.get("/assignment");

//         console.log("✅ Assignments Received:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("❌ Error Fetching Assignments:", error.response?.data || error.message);
//         throw error;
//     }
// };

// // ✅ Create a New Assignment Function
// export const createAssignment = async (assignmentData) => {
//     try {
//         console.log("📤 Sending request to create an assignment:", `${API_BASE_URL}/assignment`);
//         console.log("📝 Data being sent:", assignmentData);

//         const response = await api.post("/assignment", assignmentData);

//         console.log("✅ Assignment Created:", response.data);
//         return response.data;
//     } catch (error) {
//         console.error("❌ Assignment Creation Error:", error.response?.data || error.message);
//         throw error;
//     }
// };

export default api;
