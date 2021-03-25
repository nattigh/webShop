import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productList } from "./data";

export default function ProductDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const item = productList.find(
    (prodID) => prodID.id === Number.parseInt(id, 10)
  );

  const addToBagButton = () => {
    if (selected) {
      props.addItemToBag(id, selected);
      navigate("/bag");
    } else {
      const element = document.getElementById("sizeSelect");
      element.hidden = false;
    }
  };

  return (
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
                    onClick={(e) => {
                      setSelected(size);
                      const element = document.getElementById("sizeSelect");
                      element.hidden = true;
                    }}
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
        <div>
          <button
            onClick={
              addToBagButton
              /*App.js :<Route path="/detail/:id"
            element={<ProductDetail addItemToBag={addItemToBag} />}/> */
            }
          >
            {/* {console.log(selected)} */}
            ADD TO BAG
          </button>
          <div id="sizeSelect" className="selectSizeWarning" hidden={true}>
            SELECT SIZE
          </div>
        </div>
        <p>{item.description}</p>
      </article>
    </section>
  );
}
