import React from "react";
import { Link } from "react-router-dom";
import DropdownProfile from "../Dropdown-Menu/Dropdown-Menu";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logoPage from "../../img/logo-page.jpg";
import logoBg from "../../img/logo-bg.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="background-nav">
        <img src={logoBg}></img>
      </div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoPage}></img>
        </div>
        <nav className="navbar-menu">
          <ul>
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/provincePage">
              <li>Province</li>
            </a>
            <a href="/reviewPage">
              {" "}
              <li>Recommended Attractions</li>
            </a>

            <a href="/communityPage">
              <li>Community</li>
            </a>

            <a href="/shoppingPage">
              <li>Shop</li>
            </a>
          </ul>
        </nav>
        <div className="nav-icon">
          <i>
            <FaSearch />
          </i>
          <i>
            <FaShoppingCart />
          </i>
        </div>
        <DropdownProfile />
      </div>
    </div>
  );
}

export default Header;
