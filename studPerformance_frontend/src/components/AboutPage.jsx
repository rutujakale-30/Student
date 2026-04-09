import React from "react";
import "./AboutPage.css";
import Navbar from "./Navbar"; 

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* Introduction Card */}
      <div className="info-card">
        <h2>About Student Performance Portal</h2>
        <p>
          This portal helps students and admins track performance, manage courses, 
          and analyze results effectively. It is built with React, Node.js, and MySQL.
        </p>
      </div>

      {/* Prediction Portal Card */}
      <div className="info-card">
        <h2>About Student Performance Prediction Portal</h2>
        <p>
          This portal helps students and admins track and predict academic performance 
          efficiently using historical data and performance metrics.
        </p>
      </div>

      {/* Purpose Card */}
      <div className="info-card">
        <h2>Purpose</h2>
        <p>
          The portal assists teachers in identifying students who may need extra support 
          and helps students understand areas where they can improve their performance.
        </p>
      </div>

    </div>
  );
}
