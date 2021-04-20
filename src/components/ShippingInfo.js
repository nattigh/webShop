import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function ShippingInfo() {
  const { trackingNumber } = useParams();
  const { data: orderList, error, loading } = useFetch(
    "http://localhost:3001/shipping"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  const order = orderList.filter(
    (o) => o.trackingNumber === parseInt(trackingNumber)
  );

  //email

  return (
    <>
      <p>Thanks for shopping with us</p>
      <p>Order tracking number: {trackingNumber}</p>
      <p>Estimated delivery date: {order[0].estimatedArrival}</p>
    </>
  );
}

export default ShippingInfo;
