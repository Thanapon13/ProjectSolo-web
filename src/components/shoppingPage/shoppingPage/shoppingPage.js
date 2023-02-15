import React from "react";
import NavbarShopping from "../navbar/navbar";
import ShoppingGlass from "../shoppingGlass/shoppingGlass";
import ShoppingShirt from "../shoppingShirt/shoppingShirt";
import "./shoppingPage.css";

function ShoppingPage() {
  return (
    <div className="container-shoppingPage-all">
      <NavbarShopping />
      <ShoppingShirt />
      {/* <ShoppingGlass /> */}
    </div>
  );
}

export default ShoppingPage;
