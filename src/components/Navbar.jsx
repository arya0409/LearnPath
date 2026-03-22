// import React from 'react';
// import {Link} from 'react-router-dom';
// import {Navbar,Nav,Container,Button} from 'react-bootstrap';
// import logolearnpath from '../assets/logolearnpath.png';
// const Navabar=()=>{
//     return (
//         <Navbar bg="light" expand="lg" className="shadow-sm">
// <Container fluid className="px-3">
//         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
//         <img 
//         src={logolearnpath}
//         alt="learnpathlogo"
//            style={{ height: '55px', width: 'auto' }}

//         className="d-inline-block align-top"/>
//         <span className="fw-bold fs-4">LearnPath</span>
//         </Navbar.Brand>

//         <Navbar.Toggle />

//         <Navbar.Collapse>

//           {/* Center Menu */}
//           <Nav className="mx-auto gap-3">

//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/industry-trends">
//               Industry Trends
//             </Nav.Link>

//           </Nav>

//           {/* Right Buttons */}
//           <Nav className="gap-2">

//             <Nav.Link as={Link} to="/login">Login</Nav.Link>

//             <Nav.Link as={Link} to="/signup">Signup</Nav.Link>

//             <Button
//               as={Link}
//               to="/start"
//               variant="primary"
//             >
//               Let’s Start
//             </Button>

//           </Nav>

//         </Navbar.Collapse>

//       </Container>

//     </Navbar>
//   );
// };

// export default Navabar;
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Button
} from 'react-bootstrap';

import logo from '../assets/logolearnpath.png';

const MainNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">

      <Container fluid className="px-3">

        {/* Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Logo"
            style={{ height: '55px' }}
          />
          <span className="fw-bold fs-4">LearnPath</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>

          {/* Center Menu */}
          <Nav className="mx-auto gap-3">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/industry-trends">
              Industry Trends
            </Nav.Link>

          </Nav>

          {/* Right Buttons */}
          <Nav className="gap-2">

            <Nav.Link as={Link} to="/login">Login</Nav.Link>

            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>

         
          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
};

export default MainNavbar;
