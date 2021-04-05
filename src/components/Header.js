import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/list/mens" activeClassName="activeLink">
              Men
            </NavLink>
          </li>
          <li>
            <NavLink to="/list/womens" activeClassName="activeLink">
              Women
            </NavLink>
          </li>
          <li>
            <NavLink to="/bag" activeClassName="activeLink">
              Bag
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
