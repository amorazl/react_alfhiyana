import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateProduct from "../pages/CreateProduct";
import CreateAccount from "../pages/CreateAccount";
import EditProduct from "../pages/EditForm";

export default function SetupRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}
