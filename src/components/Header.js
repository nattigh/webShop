import React from "react";
import { NavLink } from "react-router-dom";
import Icon_Shopping_Bag from "../Icon_Shopping_Bag.jpg";
import "../css/header.css";
import useFetch from "../useFetch";

function Header() {
  const { data: productList, error, loading } = useFetch(
    "http://localhost:3001/stock"
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Something went wrong</h1>;
  //dropdown menu category list:
  let mensCategories = new Set();
  let womensCategories = new Set();
  productList.forEach((item) => {
    item.sex === "M"
      ? mensCategories.add(item.category)
      : womensCategories.add(item.category);
  });
  mensCategories = Array.from(mensCategories);
  womensCategories = Array.from(womensCategories);

  return (
    <header>
      <nav>
        <ul className="menuList">
          <li className="menuOption">
            <NavLink to="/mens/all" activeClassName="activeLink">
              Men
            </NavLink>

            <ul className="dropdownList">
              {mensCategories.map((category) => (
                <NavLink to={`/mens/${category}`}>
                  <li>{category}</li>
                </NavLink>
              ))}
            </ul>
          </li>

          <li className="menuOption">
            <NavLink to="/womens/all" activeClassName="activeLink">
              Women
            </NavLink>
            <ul className="dropdownList">
              {womensCategories.map((category) => (
                <NavLink to={`/womens/${category}`}>
                  <li>{category}</li>
                </NavLink>
              ))}
            </ul>
          </li>
          <li className="menuOption">
            <NavLink to="/bag">
              <img src={Icon_Shopping_Bag} alt="bag" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
