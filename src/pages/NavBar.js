import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand as={Link} to="/Home">EL DEPOSITO NORTE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          <Nav.Link as={Link} to="/History">Historia</Nav.Link>
          <Nav.Link as={Link} to="/Videos">Videos</Nav.Link>
          <Nav.Link as={Link} to="/Music">Música</Nav.Link>
          <Nav.Link as={Link} to="/Dates">Fechas</Nav.Link>
          <Nav.Link as={Link} to="/Contact">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;



