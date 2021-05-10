import useFetch from "../useFetch";
import postData from "../postData";
import patchData from "../patchData";
import { useNavigate } from "react-router-dom";

const Payment = ({ bag, shippingDetails, CURRENCY, update }) => {
  const navigate = useNavigate();
  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  const payButton = (details) => {
    //save shopping details in db.json:
    let trackingNumber = Math.floor(Math.random() * 10000000000);
    let today = new Date();
    today.setDate(today.getDate() + 3);
    let estimatedArrival = today.toJSON().slice(0, 10).replace(/-/g, "/");
    postData("http://localhost:3001/shipping", {
      ...details,
      bag: { ...bag },
      trackingNumber,
      estimatedArrival,
    }).then((data) => {
      console.log("Payment->data: ", data); // JSON data parsed by `data.json()` call
    });

    //update quantity
    bag.forEach((bagItem) => {
      //product:
      const product = productList.find((p) => p.id === parseInt(bagItem.id));
      //create copy of sizeStock from product and update the quantity
      const newSizeStock = { ...product.sizeStock };
      bag.forEach((bagItem2) => {
        if (bagItem2.id === bagItem.id) {
          //[bagItem2.size]->"L"; --> reference object key with variable [] :
          //product.sizeStock[bagItem2.size] -> product.sizeStock["XS"]
          newSizeStock[bagItem2.size] =
            product.sizeStock[bagItem2.size] - bagItem2.quantity;
          parseInt(bagItem2.id);
          //remove item from bag:
          update(bagItem2.id, bagItem2.size, 0);
        }
      });
      //update stock after purchase
      patchData(`http://localhost:3001/stock/${bagItem.id}`, newSizeStock);
    });

    //email:
    /*----- */
    postData("http://localhost:3002/sendMail", {
      ...details,
      bag: { ...bag },
      trackingNumber,
      estimatedArrival,
    });
    /*----- */
    navigate(`/shippingInfo/${trackingNumber}`);
  };

  let subTotal = 0;
  bag.forEach((item) => {
    const prod = productList.find((p) => p.id === parseInt(item.id));

    subTotal += prod.price * item.quantity;
  });

  return (
    <>
      <h1>Summary</h1>
      <p>First name: {shippingDetails.firstName}</p>
      <p>Last name: {shippingDetails.lastName}</p>
      <p>Email: {shippingDetails.email}</p>
      <p>
        {` Shipping address: ${shippingDetails.country}, 
        ${shippingDetails.city}, 
        ${shippingDetails.address}`}
      </p>
      <p>{`Total: ${subTotal} ${CURRENCY}`}</p>
      <button
        className="detailButton"
        style={{ width: "15%" }}
        onClick={() => payButton(shippingDetails)}
      >
        PAY
      </button>
      {/* {console.log(bag)} */}
      {/* {console.log(shippingDetails)} */}
    </>
  );
};

export default Payment;
