import React from "react";
import "./index.css";
//import "./normalize.css";
function App() {
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
          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>
          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>
          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>
          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>
          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>

          <div className="product">
            <h3>React book</h3>
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <p>25$</p>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      {/*---*/}
      <footer>
        <p>React js project for learning purposes only</p>
      </footer>
    </>
  );
}

export default App;
