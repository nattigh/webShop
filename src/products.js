import React, { useEffect, useState } from "react";
import { productList } from "./data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Products() {
  const { sex } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    let filter = [];
    if (sex) {
      if (sex === "mens") {
        filter = productList.filter((prodID) => prodID.sex === "M");
      }
      if (sex === "womens") {
        filter = productList.filter((prodID) => prodID.sex === "W");
      }
      setItems(filter);
    } else {
      setItems(productList);
    }
  }, [sex]);

  return (
    <section className="products">
      {items.map((prod) => (
        <Link to={`/detail/${prod.id}`} key={prod.id}>
          <article className="product">
            <img className="productImg" src={prod.image} alt={prod.name} />
            <p>{prod.name}</p>
            <p>{`${prod.price} £`}</p>
          </article>
        </Link>
      ))}
    </section>
  );
}

export default Products;
