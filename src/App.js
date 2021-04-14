import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./css/index.css";
import faker from "faker";
import postData from "./postData";

import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Payment from "./components/Payment";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import ShoppingBag from "./components/ShoppingBag";

function App() {
  const CURRENCY = "€";
  const [bag, setBag] = useState(
    () => JSON.parse(localStorage.getItem("bag")) ?? []
  );
  //bag=[{id, size, quantity}, {id, size, quantity}...]
  const [shippingDetails, setShippingDetails] = useState([]);

  useEffect(() => localStorage.setItem("bag", JSON.stringify(bag)), [bag]);

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

  /*faker.js * /
  useEffect(() => {
    let stock = [];
    for (let i = 1; i <= 50; i++) {
      let name = faker.commerce.productName();
      let colour = faker.commerce.color();
      let category = faker.commerce.product();
      let sex = "";
      //0="M", 1="W"
      Math.floor(Math.random() * 2) === 0 ? (sex = "M") : (sex = "W");
      let sizeStock = {
        XS: Math.floor(Math.random() * 50),
        S: Math.floor(Math.random() * 70),
        M: Math.floor(Math.random() * 70),
        L: Math.floor(Math.random() * 50),
      };
      //random 5 digit number, for unique image url
      let image = `${faker.image.fashion(500, 500)}?random=${
        Math.floor(Math.random() * 90000) + 10000
      }`;

      let price = parseInt(faker.commerce.price(100, 500), 10);
      let description = faker.commerce.productDescription();
      //id generated automatically
      stock.push({
        name,
        colour,
        category,
        sex,
        sizeStock,
        image,
        price,
        description,
      });
    }
    // console.log(stock);
    stock.forEach((e) => {
      postData("http://localhost:3001/stock", { ...e }).then((data) => {
        console.log(data);
      });
    });
  }, []);

  /*----- */

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
          <Route exact path="/" element={<Products CURRENCY={CURRENCY} />} />

          <Route path="/:sex" element={<Products CURRENCY={CURRENCY} />} />

          <Route
            path="/detail/:id"
            element={
              <ProductDetail addItemToBag={addItemToBag} CURRENCY={CURRENCY} />
            }
          />
          {/*console.log(bag)*/}
          <Route
            path="/bag"
            element={
              <ShoppingBag
                bag={bag}
                update={updateQuantity}
                CURRENCY={CURRENCY}
              />
            }
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
            element={
              <Payment
                bag={bag}
                shippingDetails={shippingDetails}
                CURRENCY={CURRENCY}
              />
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
