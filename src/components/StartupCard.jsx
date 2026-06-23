import React from "react";

function StartupCard({ startup, onClick }) {
  return (
    <div
      onClick={() => onClick(startup)}
      className="border rounded-lg p-4 shadow-md cursor-pointer hover:shadow-xl"
    >
      <h3>{startup.name}</h3>
      <p>{startup.description}</p>
      <p><strong>Investment:</strong> {startup.investment}</p>
    </div>
  );
}

export default StartupCard;