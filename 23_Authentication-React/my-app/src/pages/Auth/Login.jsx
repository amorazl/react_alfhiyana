import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userLogin = JSON.parse(localStorage.getItem("user"));
    if (input.username === userLogin.username && input.password === userLogin.password) {
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card>
              <Card.Body className="pt-4 pb-5 mx-4">
                <h3 className="fw-semibold text-center mb-3">Login</h3>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={input.username}
                      onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={input.password}
                      onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                  </Form.Group>
                  <Button type="submit" className="my-3">
                    Login
                  </Button>
                  <p>
                    Want to log in with another account?
                    <Link to="/register" className="text-primary">
                      Register
                    </Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
