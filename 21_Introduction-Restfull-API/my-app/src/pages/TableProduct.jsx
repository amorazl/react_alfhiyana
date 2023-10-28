import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Table, Button } from "react-bootstrap";

export default function TableProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://652f67620b8d8ddac0b2710c.mockapi.io/product")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container>
        <h3 className="my-3 fw-semibold text-center">Data List from MockAPI</h3>
        <Table striped bordered hover id="productTable" className="text-center">
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
                <td>{product.ProductName}</td>
                <td>{product.ProductCategory}</td>
                <td>
                  <img src={product.ProductImage} alt="" />
                </td>
                <td>{product.ProductFreshness}</td>
                <td>{product.ProductDesc}</td>
                <td>{product.ProductPrice}</td>
                <td>
                  <Link to={`/edit-product/${product.id}`}>
                    <Button variant="warning" className="me-2">
                      Edit
                    </Button>
                  </Link>
                  <Button variant="danger">Hapus</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}
