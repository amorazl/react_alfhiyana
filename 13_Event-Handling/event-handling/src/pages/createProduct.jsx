import React, { useState } from "react";
import { Button, Container, Row, Col, Form, FloatingLabel, Table } from "react-bootstrap";
import Article from "../components/Article";
import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";

function CreateProduct() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
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
      // clear error if other fields have any input
      if (value.trim() !== "") {
        setErrors({
          ...errors,
          [name]: "",
        });
      }
    }
  };

  // add data form to the table
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

    // if there are no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      setData([...data, formData]);
      setFormData({
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        productDesc: "",
        productPrice: "",
      });
      console.log("Form submitted:", formData);
    }
  };

  // function search
  const [searchProduct, setSearchProduct] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchBtn = () => {
    const filtered = data.filter((item) =>
      item.productName.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // function delete the last row
  const handleDeleteLastRow = () => {
    if (data.length > 0) {
      const newData = [...data];
      newData.pop();
      setData(newData);
    }
  };

  // function delete all rows
  const handleDeleteAllRows = () => {
    setData([]);
  };

  const [randomNumber, setRandomNumber] = useState(null);
  const handleRandomNumber = () => {
    // Generates a random number between 1 and 100
    const random = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(random);
  };

  return (
    <>
      <NavbarApp />
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Article />
            <Col md={5}>
              <h5 class="fw-semibold mt-3">Detail Product</h5>
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="productName">
                  <Form.Label htmlFor="productName">Product Name</Form.Label>
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
                  <Form.Label htmlFor="productCategory">Product Category</Form.Label>
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
                  <Form.Label htmlFor="productImage">Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="productImage"
                    value={formData.productImage}
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
                  <Form.Label htmlFor="productPrice">Product Price</Form.Label>
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

      <section className="py-5">
        <Container>
          <Table striped bordered hover id="productTable">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Product Image</th>
                <th>Product Freshness</th>
                <th>Additional Desciption</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {searchProduct.trim() === ""
                ? data.map((item, i) => (
                    <tr key={i}>
                      <td>{item.productName}</td>
                      <td>{item.productCategory}</td>
                      <td>{item.productImage}</td>
                      <td>{item.productFreshness}</td>
                      <td>{item.productDesc}</td>
                      <td>{item.productPrice}</td>
                    </tr>
                  ))
                : filteredData.map((item, i) => (
                    <tr key={i}>
                      <td>{item.productName}</td>
                      <td>{item.productCategory}</td>
                      <td>{item.productImage}</td>
                      <td>{item.productFreshness}</td>
                      <td>{item.productDesc}</td>
                      <td>{item.productPrice}</td>
                    </tr>
                  ))}
            </tbody>
          </Table>
          <Row>
            <Col md={4}>
              <div className="d-flex mt-5">
                <Form.Control
                  type="text"
                  value={searchProduct}
                  onChange={(e) => setSearchProduct(e.target.value)}
                  placeholder="Search by Product Name"
                />
                <Button variant="outline-dark" className="ms-2" onClick={handleSearchBtn}>
                  Search
                </Button>
              </div>
              <div className="d-flex mt-3">
                <Button variant="danger" onClick={handleDeleteLastRow} className="me-3">
                  Delete
                </Button>
                <Button variant="danger" onClick={handleDeleteAllRows}>
                  Delete All
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h5 className="fw-semibold">Generate Random Number Button</h5>
          <Button type="button" variant="outline-primary" onClick={handleRandomNumber}>
            Generate Number
          </Button>
          {randomNumber !== null && <p className="mt-3">Random Number: {randomNumber}</p>}
        </Container>
      </section>
      <FooterApp />
    </>
  );
}

export default CreateProduct;
