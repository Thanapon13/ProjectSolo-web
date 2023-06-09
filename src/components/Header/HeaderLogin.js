import React from "react";
import DropdownProfile from "../Dropdown-Menu/Dropdown-Menu";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logoPage from "../../img/logo-page.jpg";
import logoBg from "../../img/logo-bg.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="background-nav">
        <img alt="img" src={logoBg}></img>
      </div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img alt="img" src={logoPage}></img>
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
          <a href="/shoppingcart">
            <i>
              <FaShoppingCart />
            </i>
          </a>
        </div>
        <DropdownProfile />
      </div>
      <Outlet />
    </div>
  );
}
