import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import "../css/detail.css";

export default function ProductDetail(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

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
            <label className="labelDetail" key={size}>
              {item.sizeStock[size] ? (
                <>
                  <input
                    className="radioInput"
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

        <p>{`Price: ${item.price} ${props.CURRENCY}`}</p>
        <div>
          <button
            className="detailButton"
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
        <p style={{ textTransform: "none" }}>{item.description}</p>
      </article>
    </section>
  );
}
