import React, { useEffect, useState } from "react";
import { productList } from "../data";

const Payment = ({ bag, shippingDetails, CURRENCY }) => {
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    let subTotal = 0;
    bag.forEach((item) => {
      const prod = productList.find((p) => p.id === parseInt(item.id));

      subTotal += prod.price * item.quantity;
    });
    setSubtotal(subTotal);
  }, [bag]);

  return (
    <>
      <h1>Summary</h1>
      <p>First name: {shippingDetails.firstName}</p>
      <p>Last name: {shippingDetails.lastName}</p>
      <p>Email: {shippingDetails.email}</p>
      <p>
        {` Shipping address: ${shippingDetails.country}, 
        ${shippingDetails.city}, 
        ${shippingDetails.address}`}
      </p>
      <p>{`Total: ${subtotal} ${CURRENCY}`}</p>
      <button className="detailButton" style={{ width: "15%" }}>
        PAY
      </button>
      {/* {console.log(bag)} */}
      {/* {console.log(shippingDetails)} */}
    </>
  );
};

export default Payment;
