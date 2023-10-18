import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterApp() {
  return (
    <>
      <footer className="bg-light-blue">
        <Container className="py-5">
          <Row>
            <Col md={3}>
              <h3 className="primary">ARSHA</h3>
              <p>A108 Adam Street New York, NY 535022 United States </p>
              <p>
                <b>Phone: </b>+1 5589 55488 55
              </p>
              <p>
                <b>Email: </b>info@example.com
              </p>
            </Col>
            <Col md={3}>
              <h5 className="primary">Useful Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About us</li>
                <li>Services</li>
                <li>Terms of service</li>
                <li>Privacy policy</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="primary">Our Services</h5>
              <ul className="list-unstyled">
                <li>Web Design</li>
                <li>Web Development</li>
                <li>Product Management</li>
                <li>Marketing</li>
                <li>Graphic Design</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="primary">Our Social Networks</h5>
              <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
              <div>
                <p className="blue-circle"></p>
                <p className="blue-circle"></p>
                <p className="blue-circle"></p>
                <p className="blue-circle"></p>
                <p className="blue-circle"></p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="bg-primary justify-content-between py-3">
          <Container>
            <Row>
              <Col>
                <p>© Copyright Arsha. All Rights Reserved</p>
              </Col>
              <Col>
                <p className="text-end">
                  Designed by <span className="secondary">BootstrapMade</span>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    </>
  );
}
