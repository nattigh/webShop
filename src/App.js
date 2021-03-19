import React, { useState, useEffect } from "react";
import { products } from "./products";
import "./index.css";
//import "./normalize.css";
function App() {
  const [list, setList] = useState(products);

  const listMen = () => {
    const mens = products.filter((prod) => prod.sex === "M");
    setList(mens);
  };
  const listWomen = () => {
    const womens = products.filter((prod) => prod.sex === "W");
    setList(womens);
  };
  const listAll = () => {
    setList(products);
  };
  // products.forEach((prod) => console.log(prod.name));
  return (
    <>
      {/*header*/}
      <header>
        <nav>
          <ul>
            <li>
              <button onClick={listAll}>Shop</button>
            </li>
            <li>
              <button onClick={listMen}>Men</button>
            </li>
            <li>
              <button onClick={listWomen}>Women</button>
            </li>
          </ul>
        </nav>
      </header>
      {/*---*/}
      {/*Products*/}
      <div className="container">
        <div className="products">
          {list.map((prod) => (
            <div
              className="product"
              key={prod.id}
              onClick={() => {
                setList([prod]);
              }}
            >
              <img className="productImg" src={prod.image} alt={prod.name} />
              <p>{prod.name}</p>
              <p>{`${prod.price} £`}</p>
            </div>
          ))}
        </div>
      </div>
      {/*---*/}
      <footer>
        <p>This site does not offer any real products or services.</p>
      </footer>
    </>
  );
}

export default App;
