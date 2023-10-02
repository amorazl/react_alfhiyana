import React, { useState } from "react";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";
import { AiFillStar } from "react-icons/ai";
import { Container, Row, Col, Button, Modal, Form, Card, FloatingLabel } from "react-bootstrap";

import IconHome from "../assets/welcome-img.png";
import Icon01 from "../assets/icon-poin-01.png";
import Icon02 from "../assets/icon-poin-02.png";
import Icon03 from "../assets/icon-poin-03.png";
import Book from "../assets/book.svg";
import Customer from "../assets/customer.png";
import ContactUs from "../assets/contact-us.svg";

export default function Home() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOpen();
  };

  const handleOpen = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section className="bg-home pb-5">
        <NavbarApp />
        <Container>
          <Row>
            <Col className="align-self-center">
              <h1 class="pt-5 fw-semibold">Learn Korean</h1>
              <p class="mb-4">
                The purpose of this website is to provide Korean learners with a one-stop resource for
                learning Korean. We strive to provide the most detailed, accurate and clear explanations at
                every step of the way from learning how to read all the way to advanced grammar. Let's start a
                great learning here.
              </p>
              <Button variant="primary" className="me-3">
                Login
              </Button>
              <Button variant="outline-secondary">Sign Up</Button>
            </Col>
            <Col className="text-end mt-5">
              <img src={IconHome} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 mb-5 text-center">
        <Container>
          <Row className="justify-content-evenly">
            <Col sm={12} md={3}>
              <Card>
                <Card.Body>
                  <div class="pink-circle"></div>
                  <img src={Icon01} alt="" className="my-3" />
                  <h4 className="fw-semibold">Grow Learning</h4>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card>
                <Card.Body>
                  <div class="pink-circle"></div>
                  <img src={Icon02} alt="" className="my-3" />
                  <h4 className="fw-semibold">Trusted Sources</h4>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card>
                <Card.Body>
                  <div class="pink-circle"></div>
                  <img src={Icon03} alt="" className="my-3" />
                  <h4 className="fw-semibold">Fortune Cookie</h4>
                  <p>
                    Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-softpink">
        <Container>
          <Row className="justify-content-between">
            <Col sm={12} md={6}>
              <img src={Book} alt="" className="img-fluid" />
            </Col>
            <Col className="align-self-center">
              <h2 class="fw-semibold">Access Everywhere</h2>
              <p class="my-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Button variant="primary" className="mt-3">
                Learn More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-review">
        <Container>
          <Row className="py-5 my-5 justify-content-between">
            <Col md={5} className="align-self-center">
              <h2 className="fw-semibold lh-base" style={{ fontSize: "55px" }}>
                What they're saying about our courses
              </h2>
            </Col>
            <Col md={6}>
              <img src={Customer} alt="" className="img-review offset-3 d-none d-lg-block" />
              <Card>
                <Card.Body>
                  <div className="pink-circle mb-5"></div>
                  <div className="mx-4">
                    <div className="py-3">
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                    </div>
                    <p>
                      "I recently embarked on a quest to learn the Korean language, and after some extensive
                      research, I stumbled upon Amorazl's Korean website, a great online platform for Korean
                      language learners. My experience with this website has been nothing short of
                      exceptional, and I'd like to share my thoughts through this review."
                    </p>
                    <h5 className="fw-semibold mb-0 mt-5">Jennie Kim</h5>
                    <p>Idol, Actress, Singer</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            <Col>
              <img src={ContactUs} alt="" className="img-fluid" />
            </Col>
            <Col>
              <Card className="bg-softpink" style={{ border: "none" }}>
                <Card.Body>
                  <div class="pink-circle"></div>
                  <div class="text-center py-3">
                    <h4 class="fw-semibold">Contact Us</h4>
                    <p>
                      We extend our gratitude for your valuable feedback, which helps us improve our products
                      and services.
                    </p>
                  </div>
                  <Form id="contactForm" onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        <Form.Group controlId="firstName" className="mb-3">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group controlId="lastName" className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="message">
                      <Form.Label>Messages</Form.Label>
                      <FloatingLabel label="Leave a comment here...">
                        <Form.Control
                          as="textarea"
                          placeholder=""
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Button type="submit" variant="primary" className="my-4">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Data Submitted</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Name: {formData.firstName}</p>
          <p>Name: {formData.lastName}</p>
          <p>Email: {formData.email}</p>
          <p>Message: {formData.message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <FooterApp />
    </>
  );
}
