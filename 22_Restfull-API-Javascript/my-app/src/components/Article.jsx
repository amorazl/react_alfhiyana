import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Article = () => {
  const [language, setLanguage] = useState("en"); // default value en

  const article = {
    title: {
      en: "Create Account",
      ina: "Buat Akun",
    },
    description: {
      en: "Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.",
      ina: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
    },
    buttonText: {
      en: "Switch Language",
      ina: "Ubah Bahasa",
    },
  };

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ina" : "en";
    setLanguage(newLanguage);
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center text-center mb-3">
          <Col md={10}>
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt="logo"
              width={80}
              className="img-fluid mb-3"
            />
            <h4 className="fw-semibold">{article.title[language]}</h4>
            <p>{article.description[language]}</p>
            <Button onClick={toggleLanguage} variant="outline-dark">
              {article.buttonText[language]}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Article;
