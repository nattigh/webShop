import React from "react";
import { NavLink } from "react-router-dom";
import Icon_Shopping_Bag from "../Icon_Shopping_Bag.jpg";
function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/mens" activeClassName="activeLink">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/womens" activeClassName="activeLink">
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/bag" activeClassName="activeLink">
              <img src={Icon_Shopping_Bag} alt="bag" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
