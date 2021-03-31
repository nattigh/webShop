import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">SHOP</Link>
          </li>
          <li>
            <Link to="/list/mens">MEN</Link>
          </li>
          <li>
            <Link to="/list/womens">WOMEN</Link>
          </li>
          <li>
            <Link to="/bag">BAG</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
