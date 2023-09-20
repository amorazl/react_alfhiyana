import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarApp() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src="https://img.logoipsum.com/297.svg" alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Create Account</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
