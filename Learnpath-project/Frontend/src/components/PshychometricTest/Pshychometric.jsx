import React, { useState } from "react";
import Questions from "./Questions.json";
import { useNavigate } from "react-router-dom";

const Pshychometric = () => {

  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState({
    placement: 0,
    masters: 0,
    entrepreneur: 0,
    govt: 0
  });

  const navigate = useNavigate();

  const handleAnswer = (option) => {

    const newScores = {
      placement: scores.placement + option.placement,
      masters: scores.masters + option.masters,
      entrepreneur: scores.entrepreneur + option.entrepreneur,
      govt: scores.govt + option.govt
    };

    setScores(newScores);

    if (current + 1 < Questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/psychometric-result", { state: { scores: newScores } });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      {/* Question Number */}
      <h4>
        Question {current + 1} / {Questions.length}
      </h4>

      {/* Question */}
      <h2 style={{ marginBottom: "30px" }}>
        {Questions[current].question}
      </h2>

      {/* Options */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>

        {Questions[current].options.map((opt, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(opt)}
            style={{
              padding: "10px 15px",
              border: "1px solid black",
              backgroundColor: "white",
              cursor: "pointer"
            }}
          >
            {opt.text}
          </button>
        ))}

      </div>

    </div>
  );
};

export default Pshychometric;