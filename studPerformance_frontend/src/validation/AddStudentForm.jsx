// src/validation/AddStudentForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { validateStudentForm } from "./studentValidation";

export default function AddStudentForm({ token, onSuccess, onCancel, editingStudent }) {
  const [form, setForm] = useState(
    editingStudent || { name: "", email: "", contact: "", uid: "", cid: "" }
  );
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (editingStudent) setForm(editingStudent);
  }, [editingStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Pass isEditing flag to validation
    const error = validateStudentForm(form, !!editingStudent);
    if (error) {
      setMessage(`❌ ${error}`);
      return;
    }

    try {
      if (editingStudent) {
        await axios.put(
          "http://localhost:4444/updateStudent",
          { ...form, sid: editingStudent.sid }, // SID backend ला path param किंवा body मध्ये देतो
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setMessage("✅ Student updated successfully!");
      } else {
        await axios.post("http://localhost:4444/addStudent", form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("✅ Student added successfully!");
      }

      setForm({ name: "", email: "", contact: "", uid: "", cid: "" });
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to save student");
    }
  };

  const handleClear = () => {
    setForm({ name: "", email: "", contact: "", uid: "", cid: "" });
    setMessage("");
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required />
      <input type="text" name="contact" placeholder="Enter Contact" value={form.contact} onChange={handleChange} required />
      <input
        type="number"
        name="uid"
        placeholder="Enter UID"
        value={form.uid}
        onChange={handleChange}
        required
        disabled={!!editingStudent} // Update करताना UID change न होऊ देणे
      />
      <input type="number" name="cid" placeholder="Enter CID" value={form.cid} onChange={handleChange} required />

      {message && <p className="message">{message}</p>}

      <div className="form-buttons">
        <button type="submit">{editingStudent ? "✏ Update Student" : "➕ Add Student"}</button>
        <button type="button" onClick={handleClear}>✖ Clear</button>
        <button type="button" onClick={onCancel}>⬅ Back</button>
      </div>
    </form>
  );
}
