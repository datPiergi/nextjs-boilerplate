"use client";

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: "#f7f7f5" }} className="shadow-md w-full">
      <Navbar.Brand href="#" className="pl-2 font-script" style={{ fontSize: '2rem' }}>Erika & Piergiorgio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="w-full">
        <Nav className="custom-style">
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#program">Programma</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#rsvp">RSVP</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#donation">Gifts</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#song">Suggerisci una canzone</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#contacts">Contatti</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#story">The Story So Far</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
