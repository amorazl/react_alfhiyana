import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/index";

export default function SetupRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
