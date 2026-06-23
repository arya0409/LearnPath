import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Recommendation() {
  const [branch, setBranch] = useState("");
  const [exam, setExam] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const navigate = useNavigate();
  const location=useLocation();
  const [goal, setGoal] = useState(
  location.state?.goal || ""
);

  const getRecommendation = async () => {
    if (goal === "not_decided") {
      navigate("/psychometric-test");
      return;
    }

    if (!branch || !goal) {
      alert("Please select Branch and Goal");
      return;
    }

    setLoading(true);

    try {
      const ML_API_URL = process.env.REACT_APP_ML_API_URL || 'http://127.0.0.1:5000';
      const response = await axios.post(`${ML_API_URL}/recommend`, {
        branch: branch,
        goal: goal,
        target_exam: exam
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend connection error");
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Career Recommendation</h2>

      {/* Branch Dropdown */}
      <select onChange={(e) => setBranch(e.target.value)}>
        <option value="">Select Branch</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="Mechanical">Mechanical</option>
        <option value="Electrical">Electrical</option>
        <option value="ENTC">ENTC</option>
        <option value="Civil">Civil</option>
      </select>

      {/* Goal Dropdown */}
      <select onChange={(e) => setGoal(e.target.value)}>
        <option value="">Select Goal</option>
        <option value="placement">Placement</option>
        <option value="masters">Masters</option>
        <option value="govt">Government Exam</option>
        <option value="startup">Startup</option>
        <option value="not_decided">Not Decided Yet</option>

      </select>

      {/* Exam Dropdown */}
      <select onChange={(e) => setExam(e.target.value)}>
        <option value="">Select Exam (Optional)</option>
        <option value="GATE">GATE</option>
        <option value="CAT">CAT</option>
      </select>

{/* <button 
  onClick={getRecommendation}
  
  style={{
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px"
  }}
>
  Get Recommendation
</button> */}
<button onClick={getRecommendation}>
  {loading ? "Loading..." : "Get Recommendation"}
</button>
      {/* Result */}
     {result && (
  <div style={{
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9"
  }}>
    <h2>{result.title}</h2>
    <p>{result.description}</p>

    <h3> Startup Options</h3>
   {goal === "startup" ? (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px"
  }}>
    {result.steps.map((step, index) => (
      <div
        key={index}
        onClick={() => setSelectedStartup(step)}
        style={{
          padding: "20px",
          borderRadius: "12px",
          backgroundColor: "white",
          boxShadow: "0px 3px 8px rgba(0,0,0,0.1)",
          cursor: "pointer"
        }}
      >
       <div style={{ fontSize: "40px" }}>{step.icon}</div>
<h3>{step.name}</h3>
        <p>{step.description}</p>
        <p><strong>Investment:</strong> {step.investment}</p>
      </div>
    ))}
  </div>
) : (
  result.steps.map((step, index) => (
    <div key={index} style={{
      margin: "15px 0",
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0px 3px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>Step {index + 1}: {step.title}</h3>

      <h4>Recommended Resources:</h4>

      {step.resources.map((res, i) => (
        <div key={i} style={{ marginBottom: "8px" }}>
          🔗 <a href={res.link} target="_blank" rel="noreferrer">
            {res.name}
          </a>
          ⭐ {res.rating}
        </div>
      ))}
    </div>
  ))
)}
{/* cat */}
{result.syllabus && (
  <>
    <h3>CAT Syllabus</h3>
    <ul>
      {result.syllabus.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </>
)}
{result.timeline && (
  <>
    <h3>Monthly Timeline</h3>
    <ol>
      {result.timeline.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  </>
)}

{result.top_colleges && (
  <>
    <h3>Top MBA Colleges Through CAT</h3>
    {result.top_colleges.map((college, index) => (
      <div
        key={index}
        style={{
          padding: "10px",
          marginBottom: "10px",
          border: "1px solid #ddd",
          borderRadius: "8px"
        }}
      >
        <strong>{college.name}</strong> — {college.cutoff}
      </div>
    ))}
  </>
)}


  </div>
)}
{selectedStartup && (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)"
  }}>
   <div style={{
  backgroundColor: "white",
  margin: "3% auto",
  padding: "30px",
  width: "60%",
  maxHeight: "85vh",
  overflowY: "auto",
  borderRadius: "12px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
}}>
      <button onClick={() => setSelectedStartup(null)}>
        Close
      </button>

      <h2>{selectedStartup.name}</h2>
      <p>{selectedStartup.description}</p>
      <p><strong>Investment:</strong> {selectedStartup.investment}</p>
      <p><strong>Income Potential:</strong> {selectedStartup.income}</p>
<p><strong>Break Even:</strong> {selectedStartup.break_even}</p>
<p><strong>Startup Type:</strong> {selectedStartup.startup_type}</p>

      {selectedStartup.skills && (
        <>
          <h3>Skills Required</h3>
          <ul>
            {selectedStartup.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </>
      )}

      {selectedStartup.how_to_start && (
        <>
          <h3>How To Start</h3>
          <ol>
            {selectedStartup.how_to_start.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </>
      )}
      {selectedStartup.resources && (
  <>
    <h3>Resources</h3>
    {selectedStartup.resources.map((resource, index) => (
      <div key={index}>
        🔗 <a
          href={resource.link}
          target="_blank"
          rel="noreferrer"
        >
          {resource.name}
        </a>
      </div>
    ))}
    {selectedStartup.timeline && (
  <>
    <h3>Startup Timeline</h3>
    <ol>
      {selectedStartup.timeline.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  </>
)}
<button
  onClick={() => window.print()}
  style={{
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"
  }}
>
  Save Startup Plan
</button>
  </>
  
)}
    </div>
  </div>
)}
    </div>
  );
}

export default Recommendation;