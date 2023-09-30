import React from "react";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";

import BgHome from "../assets/shine.svg";
import IconHome from "../assets/welcome-img.png";

export default function index() {
  return (
    <>
      <NavbarApp />
      <section>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
