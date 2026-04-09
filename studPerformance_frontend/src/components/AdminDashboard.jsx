// // src/components/AdminDashboard.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdminDashboard.css";
// import StudentManagement from "./StudentManagement";
// import CourseManagement from "./CourseManagement";
// //import PerformanceManagement from "./PerformanceManagement";

// import PerformanceManagement from "./PerformanceManagement";


// export default function AdminDashboard() {
//   const navigate = useNavigate();
//   const [activeSection, setActiveSection] = useState("dashboard");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div>
//           <h2>Admin Panel</h2>
//           <nav>
//             <button 
//               className={`sidebar-button ${activeSection === "dashboard" ? "active" : ""}`} 
//               onClick={() => setActiveSection("dashboard")}
//             >
//               <span className="icon">🏠</span> Dashboard
//             </button>

//             <button 
//               className={`sidebar-button ${activeSection === "students" ? "active" : ""}`} 
//               onClick={() => setActiveSection("students")}
//             >
//               <span className="icon">🎓</span> Students
//             </button>

//             <button 
//               className={`sidebar-button ${activeSection === "courses" ? "active" : ""}`} 
//               onClick={() => setActiveSection("courses")}
//             >
//               <span className="icon">📚</span> Courses
//             </button>

//             <button 
//               className={`sidebar-button ${activeSection === "performance" ? "active" : ""}`} 
//               onClick={() => setActiveSection("performance")}
//             >
//               <span className="icon">📊</span> Performance
//             </button>

//             <button 
//               className={`sidebar-button ${activeSection === "prediction" ? "active" : ""}`} 
//               onClick={() => setActiveSection("prediction")}
//             >
//               <span className="icon">🎯</span> Student Prediction
//             </button>
//           </nav>
//         </div>

//         <button onClick={handleLogout} className="logout-button">
//           Logout
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         {activeSection === "dashboard" && (
//           <>
//             <h1>Welcome, Admin!</h1>
//             <div className="cards-container">
//               <div className="card">👩‍🎓 Manage Students</div>
//               <div className="card">📘 Manage Courses</div>
//               <div className="card">📈 Track Performance</div>
//               <div className="card">🎯 Student Prediction</div>
//             </div>
//           </>
//         )}

//         {activeSection === "students" && <StudentManagement />}

//         {activeSection === "courses" && <CourseManagement />}

//         {activeSection === "performance" && <PerformanceManagement /> }

//         {activeSection === "prediction" && <h2>🎯 Student Prediction Coming Soon...</h2>}
//       </main>
//     </div>
//   );
// }





import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";
import StudentManagement from "./StudentManagement";
import CourseManagement from "./CourseManagement";
import PerformanceManagement from "./PerformanceManagement";
import PredictionView from "./PredictionView";

export default function AdminDashboard({ children }) {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("dashboard");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(""); // optional month

  const token = localStorage.getItem("token"); // JWT token

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div>
          <h2>Admin Panel</h2>
          <nav>
            <button
              className={`sidebar-button ${activeSection === "dashboard" ? "active" : ""}`}
              onClick={() => setActiveSection("dashboard")}
            >
              <span className="icon">🏠</span> Dashboard
            </button>
            <button
              className={`sidebar-button ${activeSection === "students" ? "active" : ""}`}
              onClick={() => setActiveSection("students")}
            >
              <span className="icon">🎓</span> Students
            </button>
            <button
              className={`sidebar-button ${activeSection === "courses" ? "active" : ""}`}
              onClick={() => setActiveSection("courses")}
            >
              <span className="icon">📚</span> Courses
            </button>
            <button
              className={`sidebar-button ${activeSection === "performance" ? "active" : ""}`}
              onClick={() => setActiveSection("performance")}
            >
              <span className="icon">📊</span> Performance
            </button>
            <button
              className={`sidebar-button ${activeSection === "prediction" ? "active" : ""}`}
              onClick={() => setActiveSection("prediction")}
            >
              <span className="icon">🎯</span> Student Prediction
            </button>
          </nav>
        </div>

        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children ? (
          children
        ) : (
          <>
            {activeSection === "dashboard" && (
              <>
                <h1>Welcome, Admin!</h1>
                <div className="cards-container">
                  <div className="card">👩‍🎓 Manage Students</div>
                  <div className="card">📘 Manage Courses</div>
                  <div className="card">📈 Track Performance</div>
                  <div className="card">🎯 Student Prediction</div>
                </div>
              </>
            )}
            {activeSection === "students" && <StudentManagement />}
            {activeSection === "courses" && <CourseManagement />}
            {activeSection === "performance" && <PerformanceManagement />}
            {activeSection === "prediction" && <PredictionView year={year} month={month || null} token={token} />}
          </>
        )}
      </main>
    </div>
  );
}
