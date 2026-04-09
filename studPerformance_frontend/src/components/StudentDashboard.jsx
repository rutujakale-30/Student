// // // // import React, { useState } from "react";
// // // // import { FaHome, FaBookOpen, FaChartLine, FaPen, FaSignOutAlt } from "react-icons/fa";
// // // // import { useNavigate } from "react-router-dom";
// // // // import StudentCourses from "./StudentCourses";
// // // // import "./StudentDashboard.css";

// // // // export default function StudentDashboard() {
// // // //   const [activeTab, setActiveTab] = useState("home");
// // // //   const navigate = useNavigate();

// // // //   // ✅ Logout Function
// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem("token");
// // // //     localStorage.removeItem("role");
// // // //     navigate("/login");
// // // //   };

// // // //   return (
// // // //     <div className="dashboard-container">
// // // //       {/* Sidebar */}
// // // //       <aside className="sidebar">
// // // //         <div>
// // // //           <h2>Student Dashboard</h2>
// // // //           <nav>
// // // //             <button
// // // //               className={`sidebar-button ${activeTab === "home" ? "active" : ""}`}
// // // //               onClick={() => setActiveTab("home")}
// // // //             >
// // // //               <FaHome className="icon" /> Home
// // // //             </button>
// // // //             <button
// // // //               className={`sidebar-button ${activeTab === "courses" ? "active" : ""}`}
// // // //               onClick={() => setActiveTab("courses")}
// // // //             >
// // // //               <FaBookOpen className="icon" /> Courses
// // // //             </button>
// // // //             <button
// // // //               className={`sidebar-button ${activeTab === "performance" ? "active" : ""}`}
// // // //               onClick={() => setActiveTab("performance")}
// // // //             >
// // // //               <FaChartLine className="icon" /> Performance
// // // //             </button>
// // // //             <button
// // // //               className={`sidebar-button ${activeTab === "tests" ? "active" : ""}`}
// // // //               onClick={() => setActiveTab("tests")}
// // // //             >
// // // //               <FaPen className="icon" /> Tests
// // // //             </button>
// // // //           </nav>
// // // //         </div>

// // // //         {/* ✅ Logout Button */}
// // // //         <button className="logout-button" onClick={handleLogout}>
// // // //           <FaSignOutAlt className="icon" /> Logout
// // // //         </button>
// // // //       </aside>

// // // //       {/* Main Content */}
// // // //       <main className="main-content">
// // // //         {activeTab === "home" && (
// // // //           <>
// // // //             <h1>Welcome, Student!</h1>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search courses..."
// // // //               className="input-box"
// // // //             />
// // // //           </>
// // // //         )}

// // // //         {activeTab === "courses" && <StudentCourses />}

// // // //         {activeTab === "performance" && (
// // // //           <div>
// // // //             <h2>Performance</h2>
// // // //             <p>Performance Section Coming Soon...</p>
// // // //           </div>
// // // //         )}

// // // //         {activeTab === "tests" && (
// // // //           <div>
// // // //             <h2>Tests</h2>
// // // //             <p>Upcoming and past tests will be displayed here...</p>
// // // //           </div>
// // // //         )}
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // }




// // import React, { useState } from "react";
// // import { FaHome, FaBookOpen, FaChartLine, FaPen, FaSignOutAlt } from "react-icons/fa";
// // import { useNavigate } from "react-router-dom";
// // import StudentCourses from "./StudentCourses";
// // import StudentPerformanceView from "./StudentPerformanceView";// ← Import updated performance view
// // import StudentPredictionView from "./StudentPredictionView"; 
// // import "./StudentDashboard.css";

// // export default function StudentDashboard() {
// //   const [activeTab, setActiveTab] = useState("home");
// //   const navigate = useNavigate();

// //   // Logout Function
// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     localStorage.removeItem("role");
// //     navigate("/login");
// //   };

// //   return (
// //     <div className="dashboard-container">
// //       {/* Sidebar */}
// //       <aside className="sidebar">
// //         <div>
// //           <h2>Student Dashboard</h2>
// //           <nav>
// //             <button
// //               className={`sidebar-button ${activeTab === "home" ? "active" : ""}`}
// //               onClick={() => setActiveTab("home")}
// //             >
// //               <FaHome className="icon" /> Home
// //             </button>
// //             <button
// //               className={`sidebar-button ${activeTab === "courses" ? "active" : ""}`}
// //               onClick={() => setActiveTab("courses")}
// //             >
// //               <FaBookOpen className="icon" /> Courses
// //             </button>
// //             <button
// //               className={`sidebar-button ${activeTab === "performance" ? "active" : ""}`}
// //               onClick={() => setActiveTab("performance")}
// //             >
// //               <FaChartLine className="icon" /> Performance
// //             </button>
// //             <button
// //               className={`sidebar-button ${activeTab === "Prediction" ? "active" : ""}`}
// //               onClick={() => setActiveTab("Prediction")}
// //             >
// //               <FaPen className="icon" /> Prediction
// //             </button>
// //           </nav>
// //         </div>

// //         {/* Logout Button */}
// //         <button className="logout-button" onClick={handleLogout}>
// //           <FaSignOutAlt className="icon" /> Logout
// //         </button>
// //       </aside>

// //       {/* Main Content */}
// //       <main className="main-content">
// //         {activeTab === "home" && (
// //           <>
// //             <h1>Welcome, Student!</h1>
// //             <input type="text" placeholder="Search courses..." className="input-box" />
// //           </>
// //         )}

// //         {activeTab === "courses" && <StudentCourses />}

// //         {activeTab === "performance" && <StudentPerformanceView />} {/* ← Updated */}

// //          {activeTab === "prediction" && <StudentPredictionView token={token} />}


// //       </main>
// //     </div>
// //   );
// // }


// // // import React, { useState } from "react";
// // // import { FaHome, FaBookOpen, FaChartLine, FaPen, FaSignOutAlt } from "react-icons/fa";
// // // import { useNavigate } from "react-router-dom";
// // // import StudentCourses from "./StudentCourses";
// // // import StudentPerformanceView from "../components/StudentPerformanceView"; // Updated import

// // // import "./StudentDashboard.css";

// // // export default function StudentDashboard() {
// // //   const [activeTab, setActiveTab] = useState("home");
// // //   const navigate = useNavigate();

// // //   // Logout
// // //   const handleLogout = () => {
// // //     localStorage.removeItem("token");
// // //     localStorage.removeItem("role");
// // //     navigate("/login");
// // //   };

// // //   return (
// // //     <div className="dashboard-container">
// // //       {/* Sidebar */}
// // //       <aside className="sidebar">
// // //         <div>
// // //           <h2>Student Dashboard</h2>
// // //           <nav>
// // //             <button
// // //               className={`sidebar-button ${activeTab === "home" ? "active" : ""}`}
// // //               onClick={() => setActiveTab("home")}
// // //             >
// // //               <FaHome className="icon" /> Home
// // //             </button>
// // //             <button
// // //               className={`sidebar-button ${activeTab === "courses" ? "active" : ""}`}
// // //               onClick={() => setActiveTab("courses")}
// // //             >
// // //               <FaBookOpen className="icon" /> Courses
// // //             </button>
// // //             <button
// // //               className={`sidebar-button ${activeTab === "performance" ? "active" : ""}`}
// // //               onClick={() => setActiveTab("performance")}
// // //             >
// // //               <FaChartLine className="icon" /> Performance
// // //             </button>
// // //             <button
// // //               className={`sidebar-button ${activeTab === "tests" ? "active" : ""}`}
// // //               onClick={() => setActiveTab("tests")}
// // //             >
// // //               <FaPen className="icon" /> Tests
// // //             </button>
// // //           </nav>
// // //         </div>

// // //         <button className="logout-button" onClick={handleLogout}>
// // //           <FaSignOutAlt className="icon" /> Logout
// // //         </button>
// // //       </aside>

// // //       {/* Main Content */}
// // //       <main className="main-content">
// // //         {activeTab === "home" && (
// // //           <>
// // //             <h1>Welcome, Student!</h1>
// // //             <input type="text" placeholder="Search courses..." className="input-box" />
// // //           </>
// // //         )}

// // //         {activeTab === "courses" && <StudentCourses />}

// // //         {activeTab === "performance" && <StudentPerformanceView />}

// // //         {activeTab === "tests" && (
// // //           <div>
// // //             <h2>Tests</h2>
// // //             <p>Upcoming and past tests will be displayed here...</p>
// // //           </div>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // }




// import React, { useState } from "react";
// import { FaHome, FaBookOpen, FaChartLine, FaPen, FaSignOutAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import StudentCourses from "./StudentCourses";
// import StudentPerformanceView from "./StudentPerformanceView";
// import StudentPredictionView from "./StudentPredictionView";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [activeTab, setActiveTab] = useState("home");
//   const navigate = useNavigate();

//   // Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     localStorage.removeItem("sid"); 
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div>
//           <h2>Student Dashboard</h2>
//           <nav>
//             <button
//               className={`sidebar-button ${activeTab === "home" ? "active" : ""}`}
//               onClick={() => setActiveTab("home")}
//             >
//               <FaHome className="icon" /> Home
//             </button>
//             <button
//               className={`sidebar-button ${activeTab === "courses" ? "active" : ""}`}
//               onClick={() => setActiveTab("courses")}
//             >
//               <FaBookOpen className="icon" /> Courses
//             </button>
//             <button
//               className={`sidebar-button ${activeTab === "performance" ? "active" : ""}`}
//               onClick={() => setActiveTab("performance")}
//             >
//               <FaChartLine className="icon" /> Performance
//             </button>
//             <button
//               className={`sidebar-button ${activeTab === "prediction" ? "active" : ""}`}
//               onClick={() => setActiveTab("prediction")}
//             >
//               <FaPen className="icon" /> Prediction
//             </button>
//           </nav>
//         </div>

//         {/* Logout Button */}
//         <button className="logout-button" onClick={handleLogout}>
//           <FaSignOutAlt className="icon" /> Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {activeTab === "home" && (
//           <>
//             <h1>Welcome, Student!</h1>
//             <input type="text" placeholder="Search courses..." className="input-box" />
//           </>
//         )}

//         {activeTab === "courses" && <StudentCourses />}
//         {activeTab === "performance" && <StudentPerformanceView />}
//         {activeTab === "prediction" && <StudentPredictionView />}
//       </main>
//     </div>
//   );
// }


import React, { useState } from "react";
import { FaHome, FaBookOpen, FaChartLine, FaPen, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import StudentCourses from "./StudentCourses";
import StudentPerformanceView from "./StudentPerformanceView";
import StudentPredictionView from "./StudentPredictionView";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("home");
  const navigate = useNavigate();

  const token = localStorage.getItem("token"); // ✅ add this

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("sid"); 
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <h2>Student Dashboard</h2>
          <nav>
            <button
              className={`sidebar-button ${activeTab === "home" ? "active" : ""}`}
              onClick={() => setActiveTab("home")}
            >
              <FaHome className="icon" /> Home
            </button>
            <button
              className={`sidebar-button ${activeTab === "courses" ? "active" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              <FaBookOpen className="icon" /> Courses
            </button>
            <button
              className={`sidebar-button ${activeTab === "performance" ? "active" : ""}`}
              onClick={() => setActiveTab("performance")}
            >
              <FaChartLine className="icon" /> Performance
            </button>
            <button
              className={`sidebar-button ${activeTab === "prediction" ? "active" : ""}`}
              onClick={() => setActiveTab("prediction")}
            >
              <FaPen className="icon" /> Prediction
            </button>
          </nav>
        </div>

        {/* Logout Button */}
        <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="icon" /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {activeTab === "home" && (
          <>
            <h1>Welcome, Student!</h1>
            <input type="text" placeholder="Search courses..." className="input-box" />
          </>
        )}

        {activeTab === "courses" && <StudentCourses />}
        {activeTab === "performance" && <StudentPerformanceView />}
       {/* {activeTab === "prediction" && <StudentPredictionView token={token} />} {/* ✅ pass token */}
       {activeTab === "prediction" && <StudentPredictionView />}
      </main>
    </div>
  );
}
