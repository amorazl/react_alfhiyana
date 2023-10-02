import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import AboutUs from "../pages/AboutUs";

export default function SetupRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}
