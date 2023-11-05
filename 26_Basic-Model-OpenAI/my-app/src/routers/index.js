import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QnA from "../pages/QnA";
import QuoteGenerator from "../pages/QuoteGenerator";

export default function SetupRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna-ai" element={<QnA />} />
        <Route path="/quote-generator" element={<QuoteGenerator />} />
      </Routes>
    </>
  );
}
