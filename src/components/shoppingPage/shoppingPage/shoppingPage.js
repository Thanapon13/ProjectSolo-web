import React from "react";
import NavbarShopping from "../navbar/navbar";
import ShoppingGlass from "../shoppingGlass/shoppingGlass";
import ShoppingShirt from "../shoppingShirt/shoppingShirt";
import "./shoppingPage.css";

function ShoppingPage() {
  return (
    <div className="container-shoppingPage-all">
      <NavbarShopping />
      <h1 style={{ textAlign: "center", color: "red", fontSize: "2rem" }}>
        *****ไหว้ละ อย่ากดซื้อสินค้าซ้ำกัน*****
      </h1>
      <ShoppingShirt />
      <ShoppingGlass />
    </div>
  );
}

export default ShoppingPage;
