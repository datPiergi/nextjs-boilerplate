"use client";

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="shadow-md">
      <Container>
        <Navbar.Brand href="#">💒 Erika & Piergiorgio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#church">Chiesa</Nav.Link>
            <Nav.Link href="#location">Location</Nav.Link>
            <Nav.Link href="#rsvp">Conferma la tua presenza</Nav.Link>
            <Nav.Link href="#donation">Dateci i soldi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
