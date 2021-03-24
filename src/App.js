import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ShoppingBag from "./ShoppingBag";
import Footer from "./Footer";

function App() {
  return (
    <>
      {" "}
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products />} />

          <Route path="/list/:sex" element={<Products />} />

          <Route path="/detail/:id" element={<ProductDetail />} />

          <Route path="/bag" element={<ShoppingBag />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
