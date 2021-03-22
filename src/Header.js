import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/list/mens">Men</Link>
          </li>
          <li>
            <Link to="/list/womens">Women</Link>
          </li>
          <li>
            <Link to="/bag">Bag</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
