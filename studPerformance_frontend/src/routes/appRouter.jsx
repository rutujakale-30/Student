import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import AdminDashboard from "../components/AdminDashboard";
import StudentDashboard from "../components/StudentDashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Login / Register routes */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        {/* Role-based dashboards */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />

        {/* Optional: default route redirect to login */}
        <Route path="*" element={<LoginForm />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
