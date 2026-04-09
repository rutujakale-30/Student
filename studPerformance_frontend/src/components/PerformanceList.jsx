// // // src/components/PerformanceList.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function PerformanceList() {
// //   const [performances, setPerformances] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const performancesPerPage = 5;
// //   const token = localStorage.getItem("token");

// //   useEffect(() => {
// //     fetchAllPerformances();
// //   }, []);

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

// //   const filteredPerformances = performances.filter((p) =>
// //     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   const indexOfLast = currentPage * performancesPerPage;
// //   const indexOfFirst = indexOfLast - performancesPerPage;
// //   const currentPerformances = filteredPerformances.slice(indexOfFirst, indexOfLast);

// //   return (
// //     <div className="container my-4">
// //       <h2 className="text-primary text-center mb-4">📊 All Performances</h2>

// //       <input
// //         type="text"
// //         className="form-control mb-3"
// //         placeholder="Search by student name..."
// //         value={searchTerm}
// //         onChange={(e) => setSearchTerm(e.target.value)}
// //       />

// //       <table className="table table-bordered table-hover shadow-sm">
// //         <thead className="table-dark">
// //           <tr>
// //             <th>Name</th>
// //             <th>Attendance</th>
// //             <th>Machine Test</th>
// //             <th>MCQ Test</th>
// //             <th>Mock Interview</th>
// //             <th>Final Score</th>
// //             <th>Added On</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {currentPerformances.length > 0 ? (
// //             currentPerformances.map((p) => (
// //               <tr key={p.per_id}>
// //                 <td>{p.student_name}</td>
// //                 <td>{p.attendance_percentage}</td>
// //                 <td>{p.machine_test}</td>
// //                 <td>{p.mcq_test}</td>
// //                 <td>{p.mock_interview_score}</td>
// //                 <td>{p.final_score}</td>
// //                 <td>
// //                   {p.created_at
// //                     ? new Date(p.created_at).toLocaleString("en-IN", {
// //                         day: "2-digit",
// //                         month: "short",
// //                         year: "numeric",
// //                         hour: "2-digit",
// //                         minute: "2-digit",
// //                       })
// //                     : "-"}
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="7" className="text-center">
// //                 No records found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>

// //       {/* Pagination */}
// //       <div className="d-flex justify-content-between">
// //         <button
// //           className="btn btn-outline-primary"
// //           onClick={() => setCurrentPage(currentPage - 1)}
// //           disabled={currentPage === 1}
// //         >
// //           Prev
// //         </button>
// //         <span className="align-self-center">Page {currentPage}</span>
// //         <button
// //           className="btn btn-outline-primary"
// //           onClick={() => setCurrentPage(currentPage + 1)}
// //           disabled={indexOfLast >= filteredPerformances.length}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function PerformanceList() {
//   const [performances, setPerformances] = useState([]);
//   const [selectedPerformance, setSelectedPerformance] = useState(null);
//   const [showForm, setShowForm] = useState(false);
//   const [formData, setFormData] = useState({
//     attendance_percentage: "",
//     machine_test: "",
//     mcq_test: "",
//     mock_interview_score: "",
//   });
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const performancesPerPage = 5;
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     fetchAllPerformances();
//   }, []);

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

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdateClick = (performance) => {
//     setSelectedPerformance(performance);
//     setFormData({
//       attendance_percentage: performance.attendance_percentage,
//       machine_test: performance.machine_test,
//       mcq_test: performance.mcq_test,
//       mock_interview_score: performance.mock_interview_score,
//     });
//     setShowForm(true);
//   };

//   const handleUpdateSubmit = async () => {
//     try {
//       const perId = selectedPerformance.per_id;

//       await axios.put(
//         `http://localhost:4444/performance/update/${perId}`,
//         {
//           ...formData,
//           attendance_percentage: Number(formData.attendance_percentage),
//           machine_test: Number(formData.machine_test),
//           mcq_test: Number(formData.mcq_test),
//           mock_interview_score: Number(formData.mock_interview_score),
//         },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Updated successfully!");
//       setShowForm(false);
//       fetchAllPerformances();
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.message || "Error updating performance");
//     }
//   };

//   const filteredPerformances = performances.filter((p) =>
//     p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const indexOfLast = currentPage * performancesPerPage;
//   const indexOfFirst = indexOfLast - performancesPerPage;
//   const currentPerformances = filteredPerformances.slice(indexOfFirst, indexOfLast);

//   return (
//     <div className="container my-4">
//       <h2 className="text-primary text-center mb-4">📊 All Performances</h2>

//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search by student name..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <table className="table table-bordered table-hover shadow-sm">
//         <thead className="table-dark">
//           <tr>
//             <th>Name</th>
//             <th>Attendance</th>
//             <th>Machine Test</th>
//             <th>MCQ Test</th>
//             <th>Mock Interview</th>
//             <th>Final Score</th>
//             <th>Added On</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentPerformances.length > 0 ? (
//             currentPerformances.map((p) => (
//               <tr key={p.per_id}>
//                 <td>{p.student_name}</td>
//                 <td>{p.attendance_percentage}</td>
//                 <td>{p.machine_test}</td>
//                 <td>{p.mcq_test}</td>
//                 <td>{p.mock_interview_score}</td>
//                 <td>{p.final_score}</td>
//                 <td>
//                   {p.created_at
//                     ? new Date(p.created_at).toLocaleString("en-IN", {
//                         day: "2-digit",
//                         month: "short",
//                         year: "numeric",
//                         hour: "2-digit",
//                         minute: "2-digit",
//                       })
//                     : "-"}
//                 </td>
//                 <td>
//                   <button
//                     className="btn btn-warning btn-sm text-white"
//                     onClick={() => handleUpdateClick(p)}
//                   >
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="8" className="text-center">
//                 No records found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination */}
//       <div className="d-flex justify-content-between">
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => setCurrentPage(currentPage - 1)}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         <span className="align-self-center">Page {currentPage}</span>
//         <button
//           className="btn btn-outline-primary"
//           onClick={() => setCurrentPage(currentPage + 1)}
//           disabled={indexOfLast >= filteredPerformances.length}
//         >
//           Next
//         </button>
//       </div>

//       {/* Update Form */}
//       {showForm && selectedPerformance && (
//         <div className="card p-4 mb-4 shadow-sm mt-4">
//           <h5 className="mb-3">Update Performance for {selectedPerformance.student_name}</h5>
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
//             <button className="btn btn-success me-2" onClick={handleUpdateSubmit}>
//               Update
//             </button>
//             <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
//               Back
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PerformanceList() {
  const [performances, setPerformances] = useState([]);
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    attendance_percentage: "",
    machine_test: "",
    mcq_test: "",
    mock_interview_score: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const performancesPerPage = 5;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPerformances();
  }, []);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateClick = (performance) => {
    setSelectedPerformance(performance);
    setFormData({
      attendance_percentage: performance.attendance_percentage,
      machine_test: performance.machine_test,
      mcq_test: performance.mcq_test,
      mock_interview_score: performance.mock_interview_score,
    });
    setShowForm(true);
  };

  const handleUpdateSubmit = async () => {
    try {
      const perId = selectedPerformance.per_id;

      await axios.put(
        `http://localhost:4444/performance/update/${perId}`,
        {
          ...formData,
          attendance_percentage: Number(formData.attendance_percentage),
          machine_test: Number(formData.machine_test),
          mcq_test: Number(formData.mcq_test),
          mock_interview_score: Number(formData.mock_interview_score),
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Updated successfully!");
      setShowForm(false);
      fetchAllPerformances();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error updating performance");
    }
  };

  const filteredPerformances = performances.filter((p) =>
    p.student_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLast = currentPage * performancesPerPage;
  const indexOfFirst = indexOfLast - performancesPerPage;
  const currentPerformances = filteredPerformances.slice(indexOfFirst, indexOfLast);

  return (
    <div className="container my-4">
      <h2 className="text-primary text-center mb-4">📊 All Performances</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by student name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table table-bordered table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Attendance</th>
            <th>Machine Test</th>
            <th>MCQ Test</th>
            <th>Mock Interview</th>
            <th>Final Score</th>
            <th>Added On</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPerformances.length > 0 ? (
            currentPerformances.map((p) => (
              <tr key={p.per_id}>
                <td>{p.student_name}</td>
                <td>{p.attendance_percentage}</td>
                <td>{p.machine_test}</td>
                <td>{p.mcq_test}</td>
                <td>{p.mock_interview_score}</td>
                <td>{p.final_score}</td>
                <td>
                  {p.created_at
                    ? new Date(p.created_at).toLocaleString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "-"}
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm text-white"
                    onClick={() => handleUpdateClick(p)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="align-self-center">Page {currentPage}</span>
        <button
          className="btn btn-outline-primary"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLast >= filteredPerformances.length}
        >
          Next
        </button>
      </div>

      {/* Update Form */}
      {showForm && selectedPerformance && (
        <div className="card p-4 mb-4 shadow-sm mt-4">
          <h5 className="mb-3">Update Performance for {selectedPerformance.student_name}</h5>
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
            <button className="btn btn-success me-2" onClick={handleUpdateSubmit}>
              Update
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setShowForm(false);
                navigate("/dashboard"); // Back to dashboard
              }}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
