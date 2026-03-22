import React, { useState, useEffect } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();   // ✅ Correct
  const [show, setShow] = useState(false);

  useEffect(() => {                // ✅ Correct
    setShow(true);
  }, []);

  return (
    <Container className="py-5">

      <h2>My Profile</h2>

      <p className="text-muted">
        Welcome to LearnPath 👋
      </p>

      {/* Popup */}
      <Modal
        show={show}
        centered
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title>
            Complete Your Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          To get personalized career guidance,
          please complete your profile.
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              navigate('/profile-setup');   // ✅ Now works
            }}
          >
            Let’s Start
          </Button>
        </Modal.Footer>

      </Modal>

    </Container>
  );
};

export default Profile;
