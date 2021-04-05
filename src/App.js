import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/index.css";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Payment from "./components/Payment";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import ShoppingBag from "./components/ShoppingBag";

function App() {
  const [bag, setBag] = useState([]);
  //bag=[{id, size, quantity}, {id, size, quantity}...]
  const [shippingDetails, setShippingDetails] = useState([]);

  function addItemToBag(id, size) {
    /*setBag(()=>{we are updating current state, that's why I'm using function})
    bag structure: {id, size, quantity}
    */
    setBag((bagCurrentState) => {
      /*check if item is already in bag, so we can incraese the quantity */
      const alreadyInBag = bagCurrentState.find(
        (item) => item.id === id && item.size === size
      );
      /*if the itm is already in bag then update bag by searching for the item and increase its quantity here: */
      if (alreadyInBag) {
        //if the item is already in bag then quantity increase:
        return bagCurrentState.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        //if the item is not already in bag then add it:
        return [...bagCurrentState, { id: id, size: size, quantity: 1 }];
      }
    });
  }

  function updateQuantity(id, size, newQuantity) {
    setBag((bagCurrentState) => {
      if (newQuantity === 0) {
        return bagCurrentState.filter(
          //minden amire teljesul a feltetel bennmarad
          (item) => !(item.id === id && item.size === size)
        );
      }
      return bagCurrentState.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  }
  function addShippingDetails(props) {
    setShippingDetails(props);
  }

  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Products />} />

          <Route path="/list/:sex" element={<Products />} />

          <Route
            path="/detail/:id"
            element={<ProductDetail addItemToBag={addItemToBag} />}
          />
          {/*console.log(bag)*/}
          <Route
            path="/bag"
            element={<ShoppingBag bag={bag} update={updateQuantity} />}
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                checkoutDetails={shippingDetails}
                addShippingDetails={addShippingDetails}
              />
            }
          />
          <Route
            path="/payment"
            element={<Payment bag={bag} shippingDetails={shippingDetails} />}
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
