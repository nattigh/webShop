import React from "react";
import { useParams } from "react-router-dom";

function ShippingInfo() {
  const { trackingNumber } = useParams();

  return (
    <>
      <p>Thank you for shopping with us</p>
      <p>An email has been sent with details about your purchase.</p>
      <p>Order tracking number: {trackingNumber}</p>
    </>
  );
}

export default ShippingInfo;
