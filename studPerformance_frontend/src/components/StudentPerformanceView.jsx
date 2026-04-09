// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./StudentPerformanceView.css";

// // // // export default function StudentPerformanceView() {
// // // //   const [performance, setPerformance] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchPerformance = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) {
// // // //           setError("You are not logged in");
// // // //           setLoading(false);
// // // //           return;
// // // //         }

// // // //         const res = await axios.get(
// // // //           "http://localhost:4444/performance/student-performance",
// // // //           {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           }
// // // //         );

// // // //         if (res.data && res.data.length > 0) {
// // // //           setPerformance(res.data);
// // // //         } else {
// // // //           setError("No performance found");
// // // //         }

// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         setError("Error fetching performance");
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPerformance();
// // // //   }, []);

// // // //   if (loading) return <p>Loading...</p>;
// // // //   if (error) return <p>{error}</p>;

// // // //   const getScoreClass = (score) => {
// // // //     if (score >= 80) return "high";
// // // //     if (score >= 50) return "medium";
// // // //     return "low";
// // // //   };

// // // //   return (
// // // //     <div className="performance-container">
// // // //       <h2>My Performance</h2>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Attendance %</th>
// // // //             <th>Machine Test</th>
// // // //             <th>MCQ Test</th>
// // // //             <th>Mock Interview</th>
// // // //             <th>Final Score</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {performance.map((p) => (
// // // //             <tr key={p.per_id}>
// // // //               <td data-label="Attendance %">{p.attendance_percentage}</td>
// // // //               <td data-label="Machine Test">{p.machine_test}</td>
// // // //               <td data-label="MCQ Test">{p.mcq_test}</td>
// // // //               <td data-label="Mock Interview">{p.mock_interview_score}</td>
// // // //               <td
// // // //                 data-label="Final Score"
// // // //                 className={`final-score ${getScoreClass(p.final_score)}`}
// // // //               >
// // // //                 {p.final_score}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // }








// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./StudentPerformanceView.css";
// // // // import {
// // // //   PieChart,
// // // //   Pie,
// // // //   Cell,
// // // //   Tooltip,
// // // //   Legend,
// // // //   BarChart,
// // // //   Bar,
// // // //   XAxis,
// // // //   YAxis,
// // // //   CartesianGrid,
// // // //   ResponsiveContainer,
// // // // } from "recharts";

// // // // export default function StudentPerformanceView() {
// // // //   const [performance, setPerformance] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchPerformance = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         if (!token) {
// // // //           setError("You are not logged in");
// // // //           setLoading(false);
// // // //           return;
// // // //         }

// // // //         const res = await axios.get(
// // // //           "http://localhost:4444/performance/student-performance",
// // // //           {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           }
// // // //         );

// // // //         if (res.data && res.data.length > 0) {
// // // //           setPerformance(res.data);
// // // //         } else {
// // // //           setError("No performance found");
// // // //         }

// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error(err);
// // // //         setError("Error fetching performance");
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPerformance();
// // // //   }, []);

// // // //   if (loading) return <p>Loading...</p>;
// // // //   if (error) return <p>{error}</p>;

// // // //   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// // // //   // ek student ghetoy (login केलेला student)
// // // //   const student = performance[0];

// // // //   // chart sathi data tayar
// // // //   const chartData = [
// // // //     { name: "Attendance %", value: student.attendance_percentage },
// // // //     { name: "Machine Test", value: student.machine_test },
// // // //     { name: "MCQ Test", value: student.mcq_test },
// // // //     { name: "Mock Interview", value: student.mock_interview_score },
// // // //   ];

// // // //   return (
// // // //     <div className="performance-container">
// // // //       <h2>My Performance</h2>

// // // //       {/* Table */}
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Attendance %</th>
// // // //             <th>Machine Test</th>
// // // //             <th>MCQ Test</th>
// // // //             <th>Mock Interview</th>
// // // //             <th>Final Score</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {performance.map((p) => (
// // // //             <tr key={p.per_id}>
// // // //               <td>{p.attendance_percentage}</td>
// // // //               <td>{p.machine_test}</td>
// // // //               <td>{p.mcq_test}</td>
// // // //               <td>{p.mock_interview_score}</td>
// // // //               <td>{p.final_score}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>

// // // //       {/* Graph Section */}
// // // //       <h3>Graphical Representation</h3>
// // // //       <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
// // // //         {/* Pie Chart */}
// // // //         <ResponsiveContainer width="40%" height={300}>
// // // //           <PieChart>
// // // //             <Pie
// // // //               data={chartData}
// // // //               dataKey="value"
// // // //               nameKey="name"
// // // //               cx="50%"
// // // //               cy="50%"
// // // //               outerRadius={100}
// // // //               fill="#8884d8"
// // // //               label
// // // //             >
// // // //               {chartData.map((entry, index) => (
// // // //                 <Cell key={index} fill={COLORS[index % COLORS.length]} />
// // // //               ))}
// // // //             </Pie>
// // // //             <Tooltip />
// // // //             <Legend />
// // // //           </PieChart>
// // // //         </ResponsiveContainer>

// // // //         {/* Bar Chart */}
// // // //         <ResponsiveContainer width="50%" height={300}>
// // // //           <BarChart data={chartData}>
// // // //             <CartesianGrid strokeDasharray="3 3" />
// // // //             <XAxis dataKey="name" />
// // // //             <YAxis domain={[0, 100]} />
// // // //             <Tooltip />
// // // //             <Legend />
// // // //             <Bar dataKey="value" fill="#82ca9d" />
// // // //           </BarChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }








// // // // import React, { useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import "./StudentPerformanceView.css";

// // // // export default function StudentPerformanceView() {
// // // //   const [performance, setPerformance] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState("");

// // // //   useEffect(() => {
// // // //     const fetchPerformance = async () => {
// // // //       try {
// // // //         const token = localStorage.getItem("token"); // logged-in student token
// // // //         if (!token) {
// // // //           setError("You are not logged in");
// // // //           setLoading(false);
// // // //           return;
// // // //         }

// // // //         const res = await axios.get(
// // // //           "http://localhost:4444/performance/student-performance",
// // // //           {
// // // //             headers: { Authorization: `Bearer ${token}` },
// // // //           }
// // // //         );

// // // //         if (res.data && res.data.length > 0) {
// // // //           setPerformance(res.data); // database मधून आलेले record
// // // //         } else {
// // // //           setError("No performance found for this student."); // 404 handling
// // // //         }

// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error("Error fetching performance:", err);
// // // //         if (err.response) {
// // // //           console.error("Response data:", err.response.data);
// // // //           console.error("Response status:", err.response.status);
// // // //           setError(err.response.data.message || "Error fetching performance");
// // // //         } else {
// // // //           setError("Error fetching performance");
// // // //         }
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchPerformance();
// // // //   }, []);

// // // //   if (loading) return <p>Loading...</p>;
// // // //   if (error) return <p>{error}</p>;

// // // //   const getScoreClass = (score) => {
// // // //     if (score >= 80) return "high";
// // // //     if (score >= 50) return "medium";
// // // //     return "low";
// // // //   };

// // // //   return (
// // // //     <div className="performance-container">
// // // //       <h2>My Performance</h2>
// // // //       <table>
// // // //         <thead>
// // // //           <tr>
// // // //             <th>Attendance %</th>
// // // //             <th>Machine Test</th>
// // // //             <th>MCQ Test</th>
// // // //             <th>Mock Interview</th>
// // // //             <th>Final Score</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {performance.map((p) => (
// // // //             <tr key={p.per_id}>
// // // //               <td data-label="Attendance %">{p.attendance_percentage}</td>
// // // //               <td data-label="Machine Test">{p.machine_test}</td>
// // // //               <td data-label="MCQ Test">{p.mcq_test}</td>
// // // //               <td data-label="Mock Interview">{p.mock_interview_score}</td>
// // // //               <td
// // // //                 data-label="Final Score"
// // // //                 className={`final-score ${getScoreClass(p.final_score)}`}
// // // //               >
// // // //                 {p.final_score}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // }









// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import "./StudentPerformanceView.css"; // same CSS वापरू शकतेस

// // // export default function StudentPerformanceView() {
// // //   const [students, setStudents] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");

// // //   useEffect(() => {
// // //     const fetchStudents = async () => {
// // //       try {
// // //         const token = localStorage.getItem("token"); // admin token
// // //         if (!token) {
// // //           setError("You are not logged in");
// // //           setLoading(false);
// // //           return;
// // //         }

// // //         // ✅ Backend route => GET /admin/students
// // //         const res = await axios.get("http://localhost:4444/admin/students", {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });

// // //         if (res.data && res.data.length > 0) {
// // //           setStudents(res.data);
// // //         } else {
// // //           setError("No students found");
// // //         }

// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error("Error fetching students:", err);
// // //         setError("Error fetching students");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchStudents();
// // //   }, []);

// // //   if (loading) return <p>Loading...</p>;
// // //   if (error) return <p>{error}</p>;

// // //   // ✅ Backend route => POST /admin/performance/add/:sid
// // //   const handleAdd = (sid) => {
// // //     window.location.href = `/admin/performance/add/${sid}`;
// // //   };

// // //   // ✅ Backend route => PUT /admin/performance/update/:sid
// // //   const handleUpdate = (sid) => {
// // //     window.location.href = `/admin/performance/update/${sid}`;
// // //   };

// // //   // ✅ Backend route => GET /admin/performance/all
// // //   const handleViewAll = () => {
// // //     window.location.href = "/admin/performance/all";
// // //   };

// // //   return (
// // //     <div className="student-performance-list">
// // //       <h2>Student List</h2>
// // //       <table>
// // //         <thead>
// // //           <tr>
// // //             <th>SID</th>
// // //             <th>Name</th>
// // //             <th>Email</th>
// // //             <th>Contact</th>
// // //             <th>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {students.map((s) => (
// // //             <tr key={s.sid}>
// // //               <td>{s.sid}</td>
// // //               <td>{s.name}</td>
// // //               <td>{s.email}</td>
// // //               <td>{s.contact}</td>
// // //               <td>
// // //                 <button onClick={() => handleAdd(s.sid)}>Add</button>
// // //                 <button onClick={() => handleUpdate(s.sid)}>Update</button>
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>

// // //       {/* खाली View All Button */}
// // //       <div className="view-all-btn">
// // //         <button onClick={handleViewAll}>View All Performance</button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./StudentPerformanceView.css"; // अगदी त्याच CSS वापरू शकतो

// // export default function StudentPerformanceView() {
// //   const [performance, setPerformance] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchPerformance = async () => {
// //       try {
// //         const token = localStorage.getItem("token"); // logged-in student token
// //         if (!token) {
// //           setError("You are not logged in");
// //           setLoading(false);
// //           return;
// //         }

// //         // ✅ Backend route => GET /performance/student-performance
// //         const res = await axios.get("http://localhost:4444/performance/student-performance", {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });

// //         if (res.data && res.data.length > 0) {
// //           setPerformance(res.data[0]); // assume one record per student
// //         } else {
// //           setError("No performance found");
// //         }

// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Error fetching performance:", err);
// //         setError("Error fetching performance");
// //         setLoading(false);
// //       }
// //     };

// //     fetchPerformance();
// //   }, []);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div className="student-performance-detail">
// //       <h2>My Performance</h2>
// //       <table>
// //         <tbody>
// //           <tr>
// //             <td>Attendance %</td>
// //             <td>{performance.attendance_percentage}</td>
// //           </tr>
// //           <tr>
// //             <td>Machine Test</td>
// //             <td>{performance.machine_test}</td>
// //           </tr>
// //           <tr>
// //             <td>MCQ Test</td>
// //             <td>{performance.mcq_test}</td>
// //           </tr>
// //           <tr>
// //             <td>Mock Interview Score</td>
// //             <td>{performance.mock_interview_score}</td>
// //           </tr>
// //           <tr>
// //             <td>Final Score</td>
// //             <td>{performance.final_score}</td>
// //           </tr>
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentPerformanceView.css";

// export default function StudentPerformanceCircular() {
//   const [performance, setPerformance] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPerformance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("You are not logged in");
//           setLoading(false);
//           return;
//         }

//         const res = await axios.get(
//           "http://localhost:4444/performance/student-performance",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (res.data && res.data.length > 0) {
//           setPerformance(res.data[0]);
//         } else {
//           setError("No performance found");
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching performance:", err);
//         setError("Error fetching performance");
//         setLoading(false);
//       }
//     };

//     fetchPerformance();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   // metrics चा weighted average / final score circular chart मध्ये दाखवतो
//   const finalScore = performance.final_score;

//   return (
//     <div className="circular-container">
//       <h2>My Final Score</h2>
//       <div className="circular-chart">
//         <svg viewBox="0 0 36 36" className="circular-svg">
//           <path
//             className="circular-bg"
//             d="M18 2.0845
//                a 15.9155 15.9155 0 0 1 0 31.831
//                a 15.9155 15.9155 0 0 1 0 -31.831"
//           />
//           <path
//             className="circular-fill"
//             strokeDasharray={`${finalScore}, 100`}
//             d="M18 2.0845
//                a 15.9155 15.9155 0 0 1 0 31.831
//                a 15.9155 15.9155 0 0 1 0 -31.831"
//           />
//           <text x="18" y="20.35" className="circular-text">
//             {finalScore}%
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
// import "./StudentPerformanceView.css";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function StudentPerformanceView() {
//   const [performance, setPerformance] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPerformance = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           setError("You are not logged in");
//           setLoading(false);
//           return;
//         }

//         const res = await axios.get(
//           "http://localhost:4444/performance/student-performance",
//           { headers: { Authorization: `Bearer ${token}` } }
//         );

//         if (res.data && res.data.length > 0) {
//           setPerformance(res.data[0]);
//         } else {
//           setError("No performance found");
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching performance:", err);
//         setError("Error fetching performance");
//         setLoading(false);
//       }
//     };

//     fetchPerformance();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   const data = {
//     labels: ["Attendance %", "Machine Test", "MCQ Test", "Mock Interview", "Final Score"],
//     datasets: [
//       {
//         label: "Score",
//         data: [
//           performance.attendance_percentage,
//           performance.machine_test,
//           performance.mcq_test,
//           performance.mock_interview_score,
//           performance.final_score
//         ],
//         backgroundColor: ["#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#f44336"]
//       }
//     ]
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { display: false },
//       title: { display: true, text: "My Performance" }
//     },
//     scales: {
//       y: { beginAtZero: true, max: 100 }
//     }
//   };

//   return (
//     <div className="bar-container">
//       <Bar data={data} options={options} />
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./StudentPerformanceView.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StudentPerformanceView() {
  const [performance, setPerformance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPerformance = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("You are not logged in");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          "http://localhost:4444/performance/student-performance",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.data && res.data.length > 0) {
          setPerformance(res.data[0]);
        } else {
          setError("No performance found");
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching performance:", err);
        setError("Error fetching performance");
        setLoading(false);
      }
    };

    fetchPerformance();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Colorful Bar chart data
  const chartData = {
    labels: ["Attendance %", "Machine Test", "MCQ Test", "Mock Interview", "Final Score"],
    datasets: [
      {
        label: "Score",
        data: [
          performance.attendance_percentage,
          performance.machine_test,
          performance.mcq_test,
          performance.mock_interview_score,
          performance.final_score,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "My Performance Chart" },
    },
    animation: {
      duration: 1500,
      easing: "easeOutBounce",
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="student-performance-container">
      <h2>My Performance</h2>

      {/* Table */}
      <table className="performance-table">
        <thead>
          <tr>
            <th>Attendance %</th>
            <th>Machine Test</th>
            <th>MCQ Test</th>
            <th>Mock Interview</th>
            <th>Final Score</th>
            <th>Added On</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{performance.attendance_percentage}</td>
            <td>{performance.machine_test}</td>
            <td>{performance.mcq_test}</td>
            <td>{performance.mock_interview_score}</td>
            <td>{performance.final_score}</td>
            <td>{new Date(performance.created_at).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Bar Chart */}
      <div style={{ marginTop: "40px" }}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}
