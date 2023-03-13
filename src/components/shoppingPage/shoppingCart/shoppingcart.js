import { useEffect, useState } from "react";
import axios from "../../../config/axios";
import ShoppingList from "../shoppingList/ShoppingList";
import "./shoppingcart.css";

export default function ShoppingCart() {
  // การดึงข้อมูล product มาใส่ในตะกร้า
  const [baskets, setBaskets] = useState([]);
  // console.log(baskets);

  const fetchBasket = async () => {
    try {
      const baskets = await axios.get("/baskets/getCart");
      setBaskets(baskets.data.getBasket);
      // console.log(baskets.data.getBasket, "baskets.data.getBasket");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBasket();
  }, []);
  //-----------------------

  // Delete Product
  const handleDeleteProduct = async productId => {
    await axios.delete(`/baskets/${productId}`);
  };

  const [removeEl, setRemoveEl] = useState(true);
  const feteRemovePorduct = async () => {
    try {
      const removeEl = await axios.delete("/:productId");
      setRemoveEl(removeEl);
    } catch (err) {
      console.log(err);
    }
  };
  // เมื่อกดจะrerenderใหม่
  useEffect(() => {
    feteRemovePorduct();
  }, []);

  return (
    <div className="container-ShoppingCart-all">
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
        ตะกร้าสินค้าของคุณ
      </h1>
      {baskets.map((el, idx) => {
        return (
          <ShoppingList
            key={idx}
            handleDeleteProduct={handleDeleteProduct}
            basket={el}
            removeEl={removeEl}
            fetchBasket={fetchBasket}
          />
        );
      })}
    </div>
  );
}
