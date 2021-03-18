import React from "react";
import { products } from "./products";
import "./index.css";
//import "./normalize.css";
function App() {
  products.forEach((prod) => console.log(prod.name));
  return (
    <>
      {/*header*/}
      <header>
        <nav>
          <ul>
            <li>Shoes</li>
            <li>Cart</li>
            <li>Cart</li>
            <li>Cart</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
      {/*---*/}
      {/*Products*/}
      <div className="content">
        <div className="products">
          {products.map((prod) => (
            <div className="product">
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
