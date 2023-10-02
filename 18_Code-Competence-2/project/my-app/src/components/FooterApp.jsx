import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaBloggerB, FaInstagramSquare } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/logo.svg";

export default function FooterApp() {
  return (
    <>
      <footer className="pt-5 pb-3 bg-softpink">
        <Container>
          <Row>
            <Col>
              <img src={logo} alt="logo" />
              <p class="mb-1">
                <i class="fa-solid fa-phone"></i>
                021-7777-999
              </p>
              <p>
                Jl. Florish Sserafim no. 10, <br />
                Blok A/11, Central Park, <br />
                Switzerland.
              </p>
            </Col>
            <Col>
              <h5>MENU</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to="#">Full Courses</Link>
                </li>
                <li>
                  <Link to="#">Subscribe</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>EXPLORE</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to="#">Courses</Link>
                </li>
                <li>
                  <Link to="#">Test Level</Link>
                </li>
                <li>
                  <Link to="#">Blog</Link>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>ABOUT</h5>
              <ul class="list-unstyled">
                <li>
                  <Link to="#">Our Company</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <p>© Amorazl's Website</p>
            </Col>
            <Col className="text-end footer-socmed">
              <Link to="https://www.linkedin.com/in/alfhiyana/">
                <FaLinkedin />
              </Link>
              <Link to="https://amorazl.blogspot.com/">
                <FaBloggerB />
              </Link>
              <Link to="https://www.instagram.com/amorazl_/">
                <FaInstagramSquare />
              </Link>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
