// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./PerformanceManagement.css";

// // // // export default function PerformanceManagement() {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [selectedStudent, setSelectedStudent] = useState(null);
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [formType, setFormType] = useState("");
// // // //   const [formData, setFormData] = useState({
// // // //     attendance_percentage: "",
// // // //     machine_test: "",
// // // //     mcq_test: "",
// // // //     mock_interview_score: ""
// // // //   });
// // // //   const [performances, setPerformances] = useState([]);
// // // //   const [showAll, setShowAll] = useState(false);

// // // //   const token = localStorage.getItem("token");

// // // //   useEffect(() => {
// // // //     fetchStudents();
// // // //     fetchAllPerformances();
// // // //   }, []);

// // // //   const fetchStudents = async () => {
// // // //     try {
// // // //       const res = await axios.get("http://localhost:4444/performance/students");
// // // //       setStudents(res.data);
// // // //     } catch (err) { console.error(err); }
// // // //   };

// // // //   const fetchAllPerformances = async () => {
// // // //     try {
// // // //       const res = await axios.get("http://localhost:4444/performance/all", {
// // // //         headers: { Authorization: `Bearer ${token}` }
// // // //       });
// // // //       setPerformances(res.data);
// // // //     } catch (err) { console.error(err); }
// // // //   };

// // // //   const handleSelectStudent = (student) => {
// // // //     const latestPerformance = performances
// // // //       .filter(p => p.sid === student.sid)
// // // //       .sort((a, b) => b.per_id - a.per_id)[0] || null;

// // // //     setSelectedStudent({ ...student, performance: latestPerformance });
// // // //     setFormData({
// // // //       attendance_percentage: latestPerformance?.attendance_percentage || "",
// // // //       machine_test: latestPerformance?.machine_test || "",
// // // //       mcq_test: latestPerformance?.mcq_test || "",
// // // //       mock_interview_score: latestPerformance?.mock_interview_score || ""
// // // //     });
// // // //     setShowForm(false);
// // // //   };

// // // //   const handleForm = (type, performance = null) => {
// // // //     setFormType(type);
// // // //     if (type === "update" && performance) {
// // // //       setSelectedStudent({ ...selectedStudent, performance });
// // // //       setFormData({
// // // //         attendance_percentage: performance.attendance_percentage,
// // // //         machine_test: performance.machine_test,
// // // //         mcq_test: performance.mcq_test,
// // // //         mock_interview_score: performance.mock_interview_score
// // // //       });
// // // //     }
// // // //     setShowForm(true);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     try {
// // // //       const url =
// // // //         formType === "add"
// // // //           ? "/performance/add"
// // // //           : `/performance/update/${selectedStudent.performance.per_id}`;
// // // //       const method = formType === "add" ? "post" : "put";

// // // //       const dataToSend = {
// // // //         ...formData,
// // // //         attendance_percentage: Number(formData.attendance_percentage),
// // // //         machine_test: Number(formData.machine_test),
// // // //         mcq_test: Number(formData.mcq_test),
// // // //         mock_interview_score: Number(formData.mock_interview_score),
// // // //         sid: selectedStudent.sid
// // // //       };

// // // //       await axios({
// // // //         method,
// // // //         url: `http://localhost:4444${url}`,
// // // //         data: dataToSend,
// // // //         headers: { Authorization: `Bearer ${token}` }
// // // //       });

// // // //       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
// // // //       setShowForm(false);
// // // //       fetchAllPerformances(); // Refresh after update/add
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert(err.response?.data?.message || "Error");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="performance-container">
// // // //       <h2>📊 Performance Management</h2>

// // // //       <h3>Select Student</h3>
// // // //       <ul className="student-list">
// // // //         {students.map((s) => (
// // // //           <li key={s.sid}>
// // // //             {s.name}{" "}
// // // //             <button onClick={() => handleSelectStudent(s)}>Select</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {selectedStudent && (
// // // //         <div className="action-buttons">
// // // //           <button onClick={() => handleForm("add")}>Add Performance</button>
// // // //           {selectedStudent.performance && (
// // // //             <button onClick={() => handleForm("update", selectedStudent.performance)}>Update Performance</button>
// // // //           )}
// // // //         </div>
// // // //       )}

// // // //       {showForm && (
// // // //         <div className="performance-form">
// // // //           <h3>{formType === "add" ? "Add" : "Update"} Performance for {selectedStudent.name}</h3>

// // // //           <input
// // // //             type="number"
// // // //             name="attendance_percentage"
// // // //             placeholder="Attendance %"
// // // //             value={formData.attendance_percentage}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="machine_test"
// // // //             placeholder="Machine Test"
// // // //             value={formData.machine_test}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="mcq_test"
// // // //             placeholder="MCQ Test"
// // // //             value={formData.mcq_test}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="mock_interview_score"
// // // //             placeholder="Mock Interview"
// // // //             value={formData.mock_interview_score}
// // // //             onChange={handleChange}
// // // //           />

// // // //           <div className="form-buttons">
// // // //             <button onClick={handleSubmit}>Submit</button>
// // // //             <button onClick={() => setShowForm(false)}>Back</button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <div style={{ marginTop: "20px" }}>
// // // //         <button onClick={() => setShowAll(!showAll)}>
// // // //           {showAll ? "Hide All Performances" : "View All Performances"}
// // // //         </button>
// // // //       </div>

// // // //       {showAll && (
// // // //         <table className="performance-table">
// // // //           <thead>
// // // //             <tr>
// // // //               <th>Name</th>
// // // //               <th>Attendance</th>
// // // //               <th>Machine Test</th>
// // // //               <th>MCQ Test</th>
// // // //               <th>Mock Interview</th>
// // // //               <th>Final Score</th>
// // // //               <th>Action</th>
// // // //             </tr>
// // // //           </thead>
// // // //           <tbody>
// // // //             {performances.map((p) => (
// // // //               <tr key={p.per_id}>
// // // //                 <td>{p.student_name}</td>
// // // //                 <td>{p.attendance_percentage}</td>
// // // //                 <td>{p.machine_test}</td>
// // // //                 <td>{p.mcq_test}</td>
// // // //                 <td>{p.mock_interview_score}</td>
// // // //                 <td>{p.final_score}</td>
// // // //                 <td>
// // // //                   <button onClick={() => handleForm("update", p)}>Update</button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))}
// // // //           </tbody>
// // // //         </table>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }





// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./PerformanceManagement.css";

// // // // export default function PerformanceManagement() {
// // // //   const [students, setStudents] = useState([]);
// // // //   const [selectedStudent, setSelectedStudent] = useState(null);
// // // //   const [showForm, setShowForm] = useState(false);
// // // //   const [formType, setFormType] = useState("");
// // // //   const [formData, setFormData] = useState({
// // // //     attendance_percentage: "",
// // // //     machine_test: "",
// // // //     mcq_test: "",
// // // //     mock_interview_score: ""
// // // //   });
// // // //   const [performances, setPerformances] = useState([]);
// // // //   const [showAll, setShowAll] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState(""); // 🔍 Search state

// // // //   const token = localStorage.getItem("token");

// // // //   useEffect(() => {
// // // //     fetchStudents();
// // // //     fetchAllPerformances();
// // // //   }, []);

// // // //   const fetchStudents = async () => {
// // // //     try {
// // // //       const res = await axios.get("http://localhost:4444/performance/students");
// // // //       setStudents(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const fetchAllPerformances = async () => {
// // // //     try {
// // // //       const res = await axios.get("http://localhost:4444/performance/all", {
// // // //         headers: { Authorization: `Bearer ${token}` }
// // // //       });
// // // //       setPerformances(res.data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   const handleSelectStudent = (student) => {
// // // //     const latestPerformance =
// // // //       performances
// // // //         .filter((p) => p.sid === student.sid)
// // // //         .sort((a, b) => b.per_id - a.per_id)[0] || null;

// // // //     setSelectedStudent({ ...student, performance: latestPerformance });
// // // //     setFormData({
// // // //       attendance_percentage: latestPerformance?.attendance_percentage || "",
// // // //       machine_test: latestPerformance?.machine_test || "",
// // // //       mcq_test: latestPerformance?.mcq_test || "",
// // // //       mock_interview_score: latestPerformance?.mock_interview_score || ""
// // // //     });
// // // //     setShowForm(false);
// // // //   };

// // // //   const handleForm = (type, performance = null) => {
// // // //     setFormType(type);
// // // //     if (type === "update" && performance) {
// // // //       setSelectedStudent({ ...selectedStudent, performance });
// // // //       setFormData({
// // // //         attendance_percentage: performance.attendance_percentage,
// // // //         machine_test: performance.machine_test,
// // // //         mcq_test: performance.mcq_test,
// // // //         mock_interview_score: performance.mock_interview_score
// // // //       });
// // // //     }
// // // //     setShowForm(true);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //   };

// // // //   const handleSubmit = async () => {
// // // //     try {
// // // //       const url =
// // // //         formType === "add"
// // // //           ? "/performance/add"
// // // //           : `/performance/update/${selectedStudent.performance.per_id}`;
// // // //       const method = formType === "add" ? "post" : "put";

// // // //       const dataToSend = {
// // // //         ...formData,
// // // //         attendance_percentage: Number(formData.attendance_percentage),
// // // //         machine_test: Number(formData.machine_test),
// // // //         mcq_test: Number(formData.mcq_test),
// // // //         mock_interview_score: Number(formData.mock_interview_score),
// // // //         sid: selectedStudent.sid
// // // //       };

// // // //       await axios({
// // // //         method,
// // // //         url: `http://localhost:4444${url}`,
// // // //         data: dataToSend,
// // // //         headers: { Authorization: `Bearer ${token}` }
// // // //       });

// // // //       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
// // // //       setShowForm(false);
// // // //       fetchAllPerformances(); // Refresh after update/add
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       alert(err.response?.data?.message || "Error");
// // // //     }
// // // //   };

// // // //   // 🔍 Search filter for performances
// // // //   const filteredPerformances = performances.filter((p) =>
// // // //     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <div className="performance-container">
// // // //       <h2>📊 Performance Management</h2>

// // // //       <h3>Select Student</h3>
// // // //       <ul className="student-list">
// // // //         {students.map((s) => (
// // // //           <li key={s.sid}>
// // // //             {s.name}{" "}
// // // //             <button onClick={() => handleSelectStudent(s)}>Select</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       {selectedStudent && (
// // // //         <div className="action-buttons">
// // // //           <button onClick={() => handleForm("add")}>Add Performance</button>
// // // //           {selectedStudent.performance && (
// // // //             <button
// // // //               onClick={() => handleForm("update", selectedStudent.performance)}
// // // //             >
// // // //               Update Performance
// // // //             </button>
// // // //           )}
// // // //         </div>
// // // //       )}

// // // //       {showForm && (
// // // //         <div className="performance-form">
// // // //           <h3>
// // // //             {formType === "add" ? "Add" : "Update"} Performance for{" "}
// // // //             {selectedStudent.name}
// // // //           </h3>

// // // //           <input
// // // //             type="number"
// // // //             name="attendance_percentage"
// // // //             placeholder="Attendance %"
// // // //             value={formData.attendance_percentage}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="machine_test"
// // // //             placeholder="Machine Test"
// // // //             value={formData.machine_test}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="mcq_test"
// // // //             placeholder="MCQ Test"
// // // //             value={formData.mcq_test}
// // // //             onChange={handleChange}
// // // //           />
// // // //           <input
// // // //             type="number"
// // // //             name="mock_interview_score"
// // // //             placeholder="Mock Interview"
// // // //             value={formData.mock_interview_score}
// // // //             onChange={handleChange}
// // // //           />

// // // //           <div className="form-buttons">
// // // //             <button onClick={handleSubmit}>Submit</button>
// // // //             <button onClick={() => setShowForm(false)}>Back</button>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       <div style={{ marginTop: "20px" }}>
// // // //         <button onClick={() => setShowAll(!showAll)}>
// // // //           {showAll ? "Hide All Performances" : "View All Performances"}
// // // //         </button>
// // // //       </div>

// // // //       {showAll && (
// // // //         <div>
// // // //           {/* 🔍 Search bar above table */}
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search by student name..."
// // // //             value={searchTerm}
// // // //             onChange={(e) => setSearchTerm(e.target.value)}
// // // //             className="search-bar"
// // // //           />

// // // //           <table className="performance-table">
// // // //             <thead>
// // // //               <tr>
// // // //                 <th>Name</th>
// // // //                 <th>Attendance</th>
// // // //                 <th>Machine Test</th>
// // // //                 <th>MCQ Test</th>
// // // //                 <th>Mock Interview</th>
// // // //                 <th>Final Score</th>
// // // //                 <th>Action</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {filteredPerformances.length > 0 ? (
// // // //                 filteredPerformances.map((p) => (
// // // //                   <tr key={p.per_id}>
// // // //                     <td>{p.student_name}</td>
// // // //                     <td>{p.attendance_percentage}</td>
// // // //                     <td>{p.machine_test}</td>
// // // //                     <td>{p.mcq_test}</td>
// // // //                     <td>{p.mock_interview_score}</td>
// // // //                     <td>{p.final_score}</td>
// // // //                     <td>
// // // //                       <button onClick={() => handleForm("update", p)}>
// // // //                         Update
// // // //                       </button>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))
// // // //               ) : (
// // // //                 <tr>
// // // //                   <td colSpan="7" style={{ textAlign: "center" }}>
// // // //                     No records found
// // // //                   </td>
// // // //                 </tr>
// // // //               )}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }


// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "./PerformanceManagement.css";

// // // export default function PerformanceManagement() {
// // //   const [students, setStudents] = useState([]);
// // //   const [selectedStudent, setSelectedStudent] = useState(null);
// // //   const [showForm, setShowForm] = useState(false);
// // //   const [formType, setFormType] = useState("");
// // //   const [formData, setFormData] = useState({
// // //     attendance_percentage: "",
// // //     machine_test: "",
// // //     mcq_test: "",
// // //     mock_interview_score: "",
// // //   });
// // //   const [performances, setPerformances] = useState([]);
// // //   const [showAll, setShowAll] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState(""); // performance search
// // //   const [searchStudent, setSearchStudent] = useState(""); // student search

// // //   const token = localStorage.getItem("token");

// // //   useEffect(() => {
// // //     fetchStudents();
// // //     fetchAllPerformances();
// // //   }, []);

// // //   const fetchStudents = async () => {
// // //     try {
// // //       const res = await axios.get("http://localhost:4444/performance/students");
// // //       setStudents(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const fetchAllPerformances = async () => {
// // //     try {
// // //       const res = await axios.get("http://localhost:4444/performance/all", {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setPerformances(res.data);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   const handleSelectStudent = (student) => {
// // //     const latestPerformance =
// // //       performances
// // //         .filter((p) => p.sid === student.sid)
// // //         .sort((a, b) => b.per_id - a.per_id)[0] || null;

// // //     setSelectedStudent({ ...student, performance: latestPerformance });
// // //     setFormData({
// // //       attendance_percentage: latestPerformance?.attendance_percentage || "",
// // //       machine_test: latestPerformance?.machine_test || "",
// // //       mcq_test: latestPerformance?.mcq_test || "",
// // //       mock_interview_score: latestPerformance?.mock_interview_score || "",
// // //     });
// // //     setShowForm(false);
// // //   };

// // //   const handleForm = (type, performance = null) => {
// // //     setFormType(type);
// // //     if (type === "update" && performance) {
// // //       setSelectedStudent({ ...selectedStudent, performance });
// // //       setFormData({
// // //         attendance_percentage: performance.attendance_percentage,
// // //         machine_test: performance.machine_test,
// // //         mcq_test: performance.mcq_test,
// // //         mock_interview_score: performance.mock_interview_score,
// // //       });
// // //     }
// // //     setShowForm(true);
// // //   };

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const url =
// // //         formType === "add"
// // //           ? "/performance/add"
// // //           : `/performance/update/${selectedStudent.performance.per_id}`;
// // //       const method = formType === "add" ? "post" : "put";

// // //       const dataToSend = {
// // //         ...formData,
// // //         attendance_percentage: Number(formData.attendance_percentage),
// // //         machine_test: Number(formData.machine_test),
// // //         mcq_test: Number(formData.mcq_test),
// // //         mock_interview_score: Number(formData.mock_interview_score),
// // //         sid: selectedStudent.sid,
// // //       };

// // //       await axios({
// // //         method,
// // //         url: `http://localhost:4444${url}`,
// // //         data: dataToSend,
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });

// // //       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
// // //       setShowForm(false);
// // //       fetchAllPerformances(); // refresh after update/add
// // //     } catch (err) {
// // //       console.error(err);
// // //       alert(err.response?.data?.message || "Error");
// // //     }
// // //   };

// // //   // filters
// // //   const filteredPerformances = performances.filter((p) =>
// // //     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const filteredStudents = students.filter((s) =>
// // //     s.name.toLowerCase().includes(searchStudent.toLowerCase())
// // //   );

// // //   return (
// // //     <div className="performance-container">
// // //       <h2>📊 Performance Management</h2>

// // //       {/* Student Table */}
// // //       <h3>Select Student</h3>
// // //       <input
// // //         type="text"
// // //         placeholder="Search student..."
// // //         value={searchStudent}
// // //         onChange={(e) => setSearchStudent(e.target.value)}
// // //         className="search-bar"
// // //       />

// // //       <table className="student-table">
// // //         <thead>
// // //           <tr>
// // //             <th>Name</th>
// // //             <th>Select</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {filteredStudents.length > 0 ? (
// // //             filteredStudents.map((s) => (
// // //               <tr key={s.sid}>
// // //                 <td>{s.name}</td>
               
// // //                 <td>
// // //                   <button onClick={() => handleSelectStudent(s)}>Select</button>
// // //                 </td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="3" style={{ textAlign: "center" }}>
// // //                 No students found
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>

// // //       {selectedStudent && (
// // //         <div className="action-buttons">
// // //           <button onClick={() => handleForm("add")}>Add Performance</button>
// // //           {selectedStudent.performance && (
// // //             <button
// // //               onClick={() => handleForm("update", selectedStudent.performance)}
// // //             >
// // //               Update Performance
// // //             </button>
// // //           )}
// // //         </div>
// // //       )}

// // //       {showForm && (
// // //         <div className="performance-form">
// // //           <h3>
// // //             {formType === "add" ? "Add" : "Update"} Performance for{" "}
// // //             {selectedStudent.name}
// // //           </h3>

// // //           <input
// // //             type="number"
// // //             name="attendance_percentage"
// // //             placeholder="Attendance %"
// // //             value={formData.attendance_percentage}
// // //             onChange={handleChange}
// // //           />
// // //           <input
// // //             type="number"
// // //             name="machine_test"
// // //             placeholder="Machine Test"
// // //             value={formData.machine_test}
// // //             onChange={handleChange}
// // //           />
// // //           <input
// // //             type="number"
// // //             name="mcq_test"
// // //             placeholder="MCQ Test"
// // //             value={formData.mcq_test}
// // //             onChange={handleChange}
// // //           />
// // //           <input
// // //             type="number"
// // //             name="mock_interview_score"
// // //             placeholder="Mock Interview"
// // //             value={formData.mock_interview_score}
// // //             onChange={handleChange}
// // //           />

// // //           <div className="form-buttons">
// // //             <button onClick={handleSubmit}>Submit</button>
// // //             <button onClick={() => setShowForm(false)}>Back</button>
// // //           </div>
// // //         </div>
// // //       )}

// // //       <div style={{ marginTop: "20px" }}>
// // //         <button onClick={() => setShowAll(!showAll)}>
// // //           {showAll ? "Hide All Performances" : "View All Performances"}
// // //         </button>
// // //       </div>

// // //       {showAll && (
// // //         <div>
// // //           <input
// // //             type="text"
// // //             placeholder="Search by student name..."
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //             className="search-bar"
// // //           />

// // //           <table className="performance-table">
// // //             <thead>
// // //               <tr>
// // //                 <th>Name</th>
// // //                 <th>Attendance</th>
// // //                 <th>Machine Test</th>
// // //                 <th>MCQ Test</th>
// // //                 <th>Mock Interview</th>
// // //                 <th>Final Score</th>
// // //                 <th>Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {filteredPerformances.length > 0 ? (
// // //                 filteredPerformances.map((p) => (
// // //                   <tr key={p.per_id}>
// // //                     <td>{p.student_name}</td>
// // //                     <td>{p.attendance_percentage}</td>
// // //                     <td>{p.machine_test}</td>
// // //                     <td>{p.mcq_test}</td>
// // //                     <td>{p.mock_interview_score}</td>
// // //                     <td>{p.final_score}</td>
// // //                     <td>
// // //                       <button onClick={() => handleForm("update", p)}>
// // //                         Update
// // //                       </button>
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               ) : (
// // //                 <tr>
// // //                   <td colSpan="7" style={{ textAlign: "center" }}>
// // //                     No records found
// // //                   </td>
// // //                 </tr>
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }



// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./PerformanceManagement.css";

// // export default function PerformanceManagement() {
// //   const [students, setStudents] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [showForm, setShowForm] = useState(false);
// //   const [formType, setFormType] = useState("");
// //   const [formData, setFormData] = useState({
// //     attendance_percentage: "",
// //     machine_test: "",
// //     mcq_test: "",
// //     mock_interview_score: "",
// //   });
// //   const [performances, setPerformances] = useState([]);
// //   const [showAll, setShowAll] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchStudent, setSearchStudent] = useState("");

// //   // Pagination state
// //   const [currentPageStudents, setCurrentPageStudents] = useState(5); 
// //   const [currentPagePerformances, setCurrentPagePerformances] = useState(5);

// //   const studentsPerPage = 10;
// //   const performancesPerPage = 10;

// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     fetchStudents();
// //     fetchAllPerformances();
// //   }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:4444/performance/students");
// //       setStudents(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const fetchAllPerformances = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:4444/performance/all", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       // Sort by created_at descending
// //       const sorted = res.data.sort(
// //         (a, b) => new Date(b.created_at) - new Date(a.created_at)
// //       );
// //       setPerformances(sorted);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleSelectStudent = (student) => {
// //     const latestPerformance =
// //       performances.filter((p) => p.sid === student.sid)[0] || null;

// //     setSelectedStudent({ ...student, performance: latestPerformance });
// //     setFormData({
// //       attendance_percentage: latestPerformance?.attendance_percentage || "",
// //       machine_test: latestPerformance?.machine_test || "",
// //       mcq_test: latestPerformance?.mcq_test || "",
// //       mock_interview_score: latestPerformance?.mock_interview_score || "",
// //     });
// //     setShowForm(false);
// //   };

// //   const handleForm = (type, performance = null) => {
// //     setFormType(type);
// //     if (type === "update" && performance) {
// //       setSelectedStudent({ ...selectedStudent, performance });
// //       setFormData({
// //         attendance_percentage: performance.attendance_percentage,
// //         machine_test: performance.machine_test,
// //         mcq_test: performance.mcq_test,
// //         mock_interview_score: performance.mock_interview_score,
// //       });
// //     }
// //     setShowForm(true);
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const url =
// //         formType === "add"
// //           ? "/performance/add"
// //           : `/performance/update/${selectedStudent.performance.per_id}`;
// //       const method = formType === "add" ? "post" : "put";

// //       const dataToSend = {
// //         ...formData,
// //         attendance_percentage: Number(formData.attendance_percentage),
// //         machine_test: Number(formData.machine_test),
// //         mcq_test: Number(formData.mcq_test),
// //         mock_interview_score: Number(formData.mock_interview_score),
// //         sid: selectedStudent.sid,
// //       };

// //       await axios({
// //         method,
// //         url: `http://localhost:4444${url}`,
// //         data: dataToSend,
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
// //       setShowForm(false);
// //       fetchAllPerformances();
// //     } catch (err) {
// //       console.error(err);
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   // filters
// //   const filteredPerformances = performances.filter((p) =>
// //     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const filteredStudents = students.filter((s) =>
// //     s.name.toLowerCase().includes(searchStudent.toLowerCase())
// //   );

// //   // pagination logic
// //   const indexOfLastStudent = currentPageStudents * studentsPerPage;
// //   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
// //   const currentStudents = filteredStudents.slice(
// //     indexOfFirstStudent,
// //     indexOfLastStudent
// //   );

// //   const indexOfLastPerformance = currentPagePerformances * performancesPerPage;
// //   const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;
// //   const currentPerformances = filteredPerformances.slice(
// //     indexOfFirstPerformance,
// //     indexOfLastPerformance
// //   );

// //   return (
// //     <div className="performance-container">
// //       <h2>📊 Performance Management</h2>

// //       {/* Student Table */}
// //       <h3>Select Student</h3>
// //       <input
// //         type="text"
// //         placeholder="Search student..."
// //         value={searchStudent}
// //         onChange={(e) => setSearchStudent(e.target.value)}
// //         className="search-bar"
// //       />

// //       <table className="student-table">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Select</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {currentStudents.length > 0 ? (
// //             currentStudents.map((s) => (
// //               <tr key={s.sid}>
// //                 <td>{s.name}</td>
// //                 <td>
// //                   <button onClick={() => handleSelectStudent(s)}>Select</button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="3" style={{ textAlign: "center" }}>
// //                 No students found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>

// //       {/* Student pagination */}
// //       <div className="pagination">
// //         <button
// //           onClick={() => setCurrentPageStudents(currentPageStudents - 1)}
// //           disabled={currentPageStudents === 1}
// //         >
// //           Prev
// //         </button>
// //         <span>Page {currentPageStudents}</span>
// //         <button
// //           onClick={() => setCurrentPageStudents(currentPageStudents + 1)}
// //           disabled={indexOfLastStudent >= filteredStudents.length}
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {selectedStudent && (
// //         <div className="action-buttons">
// //           <button onClick={() => handleForm("add")}>Add Performance</button>
// //           {selectedStudent.performance && (
// //             <button
// //               onClick={() => handleForm("update", selectedStudent.performance)}
// //             >
// //               Update Performance
// //             </button>
// //           )}
// //         </div>
// //       )}

// //       {showForm && (
// //         <div className="performance-form">
// //           <h3>
// //             {formType === "add" ? "Add" : "Update"} Performance for{" "}
// //             {selectedStudent.name}
// //           </h3>

// //           <input
// //             type="number"
// //             name="attendance_percentage"
// //             placeholder="Attendance %"
// //             value={formData.attendance_percentage}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="machine_test"
// //             placeholder="Machine Test"
// //             value={formData.machine_test}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="mcq_test"
// //             placeholder="MCQ Test"
// //             value={formData.mcq_test}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="mock_interview_score"
// //             placeholder="Mock Interview"
// //             value={formData.mock_interview_score}
// //             onChange={handleChange}
// //           />

// //           <div className="form-buttons">
// //             <button onClick={handleSubmit}>Submit</button>
// //             <button onClick={() => setShowForm(false)}>Back</button>
// //           </div>
// //         </div>
// //       )}

// //       <div style={{ marginTop: "20px" }}>
// //         <button onClick={() => setShowAll(!showAll)}>
// //           {showAll ? "Hide All Performances" : "View All Performances"}
// //         </button>
// //       </div>

// //       {showAll && (
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Search by student name..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="search-bar"
// //           />

// //           <table className="performance-table">
// //             <thead>
// //               <tr>
// //                 <th>Name</th>
// //                 <th>Attendance</th>
// //                 <th>Machine Test</th>
// //                 <th>MCQ Test</th>
// //                 <th>Mock Interview</th>
// //                 <th>Final Score</th>
// //                 <th>Added On</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {currentPerformances.length > 0 ? (
// //                 currentPerformances.map((p) => (
// //                   <tr
// //                     key={p.per_id}
// //                     style={{
// //                       backgroundColor:
// //                         p.per_id === selectedStudent?.performance?.per_id
// //                           ? "#ffe0b2"
// //                           : "inherit",
// //                     }}
// //                   >
// //                     <td>{p.student_name}</td>
// //                     <td>{p.attendance_percentage}</td>
// //                     <td>{p.machine_test}</td>
// //                     <td>{p.mcq_test}</td>
// //                     <td>{p.mock_interview_score}</td>
// //                     <td>{p.final_score}</td>
// //                     <td>{new Date(p.created_at).toLocaleString()}</td>
// //                     <td>
// //                       <button onClick={() => handleForm("update", p)}>
// //                         Update
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan="8" style={{ textAlign: "center" }}>
// //                     No records found
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>

// //           {/* Performance pagination */}
// //           <div className="pagination">
// //             <button
// //               onClick={() =>
// //                 setCurrentPagePerformances(currentPagePerformances - 1)
// //               }
// //               disabled={currentPagePerformances === 1}
// //             >
// //               Prev
// //             </button>
// //             <span>Page {currentPagePerformances}</span>
// //             <button
// //               onClick={() =>
// //                 setCurrentPagePerformances(currentPagePerformances + 1)
// //               }
// //               disabled={indexOfLastPerformance >= filteredPerformances.length}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }




// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./PerformanceManagement.css";

// // export default function PerformanceManagement() {
// //   const [students, setStudents] = useState([]);
// //   const [selectedStudent, setSelectedStudent] = useState(null);
// //   const [showForm, setShowForm] = useState(false);
// //   const [formType, setFormType] = useState("");
// //   const [formData, setFormData] = useState({
// //     attendance_percentage: "",
// //     machine_test: "",
// //     mcq_test: "",
// //     mock_interview_score: "",
// //     created_at: "",
// //   });
// //   const [performances, setPerformances] = useState([]);
// //   const [showAll, setShowAll] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [searchStudent, setSearchStudent] = useState("");

// //   // Pagination state
// //   const [currentPageStudents, setCurrentPageStudents] = useState(1);
// //   const [currentPagePerformances, setCurrentPagePerformances] = useState(1);

// //   const studentsPerPage = 5; // init page 5 students
// //   const performancesPerPage = 5;

// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     fetchStudents();
// //     fetchAllPerformances();
// //   }, []);

// //   const fetchStudents = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:4444/performance/students");
// //       setStudents(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const fetchAllPerformances = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:4444/performance/all", {
// //         headers: { Authorization: `Bearer ${token}` },
// //       });
// //       setPerformances(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   const handleSelectStudent = (student) => {
// //     const latestPerformance =
// //       performances
// //         .filter((p) => p.sid === student.sid)
// //         .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;

// //     setSelectedStudent({ ...student, performance: latestPerformance });
// //     setFormData({
// //       attendance_percentage: latestPerformance?.attendance_percentage || "",
// //       machine_test: latestPerformance?.machine_test || "",
// //       mcq_test: latestPerformance?.mcq_test || "",
// //       mock_interview_score: latestPerformance?.mock_interview_score || "",
// //       created_at: latestPerformance?.created_at || "",
// //     });
// //     setShowForm(false);
// //   };

// //   const handleForm = (type, performance = null) => {
// //     setFormType(type);
// //     if (type === "update" && performance) {
// //       setSelectedStudent({ ...selectedStudent, performance });
// //       setFormData({
// //         attendance_percentage: performance.attendance_percentage,
// //         machine_test: performance.machine_test,
// //         mcq_test: performance.mcq_test,
// //         mock_interview_score: performance.mock_interview_score,
// //         created_at: performance.created_at,
// //       });
// //     }
// //     setShowForm(true);
// //   };

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const url =
// //         formType === "add"
// //           ? "/performance/add"
// //           : `/performance/update/${selectedStudent.performance.per_id}`;
// //       const method = formType === "add" ? "post" : "put";

// //       const dataToSend = {
// //         ...formData,
// //         attendance_percentage: Number(formData.attendance_percentage),
// //         machine_test: Number(formData.machine_test),
// //         mcq_test: Number(formData.mcq_test),
// //         mock_interview_score: Number(formData.mock_interview_score),
// //         sid: selectedStudent.sid,
// //       };

// //       await axios({
// //         method,
// //         url: `http://localhost:4444${url}`,
// //         data: dataToSend,
// //         headers: { Authorization: `Bearer ${token}` },
// //       });

// //       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
// //       setShowForm(false);
// //       fetchAllPerformances();
// //     } catch (err) {
// //       console.error(err);
// //       alert(err.response?.data?.message || "Error");
// //     }
// //   };

// //   // Filters
// //   const filteredPerformances = performances.filter((p) =>
// //     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );
// //   const filteredStudents = students.filter((s) =>
// //     s.name.toLowerCase().includes(searchStudent.toLowerCase())
// //   );

// //   // Pagination
// //   const indexOfLastStudent = currentPageStudents * studentsPerPage;
// //   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
// //   const currentStudents = filteredStudents.slice(
// //     indexOfFirstStudent,
// //     indexOfLastStudent
// //   );

// //   const indexOfLastPerformance = currentPagePerformances * performancesPerPage;
// //   const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;
// //   const currentPerformances = filteredPerformances.slice(
// //     indexOfFirstPerformance,
// //     indexOfLastPerformance
// //   );

// //   return (
// //     <div className="performance-container">
// //       <h2>📊 Performance Management</h2>

// //       {/* Student Table */}
// //       <h3>Select Student</h3>
// //       <input
// //         type="text"
// //         placeholder="Search student..."
// //         value={searchStudent}
// //         onChange={(e) => setSearchStudent(e.target.value)}
// //         className="search-bar"
// //       />

// //       <table className="student-table">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Select</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {currentStudents.length > 0 ? (
// //             currentStudents.map((s) => (
// //               <tr key={s.sid}>
// //                 <td>{s.name}</td>
// //                 <td>
// //                   <button onClick={() => handleSelectStudent(s)}>Select</button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="3" style={{ textAlign: "center" }}>
// //                 No students found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>

// //       {/* Student pagination */}
// //       <div className="pagination">
// //         <button
// //           onClick={() => setCurrentPageStudents(currentPageStudents - 1)}
// //           disabled={currentPageStudents === 1}
// //         >
// //           Prev
// //         </button>
// //         <span>Page {currentPageStudents}</span>
// //         <button
// //           onClick={() =>
// //             setCurrentPageStudents(currentPageStudents + 1)
// //           }
// //           disabled={indexOfLastStudent >= filteredStudents.length}
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {/* Action buttons */}
// //       {selectedStudent && (
// //         <div className="action-buttons">
// //           <button onClick={() => handleForm("add")}>Add Performance</button>
// //           {selectedStudent.performance && (
// //             <button
// //               onClick={() => handleForm("update", selectedStudent.performance)}
// //             >
// //               Update Performance
// //             </button>
// //           )}
// //         </div>
// //       )}

// //       {/* Add / Update Form */}
// //       {showForm && (
// //         <div className="performance-form">
// //           <h3>
// //             {formType === "add" ? "Add" : "Update"} Performance for{" "}
// //             {selectedStudent.name}
// //           </h3>

// //           <input
// //             type="number"
// //             name="attendance_percentage"
// //             placeholder="Attendance %"
// //             value={formData.attendance_percentage}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="machine_test"
// //             placeholder="Machine Test"
// //             value={formData.machine_test}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="mcq_test"
// //             placeholder="MCQ Test"
// //             value={formData.mcq_test}
// //             onChange={handleChange}
// //           />
// //           <input
// //             type="number"
// //             name="mock_interview_score"
// //             placeholder="Mock Interview"
// //             value={formData.mock_interview_score}
// //             onChange={handleChange}
// //           />

// //           <div className="form-buttons">
// //             <button onClick={handleSubmit}>Submit</button>
// //             <button onClick={() => setShowForm(false)}>Back</button>
// //           </div>
// //         </div>
// //       )}

// //       {/* View All Performances */}
// //       <div style={{ marginTop: "20px" }}>
// //         <button onClick={() => setShowAll(!showAll)}>
// //           {showAll ? "Hide All Performances" : "View All Performances"}
// //         </button>
// //       </div>

// //       {showAll && (
// //         <div>
// //           <input
// //             type="text"
// //             placeholder="Search by student name..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="search-bar"
// //           />

// //           <table className="performance-table">
// //             <thead>
// //               <tr>
// //                 <th>Name</th>
// //                 <th>Attendance</th>
// //                 <th>Machine Test</th>
// //                 <th>MCQ Test</th>
// //                 <th>Mock Interview</th>
// //                 <th>Final Score</th>
// //                 <th>Added On</th>
// //                 <th>Action</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               {currentPerformances.length > 0 ? (
// //                 currentPerformances.map((p) => (
// //               <tr key={p.per_id}>
// //   <td>{p.student_name}</td>
// //   <td>{p.attendance_percentage}</td>
// //   <td>{p.machine_test}</td>
// //   <td>{p.mcq_test}</td>
// //   <td>{p.mock_interview_score}</td>
// //   <td>{p.final_score}</td>
// // <td>
// //   {p.created_at
// //     ? (() => {
// //         const d = new Date(p.created_at);
// //         return isNaN(d.getTime()) ? "-" : d.toLocaleString("en-IN", {
// //           day: "2-digit",
// //           month: "short",
// //           year: "numeric",
// //           hour: "2-digit",
// //           minute: "2-digit",
// //         });
// //       })()
// //     : "-"}
// // </td>


// //   <td>
// //     <button onClick={() => handleForm("update", p)}>Update</button>
// //   </td>
// // </tr>

// //                 ))
// //               ) : (
// //                 <tr>
// //                   <td colSpan="8" style={{ textAlign: "center" }}>
// //                     No records found
// //                   </td>
// //                 </tr>
// //               )}
// //             </tbody>
// //           </table>

// //           {/* Performance Pagination */}
// //           <div className="pagination">
// //             <button
// //               onClick={() =>
// //                 setCurrentPagePerformances(currentPagePerformances - 1)
// //               }
// //               disabled={currentPagePerformances === 1}
// //             >
// //               Prev
// //             </button>
// //             <span>Page {currentPagePerformances}</span>
// //             <button
// //               onClick={() =>
// //                 setCurrentPagePerformances(currentPagePerformances + 1)
// //               }
// //               disabled={indexOfLastPerformance >= filteredPerformances.length}
// //             >
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }






// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function PerformanceManagement() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState("");
//   const [formData, setFormData] = useState({
//     attendance_percentage: "",
//     machine_test: "",
//     mcq_test: "",
//     mock_interview_score: "",
//     created_at: "",
//   });
//   const [performances, setPerformances] = useState([]);
//   const [showAll, setShowAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchStudent, setSearchStudent] = useState("");

//   const [currentPageStudents, setCurrentPageStudents] = useState(1);
//   const [currentPagePerformances, setCurrentPagePerformances] = useState(1);

//   const studentsPerPage = 5;
//   const performancesPerPage = 5;
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchStudents();
//     fetchAllPerformances();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:4444/performance/students");
//       setStudents(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchAllPerformances = async () => {
//     try {
//       const res = await axios.get("http://localhost:4444/performance/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setPerformances(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSelectStudent = (student) => {
//     const latestPerformance =
//       performances
//         .filter((p) => p.sid === student.sid)
//         .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;

//     setSelectedStudent({ ...student, performance: latestPerformance });
//     setFormData({
//       attendance_percentage: latestPerformance?.attendance_percentage || "",
//       machine_test: latestPerformance?.machine_test || "",
//       mcq_test: latestPerformance?.mcq_test || "",
//       mock_interview_score: latestPerformance?.mock_interview_score || "",
//       created_at: latestPerformance?.created_at || "",
//     });
//     setShowForm(false);
//   };

//   const handleForm = (type, performance = null) => {
//     setFormType(type);
//     if (type === "update" && performance) {
//       setSelectedStudent({ ...selectedStudent, performance });
//       setFormData({
//         attendance_percentage: performance.attendance_percentage,
//         machine_test: performance.machine_test,
//         mcq_test: performance.mcq_test,
//         mock_interview_score: performance.mock_interview_score,
//         created_at: performance.created_at,
//       });
//     }
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const url =
//         formType === "add"
//           ? "/performance/add"
//           : `/performance/update/${selectedStudent.performance.per_id}`;
//       const method = formType === "add" ? "post" : "put";

//       const dataToSend = {
//         ...formData,
//         attendance_percentage: Number(formData.attendance_percentage),
//         machine_test: Number(formData.machine_test),
//         mcq_test: Number(formData.mcq_test),
//         mock_interview_score: Number(formData.mock_interview_score),
//         sid: selectedStudent.sid,
//       };

//       await axios({
//         method,
//         url: `http://localhost:4444${url}`,
//         data: dataToSend,
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
//       setShowForm(false);
//       fetchAllPerformances();
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   const filteredPerformances = performances.filter((p) =>
//     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   const filteredStudents = students.filter((s) =>
//     s.name.toLowerCase().includes(searchStudent.toLowerCase())
//   );

//   const indexOfLastStudent = currentPageStudents * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = filteredStudents.slice(
//     indexOfFirstStudent,
//     indexOfLastStudent
//   );

//   const indexOfLastPerformance = currentPagePerformances * performancesPerPage;
//   const indexOfFirstPerformance = indexOfLastPerformance - performancesPerPage;
//   const currentPerformances = filteredPerformances.slice(
//     indexOfFirstPerformance,
//     indexOfLastPerformance
//   );

//   return (
//     <div className="container my-4">
//       <h2 className="text-primary text-center mb-4">📊 Performance Management</h2>

//       {/* Student Search */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search student..."
//           value={searchStudent}
//           onChange={(e) => setSearchStudent(e.target.value)}
//         />
//       </div>

//       {/* Student Table */}
//       <table className="table table-striped table-hover shadow-sm">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentStudents.length > 0 ? (
//             currentStudents.map((s) => (
//               <tr key={s.sid}>
//                 <td>{s.name}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-success"
//                     onClick={() => handleSelectStudent(s)}
//                   >
                   
//                    click here
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2" className="text-center">
//                 No students found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between mb-4">
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => setCurrentPageStudents(currentPageStudents - 1)}
//           disabled={currentPageStudents === 1}
//         >
//           Prev
//         </button>
//         <span className="align-self-center">Page {currentPageStudents}</span>
//         <button
//           className="btn btn-outline-primary"
//           onClick={() =>
//             setCurrentPageStudents(currentPageStudents + 1)
//           }
//           disabled={indexOfLastStudent >= filteredStudents.length}
//         >
//           Next
//         </button>
//       </div>

//       {/* Action Buttons */}
//       {selectedStudent && (
//         <div className="mb-4">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => handleForm("add")}
//           >
//             Add Performance
//           </button>
//           {selectedStudent.performance && (
//             <button
//               className="btn btn-warning text-white"
//               onClick={() => handleForm("update", selectedStudent.performance)}
//             >
//               Update Performance
//             </button>
//           )}
//         </div>
//       )}

//       {/* Add / Update Form */}
//       {showForm && (
//         <div className="card p-4 mb-4 shadow-sm">
//           <h5 className="mb-3">
//             {formType === "add" ? "Add" : "Update"} Performance for{" "}
//             {selectedStudent.name}
//           </h5>

//           <div className="row g-2">
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="attendance_percentage"
//                 className="form-control"
//                 placeholder="Attendance %"
//                 value={formData.attendance_percentage}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="machine_test"
//                 className="form-control"
//                 placeholder="Machine Test"
//                 value={formData.machine_test}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="mcq_test"
//                 className="form-control"
//                 placeholder="MCQ Test"
//                 value={formData.mcq_test}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="mock_interview_score"
//                 className="form-control"
//                 placeholder="Mock Interview"
//                 value={formData.mock_interview_score}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="mt-3">
//             <button className="btn btn-success me-2" onClick={handleSubmit}>
//               Submit
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setShowForm(false)}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}

//       {/* View All Performances */}
//       <div className="mb-3">
//         <button
//           className="btn btn-info text-white"
//           onClick={() => setShowAll(!showAll)}
//         >
//           {showAll ? "Hide All Performances" : "View All Performances"}
//         </button>
//       </div>

//       {showAll && (
//         <div>
//           <input
//             type="text"
//             className="form-control mb-3"
//             placeholder="Search by student name..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />

//           <table className="table table-bordered table-hover shadow-sm">
//             <thead className="table-dark">
//               <tr>
//                 <th>Name</th>
//                 <th>Attendance</th>
//                 <th>Machine Test</th>
//                 <th>MCQ Test</th>
//                 <th>Mock Interview</th>
//                 <th>Final Score</th>
//                 <th>Added On</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {currentPerformances.length > 0 ? (
//                 currentPerformances.map((p) => (
//                   <tr key={p.per_id}>
//                     <td>{p.student_name}</td>
//                     <td>{p.attendance_percentage}</td>
//                     <td>{p.machine_test}</td>
//                     <td>{p.mcq_test}</td>
//                     <td>{p.mock_interview_score}</td>
//                     <td>{p.final_score}</td>
//                     <td>
//                       {p.created_at
//                         ? new Date(p.created_at).toLocaleString("en-IN", {
//                             day: "2-digit",
//                             month: "short",
//                             year: "numeric",
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })
//                         : "-"}
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-warning btn-sm text-white"
//                         onClick={() => handleForm("update", p)}
//                       >
//                         Update
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="8" className="text-center">
//                     No records found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>

//           {/* Pagination */}
//           <div className="d-flex justify-content-between">
//             <button
//               className="btn btn-outline-primary"
//               onClick={() =>
//                 setCurrentPagePerformances(currentPagePerformances - 1)
//               }
//               disabled={currentPagePerformances === 1}
//             >
//               Prev
//             </button>
//             <span className="align-self-center">Page {currentPagePerformances}</span>
//             <button
//               className="btn btn-outline-primary"
//               onClick={() =>
//                 setCurrentPagePerformances(currentPagePerformances + 1)
//               }
//               disabled={indexOfLastPerformance >= filteredPerformances.length}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }









// src/components/PerformanceManagement.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";

// export default function PerformanceManagement() {
//   const [students, setStudents] = useState([]);
//   const [selectedStudent, setSelectedStudent] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formType, setFormType] = useState("");
//   const [formData, setFormData] = useState({
//     attendance_percentage: "",
//     machine_test: "",
//     mcq_test: "",
//     mock_interview_score: "",
//     created_at: "",
//   });
//   const [performances, setPerformances] = useState([]);
//   const [searchStudent, setSearchStudent] = useState("");

//   const [currentPageStudents, setCurrentPageStudents] = useState(1);
//   const studentsPerPage = 5;

//   const token = localStorage.getItem("token");
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudents();
//     fetchAllPerformances();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("http://localhost:4444/performance/students");
//       setStudents(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const fetchAllPerformances = async () => {
//     try {
//       const res = await axios.get("http://localhost:4444/performance/all", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setPerformances(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleSelectStudent = (student) => {
//     const latestPerformance =
//       performances
//         .filter((p) => p.sid === student.sid)
//         .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;

//     setSelectedStudent({ ...student, performance: latestPerformance });
//     setFormData({
//       attendance_percentage: latestPerformance?.attendance_percentage || "",
//       machine_test: latestPerformance?.machine_test || "",
//       mcq_test: latestPerformance?.mcq_test || "",
//       mock_interview_score: latestPerformance?.mock_interview_score || "",
//       created_at: latestPerformance?.created_at || "",
//     });
//     setShowForm(false);
//   };

//   const handleForm = (type, performance = null) => {
//     setFormType(type);
//     if (type === "update" && performance) {
//       setSelectedStudent({ ...selectedStudent, performance });
//       setFormData({
//         attendance_percentage: performance.attendance_percentage,
//         machine_test: performance.machine_test,
//         mcq_test: performance.mcq_test,
//         mock_interview_score: performance.mock_interview_score,
//         created_at: performance.created_at,
//       });
//     }
//     setShowForm(true);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const url =
//         formType === "add"
//           ? "/performance/add"
//           : `/performance/update/${selectedStudent.performance.per_id}`;
//       const method = formType === "add" ? "post" : "put";

//       const dataToSend = {
//         ...formData,
//         attendance_percentage: Number(formData.attendance_percentage),
//         machine_test: Number(formData.machine_test),
//         mcq_test: Number(formData.mcq_test),
//         mock_interview_score: Number(formData.mock_interview_score),
//         sid: selectedStudent.sid,
//       };

//       await axios({
//         method,
//         url: `http://localhost:4444${url}`,
//         data: dataToSend,
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
//       setShowForm(false);
//       fetchAllPerformances();
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   const filteredStudents = students.filter((s) =>
//     s.name.toLowerCase().includes(searchStudent.toLowerCase())
//   );

//   const indexOfLastStudent = currentPageStudents * studentsPerPage;
//   const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
//   const currentStudents = filteredStudents.slice(
//     indexOfFirstStudent,
//     indexOfLastStudent
//   );

//   return (
//     <div className="container my-4">
//       <h2 className="text-primary text-center mb-4">📊 Performance Management</h2>

//       {/* Student Search */}
//       <div className="mb-3">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search student..."
//           value={searchStudent}
//           onChange={(e) => setSearchStudent(e.target.value)}
//         />
//       </div>

//       {/* Student Table */}
//       <table className="table table-striped table-hover shadow-sm">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentStudents.length > 0 ? (
//             currentStudents.map((s) => (
//               <tr key={s.sid}>
//                 <td>{s.name}</td>
//                 <td>
//                   <button
//                     className="btn btn-sm btn-success"
//                     onClick={() => handleSelectStudent(s)}
//                   >
//                     Click here
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="2" className="text-center">
//                 No students found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between mb-4">
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => setCurrentPageStudents(currentPageStudents - 1)}
//           disabled={currentPageStudents === 1}
//         >
//           Prev
//         </button>
//         <span className="align-self-center">Page {currentPageStudents}</span>
//         <button
//           className="btn btn-outline-primary"
//           onClick={() =>
//             setCurrentPageStudents(currentPageStudents + 1)
//           }
//           disabled={indexOfLastStudent >= filteredStudents.length}
//         >
//           Next
//         </button>
//       </div>

//       {/* Action Buttons */}
//       {selectedStudent && (
//         <div className="mb-4">
//           <button
//             className="btn btn-primary me-2"
//             onClick={() => handleForm("add")}
//           >
//             Add Performance
//           </button>
//           {selectedStudent.performance && (
//             <button
//               className="btn btn-warning text-white"
//               onClick={() => handleForm("update", selectedStudent.performance)}
//             >
//               Update Performance
//             </button>
//           )}
//         </div>
//       )}

//       {/* Add / Update Form */}
//       {showForm && (
//         <div className="card p-4 mb-4 shadow-sm">
//           <h5 className="mb-3">
//             {formType === "add" ? "Add" : "Update"} Performance for{" "}
//             {selectedStudent.name}
//           </h5>

//           <div className="row g-2">
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="attendance_percentage"
//                 className="form-control"
//                 placeholder="Attendance %"
//                 value={formData.attendance_percentage}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="machine_test"
//                 className="form-control"
//                 placeholder="Machine Test"
//                 value={formData.machine_test}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="mcq_test"
//                 className="form-control"
//                 placeholder="MCQ Test"
//                 value={formData.mcq_test}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-3">
//               <input
//                 type="number"
//                 name="mock_interview_score"
//                 className="form-control"
//                 placeholder="Mock Interview"
//                 value={formData.mock_interview_score}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="mt-3">
//             <button className="btn btn-success me-2" onClick={handleSubmit}>
//               Submit
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => setShowForm(false)}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}

//       {/* View All Performances → दुसऱ्या page वर */}
//       <div className="mb-3">
//         <button
//           className="btn btn-info text-white"
//           onClick={() => navigate("/performances")}
//         >
//           View All Performances
//         </button>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function PerformanceManagement() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [formData, setFormData] = useState({
    attendance_percentage: "",
    machine_test: "",
    mcq_test: "",
    mock_interview_score: "",
    created_at: "",
  });
  const [performances, setPerformances] = useState([]);
  const [searchStudent, setSearchStudent] = useState("");

  const [currentPageStudents, setCurrentPageStudents] = useState(1);
  const studentsPerPage = 5;

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetchStudents();
    fetchAllPerformances();
  }, []);

  useEffect(() => {
    // Check if redirected from PerformanceList
    const params = new URLSearchParams(location.search);
    const sid = params.get("sid");
    if (sid && students.length > 0) {
      const student = students.find((s) => s.sid === Number(sid));
      if (student) handleSelectStudent(student);
      setFormType("update");
      setShowForm(true);
    }
  }, [students, location.search]);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:4444/performance/students");
      setStudents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchAllPerformances = async () => {
    try {
      const res = await axios.get("http://localhost:4444/performance/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPerformances(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSelectStudent = (student) => {
    const latestPerformance =
      performances
        .filter((p) => p.sid === student.sid)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))[0] || null;

    setSelectedStudent({ ...student, performance: latestPerformance });
    setFormData({
      attendance_percentage: latestPerformance?.attendance_percentage || "",
      machine_test: latestPerformance?.machine_test || "",
      mcq_test: latestPerformance?.mcq_test || "",
      mock_interview_score: latestPerformance?.mock_interview_score || "",
      created_at: latestPerformance?.created_at || "",
    });
    setShowForm(false);
  };

  const handleForm = (type, performance = null) => {
    setFormType(type);
    if (type === "update" && performance) {
      setSelectedStudent({ ...selectedStudent, performance });
      setFormData({
        attendance_percentage: performance.attendance_percentage,
        machine_test: performance.machine_test,
        mcq_test: performance.mcq_test,
        mock_interview_score: performance.mock_interview_score,
        created_at: performance.created_at,
      });
    }
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const url =
        formType === "add"
          ? "/performance/add"
          : `/performance/update/${selectedStudent.performance.per_id}`;
      const method = formType === "add" ? "post" : "put";

      const dataToSend = {
        ...formData,
        attendance_percentage: Number(formData.attendance_percentage),
        machine_test: Number(formData.machine_test),
        mcq_test: Number(formData.mcq_test),
        mock_interview_score: Number(formData.mock_interview_score),
        sid: selectedStudent.sid,
      };

      await axios({
        method,
        url: `http://localhost:4444${url}`,
        data: dataToSend,
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(`${formType === "add" ? "Added" : "Updated"} successfully!`);
      setShowForm(false);
      fetchAllPerformances();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error");
    }
  };

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchStudent.toLowerCase())
  );

  const indexOfLastStudent = currentPageStudents * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  return (
    <div className="container my-4">
      <h2 className="text-primary text-center mb-4">📊 Performance Management</h2>

      {/* Student Search */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search student..."
          value={searchStudent}
          onChange={(e) => setSearchStudent(e.target.value)}
        />
      </div>

      {/* Student Table */}
      <table className="table table-striped table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.length > 0 ? (
            currentStudents.map((s) => (
              <tr key={s.sid}>
                <td>{s.name}</td>
                <td>
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => handleSelectStudent(s)}
                  >
                    Click here
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center">
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between mb-4">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPageStudents(currentPageStudents - 1)}
          disabled={currentPageStudents === 1}
        >
          Prev
        </button>
        <span className="align-self-center">Page {currentPageStudents}</span>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPageStudents(currentPageStudents + 1)}
          disabled={indexOfLastStudent >= filteredStudents.length}
        >
          Next
        </button>
      </div>

      {/* Action Buttons */}
      {selectedStudent && (
        <div className="mb-4">
          <button
            className="btn btn-primary me-2"
            onClick={() => handleForm("add")}
          >
            Add Performance
          </button>
          {selectedStudent.performance && (
            <button
              className="btn btn-warning text-white"
              onClick={() => handleForm("update", selectedStudent.performance)}
            >
              Update Performance
            </button>
          )}
        </div>
      )}

      {/* Add / Update Form */}
      {showForm && (
        <div className="card p-4 mb-4 shadow-sm">
          <h5 className="mb-3">
            {formType === "add" ? "Add" : "Update"} Performance for{" "}
            {selectedStudent.name}
          </h5>

          <div className="row g-2">
            <div className="col-md-3">
              <input
                type="number"
                name="attendance_percentage"
                className="form-control"
                placeholder="Attendance %"
                value={formData.attendance_percentage}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="machine_test"
                className="form-control"
                placeholder="Machine Test"
                value={formData.machine_test}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="mcq_test"
                className="form-control"
                placeholder="MCQ Test"
                value={formData.mcq_test}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="mock_interview_score"
                className="form-control"
                placeholder="Mock Interview"
                value={formData.mock_interview_score}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-3">
            <button className="btn btn-success me-2" onClick={handleSubmit}>
              Submit
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setShowForm(false)}
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* View All Performances → दुसऱ्या page वर */}
      <div className="mb-3">
        <button
          className="btn btn-info text-white"
          onClick={() => navigate("/performances")}
        >
          View All Performances
        </button>
      </div>
    </div>
  );
}
