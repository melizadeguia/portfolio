import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/"> icon</Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="https://github.com/melizadeguia">Github</Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/meliza-de-guia/">Linked in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header