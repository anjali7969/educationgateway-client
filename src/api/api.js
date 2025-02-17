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

        if (response.data.token) {
            localStorage.setItem("authToken", response.data.token);
        }

        console.log("✅ Login Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Login Error:", error.response?.data || error.message);
        throw error;
    }
};

export const getAllUsers = async () => {
    try {
        const token = localStorage.getItem("authToken"); // ✅ Ensure token is stored after login
        console.log("Sending request to fetch users with token:", token);

        const response = await api.get("/user/all", {
            headers: { Authorization: `Bearer ${token}` },
        });

        console.log("✅ Users received:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ Error Fetching Users:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Update User (Including Role Change)
export const updateUser = async (userId, updatedData) => {
    const token = localStorage.getItem("authToken");
    const response = await api.put(`/user/update/${userId}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// ✅ Delete User
export const deleteUser = async (userId) => {
    const token = localStorage.getItem("authToken");
    await api.delete(`/user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};



// ✅ Create a New Course
export const createCourse = async (courseData) => {
    try {
        const token = localStorage.getItem("authToken");

        console.log("🔍 Sending Course Data:", courseData); // Debugging Log

        const response = await api.post("/courses/create", courseData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data", // ✅ Allow image upload
            },
        });

        console.log("✅ Course Created:", response.data);
        return response.data.course;
    } catch (error) {
        console.error("❌ Course Creation Error:", error.response?.data || error.message);
        throw error;
    }
};


// ✅ Get Courses from Backend
export const getCourses = async () => {
    try {
        const response = await api.get("/courses/all");
        return response.data;
    } catch (error) {
        console.error("❌ Error Fetching Courses:", error.response?.data || error.message);
        throw error;
    }
};

// ✅ Delete Course
export const deleteCourse = async (id) => {
    try {
        const response = await fetch(`http://localhost:5003/courses/delete/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete course");

        // ✅ Remove the course from the state (update UI instantly)
        setCourses((prevCourses) => prevCourses.filter(course => course._id !== id));

        console.log("✅ Course deleted successfully");
    } catch (error) {
        console.error("❌ Error deleting course:", error);
    }
};




export default api;
