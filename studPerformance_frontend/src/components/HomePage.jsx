import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css"; 


export default function Homepage() {
  const navigate = useNavigate();

  return (
    <>
     
      <div className="homepage">
        <div className="homepage-overlay">
          <h1>Welcome to Student Performance Portal</h1>
          <div className="buttons">
            <button onClick={() => navigate("/login")}>Login</button>
            <button onClick={() => navigate("/register")}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}
