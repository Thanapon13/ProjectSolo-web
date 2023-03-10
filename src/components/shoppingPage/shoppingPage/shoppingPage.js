import React from "react";
import NavbarShopping from "../navbar/navbar";
import ShoppingShirt from "../shoppingShirt/shoppingShirt";
import "./shoppingPage.css";

function ShoppingPage() {
  return (
    <div className="container-shoppingPage-all">
      <NavbarShopping />
      <ShoppingShirt />
    </div>
  );
}

export default ShoppingPage;
