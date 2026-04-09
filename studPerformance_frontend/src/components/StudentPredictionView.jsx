// // // // // import React, { useEffect, useState } from "react";
// // // // // import axios from "axios";

// // // // // export default function StudentPredictionView({ token }) {
// // // // //   const [prediction, setPrediction] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState("");

// // // // //   useEffect(() => {
// // // // //     const fetchPrediction = async () => {
// // // // //       try {
// // // // //         setLoading(true);
// // // // //         setError("");

// // // // //         const res = await axios.get("http://localhost:4444/prediction/student", {
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //         });

// // // // //         if (res.data?.prediction) {
// // // // //           setPrediction(res.data.prediction);
// // // // //         } else {
// // // // //           setError("No prediction found");
// // // // //         }
// // // // //       } catch (err) {
// // // // //         console.error(err);
// // // // //         setError(
// // // // //           err.response?.data?.message ||
// // // // //             "Error fetching prediction"
// // // // //         );
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchPrediction();
// // // // //   }, [token]);

// // // // //   if (loading) return <p className="text-center text-muted">Loading...</p>;
// // // // //   if (error) return <p className="alert alert-danger text-center">{error}</p>;

// // // // //   return (
// // // // //     <div className="container my-4 p-4 bg-light rounded shadow">
// // // // //       <h2 className="text-center mb-4">📊 Your Prediction</h2>

// // // // //       {prediction && (
// // // // //         <div className="table-responsive">
// // // // //           <table className="table table-striped table-hover align-middle">
// // // // //             <thead className="table-dark">
// // // // //               <tr>
// // // // //                 <th>Name</th>
// // // // //                 <th>Average Score</th>
// // // // //                 <th>Readiness Level</th>
// // // // //                 <th>Shortlisted</th>
// // // // //                 <th>Year</th>
// // // // //                 <th>Month</th>
// // // // //               </tr>
// // // // //             </thead>
// // // // //             <tbody>
// // // // //               <tr>
// // // // //                 <td>{prediction.name}</td>
// // // // //                 <td>{prediction.avg_score}</td>
// // // // //                 <td
// // // // //                   className={
// // // // //                     prediction.readiness_level === "excellent"
// // // // //                       ? "text-success fw-bold"
// // // // //                       : prediction.readiness_level === "average"
// // // // //                       ? "text-warning fw-bold"
// // // // //                       : "text-danger fw-bold"
// // // // //                   }
// // // // //                 >
// // // // //                   {prediction.readiness_level}
// // // // //                 </td>
// // // // //                 <td>{prediction.shortlisted ? "✅ Yes" : "❌ No"}</td>
// // // // //                 <td>{prediction.year}</td>
// // // // //                 <td>{prediction.month}</td>
// // // // //               </tr>
// // // // //             </tbody>
// // // // //           </table>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }




// // // // import React, { useEffect, useState } from "react";

// // // // export default function StudentPredictionView() {
// // // //   const [prediction, setPrediction] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   // Mock fetch function
// // // //   const fetchPrediction = () => {
// // // //     setTimeout(() => {
// // // //       const mockData = {
// // // //         sid: 32,
// // // //         student_name: "Poonam",
// // // //         readiness_level: "average",
// // // //         shortlisted: 0
// // // //       };
// // // //       setPrediction(mockData);
// // // //       setLoading(false);
// // // //     }, 1000); // 1 second delay to simulate fetch
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchPrediction();
// // // //   }, []);

// // // //   if (loading) return <p>Loading prediction...</p>;

// // // //   return (
// // // //     <div className="prediction-view">
// // // //       <h2>Your Prediction</h2>
// // // //       {prediction ? (
// // // //         <div>
// // // //           <p><strong>ID:</strong> {prediction.sid}</p>
// // // //           <p><strong>Name:</strong> {prediction.student_name}</p>
// // // //           <p>
// // // //             <strong>Readiness Level:</strong>{" "}
// // // //             <span style={{
// // // //               color: prediction.readiness_level === "excellent" ? "green" :
// // // //                      prediction.readiness_level === "average" ? "orange" : "red"
// // // //             }}>
// // // //               {prediction.readiness_level}
// // // //             </span>
// // // //           </p>
// // // //           <p><strong>Shortlisted:</strong> {prediction.shortlisted ? "Yes" : "No"}</p>
// // // //         </div>
// // // //       ) : (
// // // //         <p>No prediction available</p>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }





// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";

// // // export default function StudentPredictionView() {
// // //   const [prediction, setPrediction] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     const sid = localStorage.getItem("sid"); // Login नंतर sid घेते
// // //     if (!sid) {
// // //       console.error("Student not logged in");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     axios.get(`http://localhost:4444/student?sid=${sid}`)
// // //       .then(res => {
// // //         setPrediction(res.data);
// // //         setLoading(false);
// // //       })
// // //       .catch(err => {
// // //         console.error("Error fetching student prediction:", err);
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   if (loading) return <p>Loading prediction...</p>;

// // //   return (
// // //     <div className="prediction-view">
// // //       <h2>Your Prediction</h2>
// // //       {prediction ? (
// // //         <div>
// // //           <p><strong>ID:</strong> {prediction.sid}</p>
// // //           <p><strong>Name:</strong> {prediction.student_name}</p>
// // //           <p>
// // //             <strong>Readiness Level:</strong>{" "}
// // //             <span style={{
// // //               color: prediction.readiness_level === "excellent" ? "green" :
// // //                      prediction.readiness_level === "average" ? "orange" : "red"
// // //             }}>
// // //               {prediction.readiness_level}
// // //             </span>
// // //           </p>
// // //           <p><strong>Shortlisted:</strong> {prediction.shortlisted ? "Yes" : "No"}</p>
// // //         </div>
// // //       ) : (
// // //         <p>No prediction available for you</p>
// // //       )}
// // //     </div>
// // //   );
// // // }


// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // export default function StudentPredictionView() {
// //   const [prediction, setPrediction] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchPrediction = async () => {
// //       const token = localStorage.getItem("token");
// //       const uid = localStorage.getItem("uid");

// //       if (!token || !uid) {
// //         console.log("Student not logged in");
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const res = await axios.get(`http://localhost:4444/prediction/student?sid=${uid}`, {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setPrediction(res.data);
// //       } catch (err) {
// //         console.error("Error fetching student prediction:", err.response?.data || err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchPrediction();
// //   }, []);

// //   if (loading) return <p>Loading prediction...</p>;
// //   if (!prediction) return <p>No prediction available or student not logged in</p>;

// //   return (
// //     <div className="prediction-view">
// //       <h2>Your Prediction</h2>
// //       <p><strong>Name:</strong> {prediction.student_name}</p>
// //       <p>
// //         <strong>Readiness Level:</strong>{" "}
// //         <span style={{
// //           color: prediction.readiness_level === "excellent" ? "green" :
// //                  prediction.readiness_level === "average" ? "orange" : "red"
// //         }}>
// //           {prediction.readiness_level}
// //         </span>
// //       </p>
// //       <p><strong>Shortlisted:</strong> {prediction.shortlisted ? "Yes" : "No"}</p>
// //     </div>
// //   );
// // }



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

// export default function StudentPredictionView() {
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchPrediction();
//   }, []);

//   const fetchPrediction = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:4444/prediction/studentview", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setPrediction(res.data);
//       setError(null);
//     } catch (err) {
//       console.error("Prediction error:", err.response?.data || err.message);
//       setError(err.response?.data?.error || "Something went wrong");
//       setPrediction(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getReadinessBadge = (level) => {
//     switch(level) {
//       case "good":
//         return <span className="badge bg-success">{level.toUpperCase()}</span>;
//       case "average":
//         return <span className="badge bg-warning text-dark">{level.toUpperCase()}</span>;
//       case "poor":
//         return <span className="badge bg-danger">{level.toUpperCase()}</span>;
//       default:
//         return <span className="badge bg-secondary">UNKNOWN</span>;
//     }
//   };

//   if (loading) return (
//     <div className="d-flex justify-content-center align-items-center mt-5">
//       <div className="spinner-border text-primary" role="status">
//         <span className="visually-hidden">Loading...</span>
//       </div>
//     </div>
//   );

//   if (error) return (
//     <div className="container mt-5">
//       <div className="alert alert-danger text-center">{error}</div>
//     </div>
//   );

//   return (
//     <div className="container mt-5">
//       <h3 className="mb-4 text-center">Student Prediction</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-hover shadow-sm">
//           <thead className="table-primary">
//             <tr>
//               <th scope="col">Readiness Level</th>
//               <th scope="col">Shortlisted</th>
//               <th scope="col">Final Score</th>
//               <th scope="col">Prediction Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{getReadinessBadge(prediction.readiness_level)}</td>
//               <td>
//                 {prediction.shortlisted ? (
//                   <span className="text-success fs-5"><FaCheckCircle className="me-1" />Yes</span>
//                 ) : (
//                   <span className="text-danger fs-5"><FaTimesCircle className="me-1" />No</span>
//                 )}
//               </td>
//               <td>
//                 <div className="progress" style={{ height: "20px", borderRadius: "10px" }}>
//                   <div
//                     className={`progress-bar ${prediction.final_score >= 80 ? 'bg-success' : prediction.final_score >= 50 ? 'bg-warning' : 'bg-danger'}`}
//                     role="progressbar"
//                     style={{ width: `${prediction.final_score}%` }}
//                   >
//                     {prediction.final_score}%
//                   </div>
//                 </div>
//               </td>
//               <td>{new Date(prediction.created_at).toLocaleString()}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }





// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function StudentPredictionView() {
//   const [prediction, setPrediction] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchPrediction();
//   }, []);

//   const fetchPrediction = async () => {
//     try {
//       const token = localStorage.getItem("token"); // JWT from localStorage
//       const res = await axios.get("http://localhost:4444/prediction/studentview", {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       setPrediction(res.data);
//       setError(null);
//     } catch (err) {
//       console.error("Prediction error:", err.response?.data || err.message);
//       setError(err.response?.data?.error || "Something went wrong");
//       setPrediction(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) return <p className="text-center mt-5">Loading prediction...</p>;
//   if (error) return <p className="text-danger text-center mt-5">{error}</p>;

//   return (
//     <div className="container mt-5">
//       <h3 className="text-center mb-4">Student Prediction</h3>
//       <div className="table-responsive">
//         <table className="table table-striped table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>Readiness Level</th>
//               <th>Shortlisted</th>
//               <th>Final Score</th>
//               <th>Prediction Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>{prediction.readiness_level}</td>
//               <td>{prediction.shortlisted ? "Yes" : "No"}</td>
//               <td>
//                 <div className="progress">
//                   <div
//                     className={`progress-bar ${prediction.final_score >= 80 ? "bg-success" : prediction.final_score >= 50 ? "bg-warning" : "bg-danger"}`}
//                     role="progressbar"
//                     style={{ width: `${prediction.final_score}%` }}
//                   >
//                     {prediction.final_score}%
//                   </div>
//                 </div>
//               </td>
//               <td>{new Date(prediction.created_at).toLocaleString()}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StudentPredictionView() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPrediction();
  }, []);

  const fetchPrediction = () => {
    const token = localStorage.getItem("token"); // JWT token

    axios
      .get("http://localhost:4444/prediction/studentview", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setPrediction(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error("Prediction error:", err.response?.data || err.message);
        setError(err.response?.data?.error || "Something went wrong");
        setPrediction(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) return <p className="text-center mt-5">Loading prediction...</p>;
  if (error) return <p className="text-danger text-center mt-5">{error}</p>;

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Student Prediction</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Readiness Level</th>
              <th>Shortlisted</th>
              <th>Final Score</th>
              <th>Prediction Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{prediction.readiness_level}</td>
              <td>{prediction.shortlisted ? "Yes" : "No"}</td>
              <td>
                <div className="progress">
                  <div
                    className={`progress-bar ${
                      prediction.final_score >= 80
                        ? "bg-success"
                        : prediction.final_score >= 50
                        ? "bg-warning"
                        : "bg-danger"
                    }`}
                    role="progressbar"
                    style={{ width: `${prediction.final_score}%` }}
                  >
                    {prediction.final_score}%
                  </div>
                </div>
              </td>
              
              <td>{new Date(prediction.created_at).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
