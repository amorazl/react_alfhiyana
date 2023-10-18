import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarApp() {
  return (
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="fw-semibold">
              ARSHA
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/">Home</Link>
            <Link to="/table-product">Table Product</Link>
            <Link to="/create-product">Create Product</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
