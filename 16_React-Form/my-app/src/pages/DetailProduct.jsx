import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Container, Table } from "react-bootstrap";

export default function DetailProduct({ data }) {
  const { id } = useParams();
  const product = data.find((item) => item.id.toString() === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Container className="py-5 text-center">
        <h2 className="fw-semibold">Detail Data</h2>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Imgae</th>
              <th>Product Freshness</th>
              <th>Product Desc</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productImage}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productDesc}</td>
              <td>{product.productPrice}</td>
            </tr>
          </tbody>
        </Table>
        <Link to="/create-product">
          <Button variant="secondary">Back</Button>
        </Link>
      </Container>
    </>
  );
}
