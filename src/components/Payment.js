import useFetch from "../useFetch";

const Payment = ({ bag, shippingDetails, CURRENCY }) => {
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
      <button className="detailButton" style={{ width: "15%" }}>
        PAY
      </button>
      {/* {console.log(bag)} */}
      {/* {console.log(shippingDetails)} */}
    </>
  );
};

export default Payment;
