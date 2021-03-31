import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productList } from "../data";
import "../css/bag.css";
function ShoppingBag({ bag, update }) {
  const [subtotal, setSubtotal] = useState(0);
  /*
  itemsInBag.bag =array [{id,size,quantity},{id,size,quantity},{id,size,quantity}...]
  update - function-increase quantity based on selected value
  App:
    <Route
      path="/bag"
      element={<ShoppingBag bag={bag} update={updateQuantity} />}
    />;
*/
  //console.log(products);
  //const products = itemsInBag.bag.map((i) => console.log(productList[i.id]));
  /*---------------------- */
  const navigate = useNavigate();
  useEffect(() => {
    let subTotal = 0;
    bag.forEach((item) => {
      const prod = productList.find((p) => p.id === parseInt(item.id));

      subTotal += prod.price * item.quantity;
    });
    setSubtotal(subTotal);
  }, [bag]);
  //kiprobalni : const numItems = bag.reduce((counter,item)=>counter+item.quantity);
  function renderItem(itemInCart) {
    const { id, size, quantity } = itemInCart;
    const { price, name, colour, image } = productList.find(
      (p) => p.id === parseInt(id)
    );
    //console.log(id, name, price, colour, image, size);
    return (
      <div key={`${id}+${size}`}>
        <section>
          <article className="item">
            <img className="imgBag" src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{colour}</p>
            </div>
            <p>{size}</p>
            <p>{price} £</p>
            <div>
              <select
                onChange={(e) => update(id, size, parseInt(e.target.value))}
                value={quantity}
              >
                <option value="0">Remove</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <p>{quantity * price} £</p>
          </article>
        </section>
      </div>
    );
  }
  /*------------------*/
  return (
    <div>
      <h2>SHOPPING BAG</h2>
      <div className="item" style={{ height: "80px" }}>
        <p>IMAGE</p>
        <p>NAME/COLOUR</p>
        <p>SIZE</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
      </div>
      {/*list each element from bag:{id,size,quantity} */}
      {bag.map(renderItem)}
      {/* console.log(bag) */}
      <p>SUBTOTAL: {subtotal.toFixed(2)} £</p>
      <button
        className="detailButton"
        style={{ padding: "10px 50px" }}
        onClick={() => navigate("/checkout")}
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
}

export default ShoppingBag;
