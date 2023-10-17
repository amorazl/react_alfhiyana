/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { selectProduct } from "../store/productSlice";
import { editProduct } from "../store/productSlice";

export default function EditForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);
  const newProduct = products.find((item) => item.id == id);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (newProduct) setFormData(newProduct);
  }, [newProduct]);

  console.log(formData);

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
      // clear error if other fields have any input
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
    dispatch(editProduct(formData));
    navigate("/create-product");
  };

  const { productName, productCategory, productFreshness, productDesc, productPrice } = formData;
  return (
    <>
      <section className="py-5">
        <Container>
          <h2 className="font-semibold">Edit Product</h2>
          <Row className="justify-content-center">
            <Col md={5}>
              <h5 class="fw-semibold mt-3">Detail Product</h5>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="productName">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="productName"
                    value={productName ?? ""}
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
                    value={productCategory ?? ""}
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
                  />
                  <Form.Control.Feedback type="invalid">{errors.productImage}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="productFreshness">
                  <Form.Label>Product Freshness</Form.Label>
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness01"
                    checked={productFreshness === "Brand New"}
                    value="Brand New"
                    label="Brand New"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productFreshness}
                  />
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness02"
                    checked={productFreshness === "Second Hand"}
                    value="Second Hand"
                    label="Second Hand"
                    onChange={handleInputChange}
                    isInvalid={!!errors.productFreshness}
                  />
                  <Form.Check
                    type="radio"
                    name="productFreshness"
                    id="productFreshness03"
                    checked={productFreshness === "Refurbished"}
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
                      value={productDesc ?? ""}
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
                    value={productPrice ?? ""}
                    onChange={handleInputChange}
                    isInvalid={!!errors.productPrice}
                  />
                  <Form.Control.Feedback type="invalid">{errors.productPrice}</Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button type="submit" variant="dark" id="submitButton">
                    Update
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
