import React from 'react';
import * as B from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useNavigate} from 'react-router-dom';

const NavigationBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <B.Navbar bg="dark" variant="dark" expand="lg">
        <B.Container>
          <B.Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn3.iconfinder.com/data/icons/artificial-intelligence-ultra-color/60/006_-_Ai_Brain-256.png"
              width="24"
              height="24"
              className="d-inline-block"
            />{' '}
            React-Bootstrap
          </B.Navbar.Brand>
          <B.Navbar.Toggle aria-controls="basic-B.navbar-nav" />
          <B.Navbar.Collapse id="basic-B.navbar-nav">
            <B.Nav className="me-auto">
              <B.Nav.Link onClick={() => navigate('/')}>Home</B.Nav.Link>
              <B.Nav.Link onClick={() => navigate('/about')}>About</B.Nav.Link>
              <B.Nav.Link onClick={() => navigate('/404')}>404</B.Nav.Link>
            </B.Nav>
          </B.Navbar.Collapse>
        </B.Container>
      </B.Navbar>
    </>
  );
};

export default NavigationBar;
