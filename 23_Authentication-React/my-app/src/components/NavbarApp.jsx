import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { HiOutlineLogout } from "react-icons/hi";

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
            <Link to="/login">
              Log Out <HiOutlineLogout />
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
