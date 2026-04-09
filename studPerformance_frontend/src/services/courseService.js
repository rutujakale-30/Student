// import axios from "axios";

// const API_URL = "http://localhost:4444";

// const getAuthHeaders = () => {
//   const token = localStorage.getItem("token");
//   return { Authorization: `Bearer ${token}` };
// };

// // सर्व courses fetch
// export const getCourses = async () => {
//   const res = await axios.get(`${API_URL}/viewCourses`, { headers: getAuthHeaders() });
//   return res.data.data || [];
// };

// // नवीन course add
// export const addCourse = async (course) => {
//   const res = await axios.post(`${API_URL}/addCourse`, course, { headers: getAuthHeaders() });
//   return res.data;
// };

// // Delete course
// export const deleteCourse = async (cid) => {
//   const res = await axios.delete(`${API_URL}/deleteCourse/${cid}`, { headers: getAuthHeaders() });
//   return res.data;
// };

// // Update course
// export const updateCourse = async (cid, { name }) => {
//   const res = await axios.put(`${API_URL}/updateCourse/${cid}`, { name }, { headers: getAuthHeaders() });
//   return res.data;
// };
