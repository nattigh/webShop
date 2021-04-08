import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Product = ({ item, CURRENCY }) => (
  <Link to={`/detail/${item.id}`} key={item.id}>
    <article className="product">
      <img className="productImg" src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{`${item.price} ${CURRENCY}`}</p>
    </article>
  </Link>
);

function Products({ CURRENCY }) {
  let { sex } = useParams();
  sex === "mens" ? (sex = "M") : (sex = "W");

  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  const filtedProducts = sex
    ? productList.filter((p) => p.sex === sex)
    : productList;

  return (
    <section className="products">
      {filtedProducts.map((item) => (
        <Product item={item} CURRENCY={CURRENCY} />
      ))}
    </section>
  );
}

export default Products;
