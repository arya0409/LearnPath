import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const PsychometricResult = () => {

  const location = useLocation();
  const navigate = useNavigate();
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
  let recommendedGoal = "";

if (maxScore === placement) recommendedGoal = "placement";
else if (maxScore === masters) recommendedGoal = "masters";
else if (maxScore === entrepreneur) recommendedGoal = "startup";
else recommendedGoal = "govt";

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
      <button
  onClick={() =>
    navigate("/recommendation", {
      state: { goal: recommendedGoal }
    })
  }
  style={{
    marginTop: "20px",
    padding: "12px 20px",
    cursor: "pointer"
  }}
>
  Continue to Recommendation
</button>

    </div>
  );
};

export default PsychometricResult;