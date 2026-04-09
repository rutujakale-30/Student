












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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function PredictionView({ token }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [performanceData, setPerformanceData] = useState(null);
  const [showPerformance, setShowPerformance] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [readinessFilter, setReadinessFilter] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Fetch predictions
  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        setLoading(true);
        setError("");
        const url = `http://localhost:4444/prediction/preadmin?year=${year}${month ? `&month=${month}` : ""}`;
        const res = await axios.get(url, { headers: { Authorization: `Bearer ${token}` } });
        if (res.data?.predictions?.length > 0) {
          setPredictions(res.data.predictions);
        } else {
          setPredictions([]);
          setError("No data available for this year/month");
        }
      } catch (err) {
        setPredictions([]);
        setError(err.response?.data?.message || "Error fetching predictions");
      } finally {
        setLoading(false);
        setCurrentPage(1);
      }
    };

    fetchPredictions();
  }, [year, month, token]);

  // Fetch performance chart
  const fetchPerformanceData = async () => {
    try {
      const res = await axios.get("http://localhost:4444/prediction/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const perf = res.data;
      setPerformanceData({
        labels: ["Excellent", "Average", "Low"],
        datasets: [
          {
            label: "Student Performance",
            data: [perf.Excellent, perf.Average, perf.Low],
            backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
          },
        ],
      });
      setShowPerformance(true);
    } catch (err) {
      setError("Error fetching performance data");
    }
  };

  // Filter predictions by readiness
  const filteredPredictions = predictions.filter(
    (p) => readinessFilter === "" || p.readiness_level === readinessFilter
  );

  // Pagination logic
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredPredictions.slice(indexOfFirstRecord, indexOfLastRecord);
  const totalPages = Math.max(1, Math.ceil(filteredPredictions.length / recordsPerPage));
  const changePage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) setCurrentPage(pageNumber);
  };

  const years = Array.from({ length: 6 }, (_, i) => currentYear - i);

  return (
    <div className="container my-4 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-4">📊 Student Predictions (Admin)</h2>

      {/* Filters */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-3">
          <label className="form-label fw-bold">Select Year</label>
          <select className="form-select" value={year} onChange={(e) => setYear(Number(e.target.value))}>
            {years.map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label fw-bold">Select Month</label>
          <select className="form-select" value={month} onChange={(e) => setMonth(e.target.value)}>
            <option value="">All</option>
            {[...Array(12)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label fw-bold">Readiness Filter</label>
          <select
            className="form-select"
            value={readinessFilter}
            onChange={(e) => {
              setReadinessFilter(e.target.value);
              setCurrentPage(1); // Reset to first page
            }}
          >
            <option value="">All</option>
            <option value="Excellent">Excellent</option>
            <option value="Average">Average</option>
            <option value="Low">Low</option>
          </select>
        </div>
      </div>

      {loading && <div className="text-center text-muted">Loading predictions...</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {!loading && !error && currentRecords.length > 0 && (
        <>
          {/* Table */}
          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle shadow-sm">
              <thead className="table-dark">
                <tr>
                  <th>Student Name</th>
                  <th>Average Score</th>
                  <th>Readiness Level</th>
                  <th>Shortlisted</th>
                </tr>
              </thead>
              <tbody>
                {currentRecords.map((p) => (
                  <tr key={p.sid}>
                    <td>{p.name}</td>
                    <td>{p.avg_score}</td>
                    <td className={
                      p.readiness_level === "Excellent" ? "text-success fw-bold" :
                      p.readiness_level === "Average" ? "text-warning fw-bold" :
                      "text-danger fw-bold"
                    }>
                      {p.readiness_level}
                    </td>
                    <td>{p.shortlisted ? <span className="badge bg-success">Yes</span> :
                                           <span className="badge bg-danger">No</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <nav className="mt-3">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => changePage(currentPage - 1)}>Previous</button>
              </li>
              {[...Array(totalPages)].map((_, i) => (
                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? "active" : ""}`}>
                  <button className="page-link" onClick={() => changePage(i + 1)}>{i + 1}</button>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                <button className="page-link" onClick={() => changePage(currentPage + 1)}>Next</button>
              </li>
            </ul>
          </nav>

          {/* Bar Chart Button */}
          <div className="text-center mt-4">
            <button className="btn btn-lg btn-primary" onClick={fetchPerformanceData}>
              📊 View All Performance (Bar Chart)
            </button>
          </div>
        </>
      )}

      {/* Bar Chart */}
      {showPerformance && performanceData && (
        <div className="container my-5 p-4 bg-white rounded shadow">
          <h3 className="text-center mb-4">Overall Student Performance</h3>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <Bar
              data={performanceData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top", labels: { font: { size: 14 }, color: "#333" } },
                  title: { display: true, text: "Performance Distribution", font: { size: 16 }, color: "#111" },
                },
                scales: {
                  y: { beginAtZero: true, ticks: { stepSize: 1, color: "#555", font: { size: 12 } } },
                  x: { ticks: { color: "#555", font: { size: 12 } } }
                }
              }}
            />
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-sm btn-outline-secondary"
              style={{ fontSize: "0.85rem", padding: "0.25rem 0.5rem" }}
              onClick={() => setShowPerformance(false)}
            >
              🔙 Back
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
