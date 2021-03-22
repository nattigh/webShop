import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "./data";

export default function ProductDetail() {
  const { id } = useParams();

  const found = productList.find(
    (prodID) => prodID.id === Number.parseInt(id, 10)
  );

  const [item, setItem] = useState(found);

  console.log(item);
  return (
    <div className="container">
      <p>{item.name}</p>
      <img src={item.image} alt={item.name} width="200px" height="auto" />
      <p>{item.colour}</p>
      <p>{item.price} £</p>
      <p>{item.description}</p>
    </div>
  );
}
