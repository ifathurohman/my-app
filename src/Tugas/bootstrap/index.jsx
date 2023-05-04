import React from 'react';

import * as B from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div>
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
                <B.Nav.Link href="#home">Home</B.Nav.Link>
                <B.Nav.Link href="#link">Contact</B.Nav.Link>
                <B.NavDropdown title="Portofolio" id="basic-nav-dropdown">
                  <B.NavDropdown.Item href="#action/3.1">
                    POS (Point Of Sales)
                  </B.NavDropdown.Item>
                  <B.NavDropdown.Item href="#action/3.2">
                    Timeline Management
                  </B.NavDropdown.Item>
                  <B.NavDropdown.Item href="#action/3.3">
                    Company Profile
                  </B.NavDropdown.Item>
                  <B.NavDropdown.Divider />
                  <B.NavDropdown.Item href="#action/3.4">
                    Mini ERP
                  </B.NavDropdown.Item>
                </B.NavDropdown>
              </B.Nav>
            </B.Navbar.Collapse>
          </B.Container>
        </B.Navbar>
        <B.Card className="text-center background-image">
          <B.Card.Body
            style={{
              marginTop: '35vh',
              marginBottom: '35vh',
            }}>
            <B.Card.Title>Special title treatment</B.Card.Title>
            <B.Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </B.Card.Text>
            <B.Button variant="primary">Go somewhere</B.Button>
          </B.Card.Body>
          <B.Card.Footer className="bg-dark text-muted">© 2023</B.Card.Footer>
        </B.Card>
      </div>
    );
  }
}
