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
  let { category } = useParams();
  sex === "mens" ? (sex = "M") : sex === "womens" ? (sex = "W") : (sex = "");

  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;

  let filtedProducts = [];
  if (!sex) {
    filtedProducts = [...productList];
  } else {
    if (category !== "all") {
      filtedProducts = productList.filter(
        (p) => p.sex === sex && p.category === category
      );
    } else {
      filtedProducts = productList.filter((p) => p.sex === sex);
    }
  }

  return (
    <section className="products">
      {filtedProducts.map((item) => (
        <Product item={item} CURRENCY={CURRENCY} />
      ))}
    </section>
  );
}

export default Products;
