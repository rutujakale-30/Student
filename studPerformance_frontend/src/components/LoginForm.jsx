// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./LoginForm.css"; // import CSS file

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:4444/login", { email, password });
//       localStorage.setItem("token", res.data.token);

//       if (res.data.role === "admin") {
//         navigate("/admin-dashboard");
//       } else if (res.data.role === "student") {
//         navigate("/student-dashboard");
//       }
//     } catch (err) {
//       alert(err.response?.data?.error || "Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//         {/* Back button */}
//         <button 
//           className="back-button" 
//           onClick={() => navigate("/")}
//         >
//           Back
//         </button>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css"; // import CSS file

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4444/login", { email, password });

      // 🔹 Token, uid, username आणि role save करा
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("uid", res.data.uid);
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("role", res.data.role);

      // 🔹 Redirect based on role
      if (res.data.role === "admin") {
        navigate("/admin-dashboard");
      } else if (res.data.role === "student") {
        navigate("/student-dashboard");
      }
    } catch (err) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {/* Back button */}
        <button 
          className="back-button" 
          onClick={() => navigate("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}
