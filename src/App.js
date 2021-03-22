import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ShoppingBag from "./ShoppingBag";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/">
          <Products />
        </Route>

        <Route path="/list/:sex">
          <Products />
        </Route>

        <Route path="/detail/:id">
          <ProductDetail />
        </Route>

        <Route path="/bag">
          <ShoppingBag />
        </Route>
      </Router>
      <Footer />
    </>
  );
}

export default App;
