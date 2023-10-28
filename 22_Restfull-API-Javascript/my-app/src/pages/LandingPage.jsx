import React from "react";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import landingPage from "../assets/landing-page.svg";

export default function LandingPage() {
  return (
    <>
      <NavbarApp />
      <section className="bg-primary py-5">
        <Container>
          <Row>
            <Col className="align-self-center">
              <h1 className="fw-bold">Better Solutions For Your Business</h1>
              <p>We are team of talented designers making websites with Bootstrap</p>
              <div className="mt-3">
                <Button variant="primary" className="me-3">
                  Get Started
                </Button>
                <Button variant="outline-primary text-white">Watch Video</Button>
              </div>
            </Col>
            <Col>
              <img src={landingPage} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5">
        <Row className="justify-content-center my-3">
          <Col md={6} className="text-center">
            <h4 className="fw-semibold">Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <Row className="justify-content-center">
              <Col md={6}>
                <Form>
                  <Form.Control type="text" />
                </Form>
              </Col>
              <Col md={2}>
                <Button variant="primary">Subscribe</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <FooterApp />
    </>
  );
}
