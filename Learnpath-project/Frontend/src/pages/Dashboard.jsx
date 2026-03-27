import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="py-4">

      <h2 className="mb-4 fw-bold">
        Career Recommendation Dashboard 🎯
      </h2>

      <Row className="g-4">

        {/* Profile Summary */}
        <Col md={4}>
          <Card className="shadow h-100">
            <Card.Body>
              <Card.Title>My Profile</Card.Title>

              <p><b>Year:</b> Final Year</p>
              <p><b>Branch:</b> Computer</p>
              <p><b>Goal:</b> Software Engineer</p>

              <Button size="sm" variant="outline-primary">
                Edit Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Recommendation */}
        <Col md={8}>
          <Card className="shadow h-100">
            <Card.Body>

              <Card.Title>
                Recommended Path 🚀
              </Card.Title>

              <p className="mt-3">
                Based on your profile, we recommend:
              </p>

              <h5 className="text-primary">
                Full Stack Developer
              </h5>

              <ul className="mt-3">
                <li>Learn HTML, CSS, JavaScript</li>
                <li>Master React & Node.js</li>
                <li>Practice DSA Daily</li>
                <li>Build 5+ Projects</li>
                <li>Prepare for Interviews</li>
              </ul>

            </Card.Body>
          </Card>
        </Col>

        {/* Skills */}
        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>

              <Card.Title>Skills to Learn 💡</Card.Title>

              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Git & GitHub</li>
                <li>Problem Solving</li>
              </ul>

            </Card.Body>
          </Card>
        </Col>

        {/* Resources */}
        <Col md={6}>
          <Card className="shadow h-100">
            <Card.Body>

              <Card.Title>Learning Resources 📚</Card.Title>

              <ul>
                <li>
                  <a 
                    href="https://www.freecodecamp.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    freeCodeCamp
                  </a>
                </li>

                <li>
                  <a 
                    href="https://www.geeksforgeeks.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    GeeksforGeeks
                  </a>
                </li>

                <li>
                  <a 
                    href="https://www.coursera.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Coursera
                  </a>
                </li>

                <li>
                  <a 
                    href="https://www.udemy.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Udemy
                  </a>
                </li>

                <li>
                  <a 
                    href="https://www.youtube.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    YouTube Tutorials
                  </a>
                </li>
              </ul>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
};

export default Dashboard;