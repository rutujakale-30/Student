// src/components/StudentCourses.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentCourses.css";

export default function StudentCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch courses from backend
  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem("token"); // ✅ token fetch
      const response = await axios.get("http://localhost:4444/student/courses", {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ Token add
        },
      });
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch courses. Please login again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="courses-container">
      <h2>Available Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found.</p>
      ) : (
        <ul className="course-list">
          {courses.map((course) => (
            <li key={course.cid} className="course-item">
              {course.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
