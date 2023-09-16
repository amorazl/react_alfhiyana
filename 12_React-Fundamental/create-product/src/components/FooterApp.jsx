import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function FooterApp() {
  return (
    <>
      <footer className="py-5 text-white bg-dark">
        <Container>
          <Row>
            <Col md={4}>
              <img src="https://img.logoipsum.com/297.svg" alt="" />
              <p className="fw-semibold mt-4 mb-0">Kantor Pusat</p>
              <p>
                The Icon Business Park, Blok N No.8, <br />
                Sampora, Kec. Cisauk, Tangerang, Banten 15345
              </p>
            </Col>
            <Col>
              <h4 className="fw-semibold mb-3">Menu</h4>
              <ul className="list-unstyled footer">
                <li>
                  <a href="_blank">Harga</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className="fw-semibold mb-3">Perusahaan</h4>
              <ul className="list-unstyled footer">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/tentang-kami">Tentang Kami</a>
                </li>
                <li>
                  <a href="/layanan">Layanan</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h4 className="fw-semibold mb-3">Jelajahi</h4>
              <ul className="list-unstyled footer">
                <li>
                  <a href="/syarat-ketentuan">Syarat & Ketentuan</a>
                </li>
                <li>
                  <a href="/kebijakan-privasi">Kebijakan Privasi</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
