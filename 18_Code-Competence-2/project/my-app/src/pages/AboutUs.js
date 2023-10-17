import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";

import People from "../assets/about-us.jpg";
import Icon01 from "../assets/icon-about-01.png";
import Icon02 from "../assets/icon-about-02.png";
import Icon03 from "../assets/icon-about-03.png";
import Icon04 from "../assets/icon-about-04.png";

export default function AboutUs() {
  return (
    <>
      <section className="bg-softpink">
        <NavbarApp />
      </section>
      <section className="bg-aboutus py-5">
        <Container className="text-center py-5">
          <Row className="py-5 my-5">
            <h5>ABOUT KOREAN</h5>
            <h3>Good Skill starts with</h3>
            <h3>Good Lesson</h3>
          </Row>
        </Container>
      </section>
      <section className="pt-5">
        <Container>
          <Row className="pt-5 justify-content-between">
            <Col className="align-self-center">
              <h2 className="fw-semibold">A little bit about us</h2>
              <p>
                We are a passionate team of experts dedicated to delivering innovative solutions, committed to
                excellence, and driven by a shared vision to make a positive impact. With a wealth of
                experience in learning, we strive to meet our goals and exceed expectations, all while
                fostering a culture of collaboration and customer-centricity.
              </p>
            </Col>
            <Col md={12} lg={6}>
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
      <section>
        <Container className="text-center py-5 my-5">
          <div className="pb-5 mb-3">
            <h3 className="text-primary fw-semibold">Our Mission</h3>
            <h5 className="mt-4 fw-semibold">To share goods through language</h5>
          </div>
          <Row>
            <Col>
              <img src={Icon01} alt="" className="mb-3" />
              <h4 className="fw-semibold">Easy to Learn</h4>
              <p>Shared prosperity & integrity of purpose.</p>
            </Col>
            <Col>
              <img src={Icon02} alt="" className="mb-3" />
              <h4 className="fw-semibold">Conserve the Culture</h4>
              <p>Shared prosperity & integrity of purpose.</p>
            </Col>
            <Col>
              <img src={Icon03} alt="" className="mb-3" />
              <h4 className="fw-semibold">Bilingual Player</h4>
              <p>Shared prosperity & integrity of purpose.</p>
            </Col>
            <Col>
              <img src={Icon04} alt="" className="mb-3" />
              <h4 className="fw-semibold">To be the Best</h4>
              <p>Shared prosperity & integrity of purpose.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
