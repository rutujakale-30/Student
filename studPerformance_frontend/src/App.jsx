



// // // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // // Main Pages
// // // // import Homepage from "./components/HomePage";
// // // // import Navbar from "./components/Navbar";
// // // // import RegisterForm from "./components/RegisterForm";
// // // // import LoginForm from "./components/LoginForm";
// // // // import AdminDashboard from "./components/AdminDashboard";
// // // // import StudentDashboard from "./components/StudentDashboard";

// // // // // Student Dashboard Nested Pages
// // // // import StudentHome from "./components/StudentHome";
// // // // import CoursesPage from "./components/CoursesPage";
// // // // import PerformancePage from "./components/PerformancePage";
// // // // import AboutPage from "./components/AboutPage";
// // // // import ContactPage from "./components/ContactPage";


// // // // import StudentPerformanceView from "./components/StudentPerformanceView";

// // // // // Performance Management Pages
// // // // import PerformanceManagement from "./components/PerformanceManagement";
// // // // import AllPerformances from "./components/AllPerformances";
// // // // import PerformanceFormPage from "./components/PerformanceFormPage";



// // // // import StudentCourses from "./components/StudentCourses";

// // // // function App() {
// // // //   const token = "YOUR_JWT_TOKEN_HERE"; // JWT token

// // // //   return (
// // // //     <Router>
// // // //       {/* Navbar constant for all pages */}
// // // //       <Navbar />

// // // //       <div className="page-content">
// // // //         <Routes>
// // // //           {/* Public Routes */}
// // // //           <Route path="/" element={<Homepage />} />
// // // //           <Route path="/register" element={<RegisterForm />} />
// // // //           <Route path="/login" element={<LoginForm />} />
// // // //           <Route path="/about" element={<AboutPage />} />
// // // //           <Route path="/contact" element={<ContactPage />} />

// // // //           {/* Admin Dashboard */}
// // // //           <Route path="/admin-dashboard" element={<AdminDashboard />} />

// // // //           {/* Student Dashboard with Nested Routes */}
// // // //           <Route path="/student-dashboard" element={<StudentDashboard />}>
// // // //             <Route path="home" element={<StudentHome />} />
// // // //             <Route path="courses" element={<CoursesPage />} />
// // // //             <Route path="performance" element={<PerformancePage />} />
// // // //             <Route path="all-courses" element={<StudentCourses />} />
// // // //           </Route>

// // // //           {/* Performance Management Routes */}
// // // //           <Route
// // // //             path="/performance-management"
// // // //             element={<PerformanceManagement token={token} />}
// // // //           />
// // // //           <Route path="/performance/all" element={<AllPerformances token={token} />} />
// // // //           <Route
// // // //             path="/performance-form/:type/:sid"
// // // //             element={<PerformanceFormPage token={token} />}
// // // //           />
// // // //           <Route path="performance" element={<StudentPerformanceView />} />

// // // //           {/* Catch-all Route */}
// // // //           <Route path="*" element={<Navigate to="/" />} />
// // // //         </Routes>
// // // //       </div>
// // // //     </Router>
// // // //   );
// // // // }

// // // // export default App;



// // // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // // Main Pages
// // // import Homepage from "./components/HomePage";
// // // import Navbar from "./components/Navbar";
// // // import RegisterForm from "./components/RegisterForm";
// // // import LoginForm from "./components/LoginForm";
// // // import AdminDashboard from "./components/AdminDashboard";
// // // import StudentDashboard from "./components/StudentDashboard";

// // // // Student Dashboard 
// // // import StudentHome from "./components/StudentHome";
// // // import CoursesPage from "./components/CoursesPage";
// // // import StudentPerformanceView from "./components/StudentPerformanceView"; // Updated name
// // // import AboutPage from "./components/AboutPage";
// // // import ContactPage from "./components/ContactPage";
// // // import StudentCourses from "./components/StudentCourses";

// // // function App() {
// // //   const token = localStorage.getItem("token"); // JWT token from login

// // //   return (
// // //     <Router>
// // //       <Navbar />

// // //       <div className="page-content">
// // //         <Routes>
// // //           {/* Public Routes */}
// // //           <Route path="/" element={<Homepage />} />
// // //           <Route path="/register" element={<RegisterForm />} />
// // //           <Route path="/login" element={<LoginForm />} />
// // //           <Route path="/about" element={<AboutPage />} />
// // //           <Route path="/contact" element={<ContactPage />} />

// // //           {/* Admin Dashboard */}
// // //           <Route path="/admin-dashboard" element={<AdminDashboard />} />

// // //           {/* Student Dashboard Nested Routes */}
// // //           <Route path="/student-dashboard" element={<StudentDashboard />}>
// // //             <Route path="home" element={<StudentHome />} />
// // //             <Route path="courses" element={<CoursesPage />} />
// // //             <Route path="performance" element={<StudentPerformanceView />} />
// // //             <Route path="all-courses" element={<StudentCourses />} />
// // //           </Route>

         
// // //           {/* Catch-all */}
// // //           <Route path="*" element={<Navigate to="/" />} />
// // //         </Routes>
// // //       </div>
// // //     </Router>
// // //   );
// // // }

// // // export default App;



// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// // // Main Pages
// // import Homepage from "./components/HomePage";
// // import Navbar from "./components/Navbar";
// // import RegisterForm from "./components/RegisterForm";
// // import LoginForm from "./components/LoginForm";
// // import AdminDashboard from "./components/AdminDashboard";
// // import StudentDashboard from "./components/StudentDashboard";

// // // Student Dashboard 
// // import StudentHome from "./components/StudentHome";
// // import CoursesPage from "./components/CoursesPage";
// // import StudentPerformanceView from "./components/StudentPerformanceView";
// // import AboutPage from "./components/AboutPage";
// // import ContactPage from "./components/ContactPage";
// // import StudentCourses from "./components/StudentCourses";

// // // Admin Prediction Component
// // import PredictionView from "./components/PredictionView";
// // import StudentPredictionView from "./StudentPredictionView";


// // function App() {
// //   const token = localStorage.getItem("token"); // JWT token from login

// //   return (
// //     <Router>
// //       <Navbar />

// //       <div className="page-content">
// //         <Routes>
// //           {/* Public Routes */}
// //           <Route path="/" element={<Homepage />} />
// //           <Route path="/register" element={<RegisterForm />} />
// //           <Route path="/login" element={<LoginForm />} />
// //           <Route path="/about" element={<AboutPage />} />
// //           <Route path="/contact" element={<ContactPage />} />

// //           {/* Admin Dashboard */}
// //           <Route path="/admin-dashboard" element={<AdminDashboard />}>
// //             {/* Nested Admin Prediction */}
// //             <Route
// //               path="predictions"
// //              element={<PredictionView year={2025} month={9}  token={token} />}
// //             />
// //           </Route>
// //           <Route
// //               path="prediction"
// //               element={<StudentPredictionView token={token} />}
// //             />
// //           </Route>
          

// //           {/* Student Dashboard Nested Routes */}
// //           <Route path="/student-dashboard" element={<StudentDashboard />}>
// //             <Route path="home" element={<StudentHome />} />
// //             <Route path="courses" element={<CoursesPage />} />
// //             <Route path="performance" element={<StudentPerformanceView />} />
// //             <Route path="all-courses" element={<StudentCourses />} />
// //           </Route>

// //           {/* Catch-all */}
// //           <Route path="*" element={<Navigate to="/" />} />
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Main Pages
// import Homepage from "./components/HomePage";
// import Navbar from "./components/Navbar";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";
// import AdminDashboard from "./components/AdminDashboard";
// import StudentDashboard from "./components/StudentDashboard";

// // Student Dashboard
// import StudentHome from "./components/StudentHome";
// import CoursesPage from "./components/CoursesPage";
// import StudentPerformanceView from "./components/StudentPerformanceView";
// import AboutPage from "./components/AboutPage";
// import ContactPage from "./components/ContactPage";
// import StudentCourses from "./components/StudentCourses";

// // Admin Prediction Component
// import PredictionView from "./components/PredictionView";
// import StudentPredictionView from "./components/StudentPredictionView";

// function App() {
//   const token = localStorage.getItem("token");

//   return (
//     <Router>
//       <Navbar />
//       <div className="page-content">
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Homepage />} />
//           <Route path="/register" element={<RegisterForm />} />
//           <Route path="/login" element={<LoginForm />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />

//           {/* Admin Dashboard */}
//           <Route path="/admin-dashboard" element={<AdminDashboard />}>
//             <Route
//               path="predictions"
//               element={<PredictionView year={2025} month={9} token={token} />}
//             />
//           </Route>

//           {/* Student Dashboard */}
//           <Route path="/student-dashboard" element={<StudentDashboard />}>
//             <Route path="home" element={<StudentHome />} />
//             <Route path="courses" element={<CoursesPage />} />
//             <Route path="performance" element={<StudentPerformanceView />} />
//             <Route path="all-courses" element={<StudentCourses />} />
//             <Route path="prediction" element={<StudentPredictionView token={token} />} />
          
//             <Route
//               path="prediction"
//               element={<StudentPredictionView token={token} />}
//             />
//           </Route>

//           {/* Catch-all */}
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Main Pages
import Homepage from "./components/HomePage";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";

// Student Dashboard
import StudentHome from "./components/StudentHome";
import CoursesPage from "./components/CoursesPage";
import StudentPerformanceView from "./components/StudentPerformanceView";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import StudentCourses from "./components/StudentCourses";

// Admin Prediction Component
import PredictionView from "./components/PredictionView";
import StudentPredictionView from "./components/StudentPredictionView";

// Performance Components
import PerformanceManagement from "./components/PerformanceManagement";
import PerformanceList from "./components/PerformanceList";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      <div className="page-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Dashboard with children */}
          <Route
            path="/admin-dashboard/*"
            element={<AdminDashboard />}
          />

          {/* PerformanceList as independent page inside AdminDashboard layout */}
          <Route
            path="/performances"
            element={
              <AdminDashboard>
                <PerformanceList />
              </AdminDashboard>
            }
          />

          {/* Student Dashboard */}
          <Route path="/student-dashboard/*" element={<StudentDashboard />} />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
