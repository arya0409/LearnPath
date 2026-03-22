import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Welcome to LearnSmart</h1>
      <p className="lead mt-3">
        A personalized learning platform for engineering graduates.
      </p>
      <Link to="/recommendation">
        <Button variant="primary" size="lg">
          Get Personalized Recommendations
        </Button>
      </Link>
    </div>
  );
};

export default home;
