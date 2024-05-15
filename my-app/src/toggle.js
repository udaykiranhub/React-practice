
import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaBars, FaTimes } from "react-icons/fa";
import "react-bootstrap";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#">Your Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className="ms-auto ">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
