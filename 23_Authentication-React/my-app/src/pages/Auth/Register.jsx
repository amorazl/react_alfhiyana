import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  // to store data in localstorage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <>
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={4}>
            <Card>
              <Card.Body className="pt-4 pb-5 mx-4">
                <h3 className="fw-semibold text-center mb-3">Register</h3>
                <Form onSubmit={handleSubmit}>
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
                    Register
                  </Button>
                  <p>
                    Already have account?{" "}
                    <Link to="/login" className="text-primary">
                      Login
                    </Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
