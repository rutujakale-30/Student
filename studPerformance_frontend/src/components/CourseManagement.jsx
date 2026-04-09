import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import "./CourseManagement.css";

export default function CourseManagement() {
  const [activeTab, setActiveTab] = useState(""); // "" | "add" | "view"
  const [courses, setCourses] = useState([]);
  const [form, setForm] = useState({ name: "" });
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "http://localhost:4444/api/courses";
  const token = localStorage.getItem("token");

  // axios instance with auth header (memoize to avoid re-creating)
  const api = useMemo(() => {
    return axios.create({
      baseURL: API_URL,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }, [API_URL, token]);

  // Helper: safely get id field from a course row
  const getId = (row) => row?.cid ?? row?.id ?? row?.course_id;

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/viewCourses`);
      // Normalize each item to ensure it has cid + name
      const list = (Array.isArray(res.data) ? res.data : []).map((c) => ({
        cid: getId(c),
        name: c?.name ?? c?.course_name ?? "",
      }));
      setCourses(list);
    } catch (err) {
      console.error("Fetch courses error:", err.response?.data || err.message);
      setMessage(" Failed to load courses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === "view") fetchCourses();
  }, [activeTab]); // eslint-disable-line

  // Auto-hide message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e) => setForm({ name: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return setMessage("⚠ Course name required");
    try {
      if (editingId) {
        await api.put(`/updateCourse/${editingId}`, { name: form.name });
        setMessage(" Course updated successfully!");
      } else {
        await api.post(`/addCourse`, { name: form.name });
        setMessage(" Course added successfully!");
      }
      setForm({ name: "" });
      setEditingId(null);
      setActiveTab("view");
      await fetchCourses();
    } catch (err) {
      console.error("Save course error:", err.response?.data || err.message);
      setMessage(" Failed to save course");
    }
  };

  const handleEdit = async (cid) => {
    if (cid == null) {
      setMessage(" Invalid course id");
      return;
    }
    try {
      const res = await api.get(`/viewCourseById/${cid}`);
      // Accept either direct object {cid, name} or wrapped {course:{...}}
      const payload = res.data?.course ?? res.data ?? {};
      const name = payload?.name ?? payload?.course_name ?? "";
      if (!name) {
        console.warn("Edit: name missing in response:", res.data);
      }
      setForm({ name });
      setEditingId(cid);
      setActiveTab("add");
      setMessage("");
    } catch (err) {
      console.error("Fetch course by id error:", err.response?.data || err.message);
      setMessage(" Failed to fetch course");
    }
  };

  const handleDelete = async (cid) => {
    if (cid == null) return;
    if (!window.confirm("Are you sure?")) return;
    try {
      await api.delete(`/deleteCourse/${cid}`);
      setMessage("🗑 Course deleted successfully!");
      await fetchCourses();
    } catch (err) {
      console.error("Delete course error:", err.response?.data || err.message);
      setMessage(" Failed to delete course");
    }
  };

  const handleBack = () => {
    setActiveTab("");
    setEditingId(null);
    setForm({ name: "" });
    setMessage("");
  };

  return (
    <div className="course-management">
      <h2>📚 Course Management</h2>

      {/* Add / View buttons */}
      {activeTab === "" && (
        <div className="tabs">
          <button onClick={() => setActiveTab("add")}>➕ Add Course</button>
          <button onClick={() => setActiveTab("view")}>👁 View Courses</button>
        </div>
      )}

      {/* Back button */}
      {activeTab && (
        <button className="btn-back" onClick={handleBack}>
          ⬅ Back
        </button>
      )}

      {/* Add / Update Form */}
      {activeTab === "add" && (
        <form onSubmit={handleSubmit} className="course-form">
          <h3>{editingId ? `✏ Edit Course (ID: ${editingId})` : "➕ Add New Course"}</h3>
          <input
            type="text"
            placeholder="Course Name"
            value={form.name}
            onChange={handleChange}
          />
          <div className="form-buttons">
            <button type="submit">{editingId ? "✏ Update Course" : "➕ Add Course"}</button>
            {editingId && (
              <button type="button" onClick={handleBack}>
                ✖ Cancel
              </button>
            )}
          </div>
        </form>
      )}

      {/* View Courses */}
      {activeTab === "view" && (
        <div>
          {loading ? (
            <p>Loading courses…</p>
          ) : (
            <ul className="course-list">
              {courses.length === 0 ? (
                <p>No courses available.</p>
              ) : (
                courses.map((c) => (
                  <li key={getId(c)}>
                    <span>{c.name}</span>
                    <div>
                      <button onClick={() => handleEdit(getId(c))}>✏ Edit</button>
                      <button onClick={() => handleDelete(getId(c))}>🗑 Delete</button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          )}
        </div>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
}
