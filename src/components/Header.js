import React from "react";
import { NavLink } from "react-router-dom";
import Icon_Shopping_Bag from "../Icon_Shopping_Bag.jpg";
import "../css/header.css";
function Header() {
  return (
    <header>
      <nav>
        <ul className="menuList">
          <li className="menuOption">
            <NavLink to="/mens/all" activeClassName="activeLink">
              Men
            </NavLink>
            <ul className="dropdownList">
              <NavLink to="/mens/Tops" activeClassName="activeLink">
                <li>Tops</li>
              </NavLink>
              <NavLink to="/mens/Trousers" activeClassName="activeLink">
                <li>Trousers</li>
              </NavLink>
              <NavLink to="/mens/Shoes" activeClassName="activeLink">
                <li>Shoes</li>
              </NavLink>
            </ul>
          </li>

          <li className="menuOption">
            <NavLink to="/womens/all" activeClassName="activeLink">
              Women
            </NavLink>
            <ul className="dropdownList">
              <NavLink to="/womens/Tops" activeClassName="activeLink">
                <li>Tops</li>
              </NavLink>
              <NavLink to="/womens/Trousers" activeClassName="activeLink">
                <li>Trousers</li>
              </NavLink>
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
