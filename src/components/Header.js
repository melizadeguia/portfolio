import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
  
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/reservation"> About</Nav.Link>
                <Nav.Link href="/fleet">Contact</Nav.Link>
                <NavDropdown title="Projects" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/reservation">Self-Drive</NavDropdown.Item>
                  <NavDropdown.Item href="/reservation">With Driver</NavDropdown.Item>
                  <NavDropdown.Item href="/reservation">Airport Shuttle Service</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/reservation">Promos</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="/about">Github</Nav.Link>
                <Nav.Link eventKey={2} href="/contact">
                  Linked in
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
  
  export default Header