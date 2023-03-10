import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DropdownProfile from "../Dropdown-Menu/Dropdown-Menu";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import ShoppingCart from "./img/shopping-cart.png";
import logoPage from "../../img/logo-page.jpg";
import logoBg from "../../img/logo-bg.jpg";

import "./Header.css";
import useAuth from "../../hooks/useAuth";
import DropdownLogin from "../Dropdown-Menu/Dropdown-Login";

export default function Header() {
  const { authenticateUser } = useAuth();
  const navigate = useNavigate();

  const handleAdmin = () => {
    navigate("/admin");
  };

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
            <a href="/shoppingcart">
              <img alt="img" className="ShoppingCart" src={ShoppingCart}></img>
            </a>
          </ul>
        </nav>

        {authenticateUser ? <DropdownLogin /> : <DropdownProfile />}
      </div>
      <Outlet />
    </div>
  );
}
