import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "./data";

export default function ProductDetail() {
  const { id } = useParams();
  const found = productList.find(
    (prodID) => prodID.id === Number.parseInt(id, 10)
  );

  const [item, setItem] = useState(found);
  const [selected, setSelected] = useState(null);
  return (
    <div className="container">
      <section className="detail">
        <article>
          <img src={item.image} alt={item.name} className="detailIMG" />
        </article>
        <article>
          <h1>{item.name}</h1>
          <h2>{item.colour}</h2>
          <div className="sizes">
            {Object.keys(item.sizeStock).map((size) => (
              <label key={size}>
                {/*ha mar checked es rakattintok akkor lgyen unchecked */}

                {item.sizeStock[size] ? (
                  <>
                    <input
                      type="radio"
                      value={size}
                      name="size"
                      onClick={() => setSelected(size)}
                    />
                    <span className="sizeBox">{size} </span>
                  </>
                ) : (
                  <div>
                    <span id="noStock" className="sizeBox">
                      {size}
                    </span>
                    <div className="hide">No Stock</div>
                  </div>
                )}
              </label>
            ))}
          </div>

          <p>{item.price} £</p>
          <button>{console.log(selected)}Add to BAG</button>
          <p>{item.description}</p>
        </article>
      </section>
    </div>
  );
}
