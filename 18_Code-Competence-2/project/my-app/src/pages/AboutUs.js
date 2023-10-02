import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";

import People from "../assets/about-us.jpg";

export default function AboutUs() {
  return (
    <>
      <NavbarApp />
      <section className="pt-5">
        <Container>
          <Row className="justify-content-between">
            <Col className="align-self-center">
              <h2 className="fw-semibold">A little bit about us</h2>
              <p>
                We are a passionate team of experts dedicated to delivering innovative solutions, committed to
                excellence, and driven by a shared vision to make a positive impact. With a wealth of
                experience in learning, we strive to meet our goals and exceed expectations, all while
                fostering a culture of collaboration and customer-centricity.
              </p>
            </Col>
            <Col>
              <img src={People} alt="" className="img-fluid mb-0" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-rosewood">
        <Container>
          <Row>
            <Col>
              <div className="d-flex">
                <div className="circle-card"></div>
                <div className="circle-card mx-5"></div>
                <div className="circle-card"></div>
              </div>
              <h2 className="mt-5">A place to grow and learn</h2>
              <p>
                With a wealth of experience in learning, we strive to meet our goals and exceeding
                expectations, all while fostering a culture of collaboration and customer-centricity.
              </p>
            </Col>
            <Col className="py-5">
              <h2>What do we really do?</h2>
              <p>
                Our dedicated team works tirelessly to enhance the opportunity, ensuring that our clients and
                partners receive the highest quality language services. We take pride in our values, and our
                commitment to guides everything we do. We are here to describe the ultimate benefit or impact
                you provide to your clients or community.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
