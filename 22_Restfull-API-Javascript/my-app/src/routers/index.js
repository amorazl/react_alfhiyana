import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import TableProduct from "../pages/TableProduct";

export default function SetupRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/table-product" element={<TableProduct />} />
      </Routes>
    </>
  );
}
