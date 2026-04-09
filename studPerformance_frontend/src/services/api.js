import axios from "axios";

// Backend base URL
const API = axios.create({
  baseURL: "http://localhost:4444", // backend URL + port
  withCredentials: true              // cookies support
});

// -----------------------------
// Auth APIs (Login / Logout)
// -----------------------------
export const loginUser = (data) => API.post("/login", data);
export const registerUser = (data) => API.post("/register", data);

// -----------------------------
// Dashboard APIs
// -----------------------------
export const getAdminDashboard = () => API.get("/admin/dashboard");
export const getStudentDashboard = () => API.get("/student/dashboard");
