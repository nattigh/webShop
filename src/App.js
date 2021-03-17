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
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://www.reiss.com/media/product/518/136/-mens-gardener-ls-varsity-strip-in-navy-blue-3.jpg?format=jpeg&auto=webp&quality=85&width=250&height=287&fit=bounds"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
          <div className="product">
            <img
              className="productImg"
              src="https://images-na.ssl-images-amazon.com/images/I/4181vLK8kpL._SX331_BO1,204,203,200_.jpg"
              alt=""
            />
            <h3>React book</h3>
            <p>25$</p>
          </div>
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
