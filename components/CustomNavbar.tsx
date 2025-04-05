"use client";

import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" variant="light" style={{ backgroundColor: "#f7f7f7" }} className="shadow-md w-full">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="w-full">
        <Nav className="ms-auto w-3/5 d-flex justify-content-between mx-auto">
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#church">Chiesa</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#location">Location</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#rsvp">Conferma la tua presenza</Nav.Link>
          <Nav.Link style={{ fontSize: '1.25rem' }} href="#donation">Dateci i soldi</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
