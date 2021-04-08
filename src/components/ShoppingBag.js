import useFetch from "../useFetch";
import { useNavigate } from "react-router-dom";
import "../css/bag.css";
function ShoppingBag({ bag, update, CURRENCY }) {
  /*
  bag =array [{id,size,quantity},{id,size,quantity},{id,size,quantity}...]
  App:
  <Route
  path="/bag"
  element={<ShoppingBag bag={bag} update={updateQuantity} />}
  />;
  //update - function-increase quantity based on selected value
*/
  /*---------------------- */
  const navigate = useNavigate();

  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  let subTotal = 0;
  bag.forEach((item) => {
    const prod = productList.find((p) => p.id === parseInt(item.id));

    subTotal += prod.price * item.quantity;
  });

  function listItem(itemInCart) {
    const { id, size, quantity } = itemInCart;
    const { price, name, colour, image } = productList.find(
      (p) => p.id === parseInt(id)
    );
    //console.log(id, name, price, colour, image, size);
    return (
      <div key={`${id}+${size}`}>
        <section className="listOfItems">
          <article className="item">
            <img className="imgBag" src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{colour}</p>
            </div>
            <p>{size}</p>
            <p>
              {price} {CURRENCY}
            </p>
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
  return bag.length ? (
    <div>
      <h2>SHOPPING BAG</h2>

      <div id="item2" className="item" style={{ height: "80px" }}>
        <p>IMAGE</p>
        <p>NAME/COLOUR</p>
        <p>SIZE</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>TOTAL</p>
      </div>
      {/*list each element from bag:{id,size,quantity} */}
      {bag.map(listItem)}
      {/* console.log(bag) */}
      <p>{`SUBTOTAL: ${subTotal.toFixed(2)} ${CURRENCY}`}</p>
      <button
        className="detailButton"
        style={{ padding: "10px 50px" }}
        onClick={() => navigate("/checkout")}
      >
        PROCEED TO CHECKOUT
      </button>
    </div>
  ) : (
    <h1>SHOPPING BAG IS EMPTY</h1>
  );
}

export default ShoppingBag;
