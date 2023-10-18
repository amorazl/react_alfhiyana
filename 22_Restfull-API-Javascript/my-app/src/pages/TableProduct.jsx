import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

import NavbarApp from "../components/NavbarApp";
import FooterApp from "../components/FooterApp";

export default function TableProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://652f67620b8d8ddac0b2710c.mockapi.io/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`https://652f67620b8d8ddac0b2710c.mockapi.io/product/${id}`)
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NavbarApp />
      <Container>
        <h3 className="my-5 fw-semibold text-center">Data List from MockAPI</h3>
        <Table striped bordered hover id="productTable" className="text-center mb-5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Image</th>
              <th>Product Freshness</th>
              <th>Product Desc</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>
                  <img src={product.productImage} alt="" />
                </td>
                <td>{product.productFreshness}</td>
                <td>{product.productDesc}</td>
                <td>{product.productPrice}</td>
                <td>
                  <Link to={`/edit-product/${product.id}`}>
                    <Button variant="warning" className="me-2">
                      Update
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <FooterApp />
    </>
  );
}
