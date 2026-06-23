import React from "react";

function StartupDetails({ startup, onClose }) {
  if (!startup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50">
      <div className="bg-white p-6 m-10 rounded-lg">
        <button onClick={onClose}>Close</button>

        <h2>{startup.name}</h2>
        <p>{startup.description}</p>
        <p><strong>Investment:</strong> {startup.investment}</p>

        {startup.skills && (
          <>
            <h3>Skills Required</h3>
            <ul>
              {startup.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </>
        )}

        {startup.how_to_start && (
          <>
            <h3>How to Start</h3>
            <ol>
              {startup.how_to_start.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </>
        )}
      </div>
    </div>
  );
}

export default StartupDetails;