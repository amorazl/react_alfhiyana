import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Row, Col, Form, FloatingLabel } from "react-bootstrap";

import Article from "../components/Article";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";

function CreateProduct() {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    productDesc: "",
    productPrice: "",
  });

  // validate for product name
  const validateProductName = (value) => {
    if (value.trim() === "") {
      return "This field is required.";
    } else if (/[@#$%^&*()_+[\]{}|\\<>?~]/.test(value)) {
      return "Input contains symbols. Symbols are not allowed.";
    } else if (value.length === 10) {
      alert("Last Name must not exceed 25 characters.");
    } else if (value.length > 25) {
      return "Input must be 25 characters or less.";
    }
    return "";
  };

  // validation form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "productName") {
      const errorMessage = validateProductName(value);
      setErrors({
        ...errors,
        productName: errorMessage,
      });
    } else {
      if (value.trim() !== "") {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      } else if (key === "productName") {
        const errorMessage = validateProductName(formData[key]);
        if (errorMessage) {
          newErrors[key] = errorMessage;
        }
      }
    }
    setErrors(newErrors);

    axios
      .post("https://652f67620b8d8ddac0b2710c.mockapi.io/product", formData)
      .then((res) => {
        console.log(res);
        setFormData({
          id: "",
          productName: "",
          productCategory: "",
          productImage: "",
          productFreshness: "",
          productDesc: "",
          productPrice: "",
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarApp />
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Article />
            <Col md={5}>
              <h5 className="fw-semibold mt-3">Detail Product</h5>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.productName}
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.productName}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="productCategory">
                  <Form.Label>Product Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleInputChange}
                    isInvalid={!!errors.productCategory}
                  >
                    <option value="">- - Select an option - -</option>
                    <option value="Skincare">Skincare</option>
                    <option value="Makeup">Makeup</option>
                    <option value="Jewelry">Jewelry</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">{errors.productCategory}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="productImage">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="productImage"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productImage}
                    accept="image/*"
                  />
                  <Form.Control.Feedback type="invalid">{errors.productImage}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="productFreshness">
                  <Form.Label>Product Freshness</Form.Label>
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness01"
                    value="Brand New"
                    label="Brand New"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productFreshness}
                  />
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness02"
                    value="Second Hand"
                    label="Second Hand"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productFreshness}
                  />
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness03"
                    value="Refurbished"
                    label="Refurbished"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productFreshness}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="productDesc">
                  <FloatingLabel label="Additional Description">
                    <Form.Control
                      as="textarea"
                      placeholder="Comments"
                      style={{ height: "100px" }}
                      name="productDesc"
                      value={formData.productDesc}
                      onChange={handleInputChange}
                      isInvalid={!!errors.productDesc}
                    />
                    <Form.Control.Feedback type="invalid">{errors.productDesc}</Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-4" controlId="productPrice">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="productPrice"
                    placeholder="$1"
                    value={formData.productPrice}
                    onChange={handleInputChange}
                    isInvalid={!!errors.productPrice}
                  />
                  <Form.Control.Feedback type="invalid">{errors.productPrice}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="submit" variant="dark" id="submitButton">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}

export default CreateProduct;
