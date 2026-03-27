import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { placement, masters, entrepreneur,govt } = state?.scores || {};

  const total = placement + masters + other;
  const placementPct = ((placement / total) * 100).toFixed(1);
  const mastersPct = ((masters / total) * 100).toFixed(1);
  const enterprenurPct = ((entrepreneur / total) * 100).toFixed(1);
  const govtPct = ((govt/ total) * 100).toFixed(1);

  return (
    <div className="result-container">
      <h2>Psychometric Test Result</h2>
      <p>Placement Interest: {placementPct}%</p>
      <p>Masters Interest: {mastersPct}%</p>
      <p>Enterprenur  Interest: {enterprenurPct}%</p>
      <p>Govt Job  Interest: {govtPct}%</p>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Result;
