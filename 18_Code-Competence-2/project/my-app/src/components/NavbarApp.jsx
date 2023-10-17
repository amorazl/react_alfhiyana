import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import logo from "../assets/logo.svg";

export default function NavbarApp() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" bg="transparent">
        <Container>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="#" className="nav-link">
                Courses
              </Link>
              <Link to="#" className="nav-link">
                Review
              </Link>
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
              <Button href="#" variant="outline-secondary">
                Get Started
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
