import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CreateProduct from "../pages/CreateProduct";
import DetailProduct from "../pages/DetailProduct";
import CreateAccount from "../pages/CreateAccount";

export default function SetupRoutes() {
  const [data, setData] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-product" element={<CreateProduct data={data} setData={setData} />} />
        <Route path="/detail-product/:id" element={<DetailProduct data={data} />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </>
  );
}
