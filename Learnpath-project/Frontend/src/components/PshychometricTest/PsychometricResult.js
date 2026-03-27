import React from "react";
import { useLocation } from "react-router-dom";

const PsychometricResult = () => {

  const location = useLocation();
  const scores = location.state?.scores;

  if (!scores) {
    return <h2>No result available</h2>;
  }

  const { placement, masters, entrepreneur, govt } = scores;

  const maxScore = Math.max(placement, masters, entrepreneur, govt);

  let result = "";

  if (maxScore === placement) result = "Placement / Software Job";
  else if (maxScore === masters) result = "Higher Studies (MS/MTech)";
  else if (maxScore === entrepreneur) result = "Startup / Entrepreneurship";
  else result = "Government Jobs";

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Your Career Recommendation</h2>

      <h3 style={{ marginTop: "20px", color: "green" }}>
        {result}
      </h3>

      <h4 style={{ marginTop: "30px" }}>Score Analysis</h4>

      <p>Placement: {placement}</p>
      <p>Masters: {masters}</p>
      <p>Entrepreneur: {entrepreneur}</p>
      <p>Government: {govt}</p>

    </div>
  );
};

export default PsychometricResult;