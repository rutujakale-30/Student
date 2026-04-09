// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./StudentManagement.css";
// //import AddStudentForm from "./AddStudentForm";

// import AddStudentForm from "../validation/AddStudentForm";

// export default function StudentManagement() {
//   const [showOptions, setShowOptions] = useState(false);
//   const [activeTab, setActiveTab] = useState("");
//   const [form, setForm] = useState({ name: "", email: "", contact: "", uid: "", cid: "" });
//   const [students, setStudents] = useState([]);
//   const [message, setMessage] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [editingId, setEditingId] = useState(null);

//   const token = localStorage.getItem("token");

//   // Fetch all students
//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:4444/viewAllStudent", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setStudents(res.data.data || []);
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to load students");
//     }
//   };

//   useEffect(() => {
//     if (activeTab === "view") fetchStudents();
//   }, [activeTab]);

//   // Handle input change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add or Update student
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         // Update student
//         await axios.put(
//           "http://localhost:4444/updateStudent",
//           { ...form, sid: editingId },
//           { headers: { Authorization: `Bearer ${token}` } }
//         );
//         setMessage(" Student updated successfully!");
//       } else {
//         // Add student
//         await axios.post("http://localhost:4444/addStudent", form, {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setMessage(" Student added successfully!");
//       }
//       setForm({ name: "", email: "", contact: "", uid: "", cid: "" });
//       setEditingId(null);
//       setActiveTab("view");
//       fetchStudents(); // Refresh table
//     } catch (err) {
//       console.error(err);
//       setMessage(" Failed to save student");
//     }
//   };

//   // Clear form
//   const handleClear = () => {
//     setForm({ name: "", email: "", contact: "", uid: "", cid: "" });
//     setEditingId(null);
//     setMessage("");
//   };

//   // Delete student
//   const handleDelete = async (sid) => {
//     if (!window.confirm("Are you sure you want to delete this student?")) return;
//     try {
//       await axios.delete(`http://localhost:4444/delete/${sid}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setMessage("🗑 Student deleted successfully!");
//       fetchStudents();
//     } catch (err) {
//       console.error(err);
//       setMessage("Failed to delete student");
//     }
//   };

//   // Edit student
//   const handleEdit = (student) => {
//     setForm({
//       name: student.name,
//       email: student.email,
//       contact: student.contact,
//       uid: student.uid,
//       cid: student.cid,
//     });
//     setEditingId(student.sid);
//     setActiveTab("add");
//   };

//   return (
//     <div className="student-management">
//       <h2>👨‍🎓 Student Management</h2>

//       {activeTab === "" && (
//         <button className="btn-student" onClick={() => setShowOptions(!showOptions)}>
//           Students
//         </button>
//       )}

//       {showOptions && activeTab === "" && (
//         <div className="student-options">
//           <button onClick={() => setActiveTab("add")}>➕ Add Student</button>
//           <button onClick={() => setActiveTab("view")}>📋 View Students</button>
//         </div>
//       )}

//       {message && <p className="message">{message}</p>}

//       {/* Add / Update Form */}
//       {activeTab === "add" && (
//         <form className="student-form" onSubmit={handleSubmit}>
//           <input type="text" name="name" placeholder="Enter Name" value={form.name} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Enter Email" value={form.email} onChange={handleChange} required />
//           <input type="text" name="contact" placeholder="Enter Contact" value={form.contact} onChange={handleChange} required />
//           <input type="number" name="uid" placeholder="Enter UID" value={form.uid} onChange={handleChange} required />
//           <input type="number" name="cid" placeholder="Enter CID" value={form.cid} onChange={handleChange} required />

//           <div className="form-buttons">
//             <button type="submit" className="btn-submit">{editingId ? "✏ Update Student" : "➕ Add Student"}</button>
//             <button type="button" className="btn-clear" onClick={handleClear}>✖ Clear</button>
//             <button type="button" className="btn-back" onClick={() => { setActiveTab(""); setEditingId(null); }}>⬅ Back</button>
//           </div>
//         </form>
//       )}

//       {/* View Students */}
//       {activeTab === "view" && (
//         <div>
//           <button className="btn-back" onClick={() => setActiveTab("")}>⬅ Back</button>
//           <input
//             type="text"
//             placeholder="🔍 Search by Name, Email, or UID"
//             className="student-search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <table className="student-table">
//             <thead>
//               <tr>
//                 <th>SID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Contact</th>
//                 <th>UID</th>
//                 <th>CID</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students
//                 .filter((stu) =>
//                   stu.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   stu.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                   stu.uid.toString().includes(searchTerm)
//                 )
//                 .map((stu) => (
//                   <tr key={stu.sid}>
//                     <td>{stu.sid}</td>
//                     <td>{stu.name}</td>
//                     <td>{stu.email}</td>
//                     <td>{stu.contact}</td>
//                     <td>{stu.uid}</td>
//                     <td>{stu.cid}</td>
//                     <td>
//                       <button className="btn-edit" onClick={() => handleEdit(stu)}>✏ Edit</button>
//                       <button className="btn-delete" onClick={() => handleDelete(stu.sid)}>🗑 Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StudentManagement.css";
import AddStudentForm from "../validation/AddStudentForm"; // correct import path

export default function StudentManagement() {
  const [activeTab, setActiveTab] = useState("");
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const token = localStorage.getItem("token");

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:4444/viewAllStudent", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(res.data.data || []);
    } catch (err) {
      console.error(err);
      setMessage("Failed to load students");
    }
  };

  useEffect(() => {
    if (activeTab === "view") fetchStudents();
  }, [activeTab]);

  const handleEdit = (student) => {
    setEditingStudent(student);
    setActiveTab("add");
  };

  const handleDelete = async (sid) => {
    if (!window.confirm("Are you sure you want to delete this student?")) return;
    try {
      await axios.delete(`http://localhost:4444/delete/${sid}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("🗑 Student deleted successfully!");
      fetchStudents();
    } catch (err) {
      console.error(err);
      setMessage("Failed to delete student");
    }
  };

  return (
    <div className="student-management">
      <h2>👨‍🎓 Student Management</h2>

      {activeTab === "" && (
        <div className="student-options">
          <button onClick={() => { setEditingStudent(null); setActiveTab("add"); }}>➕ Add Student</button>
          <button onClick={() => setActiveTab("view")}>📋 View Students</button>
        </div>
      )}

      {activeTab === "add" && (
        <AddStudentForm
          token={token}
          editingStudent={editingStudent}
          onSuccess={() => { setActiveTab("view"); fetchStudents(); setEditingStudent(null); }}
          onCancel={() => { setActiveTab(""); setEditingStudent(null); }}
        />
      )}

      {activeTab === "view" && (
        <div>
          <button onClick={() => setActiveTab("")}>⬅ Back</button>
          <input
            type="text"
            placeholder="🔍 Search by Name, Email, or UID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table className="student-table">
            <thead>
              <tr>
                <th>SID</th><th>Name</th><th>Email</th><th>Contact</th><th>CID</th><th>Actions</th>
               {/*<th>SID</th><th>Name</th><th>Email</th><th>Contact</th><th>UID</th><th>CID</th><th>Actions</th>*/}
              </tr>
            </thead>
            <tbody>
              {students
                .filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             s.uid.toString().includes(searchTerm))
                .map(s => (
                  <tr key={s.sid}>
                    {/*<td>{s.sid}</td><td>{s.name}</td><td>{s.email}</td><td>{s.contact}</td><td>{s.uid}</td><td>{s.cid}</td>*/}
                       <td>{s.sid}</td><td>{s.name}</td><td>{s.email}</td><td>{s.contact}</td><td>{s.cid}</td>
                    <td>
                      <button onClick={() => handleEdit(s)}>✏ Edit</button>
                      <button onClick={() => handleDelete(s.sid)}>🗑 Delete</button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
