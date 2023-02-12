import { useEffect, useState } from "react";
import axios from "../../../config/axios";
import "./shoppingShirt.css";

export default function ShoppingShirt() {
  const handleAddCart = async productId => {
    await axios.post(`/baskets/${productId}`);
  };

  const [products, setProducts] = useState("");
  const fetchProduct = async () => {
    try {
      const products = await axios.get("/products");
      setProducts(products.data.products);
      console.log(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(products);

  return (
    <div className="container-shoppingShirt-all">
      {products &&
        products
          .filter(el => el.categoryId == 1)
          ?.map(product => {
            return (
              <>
                <div key={product.id} className="card-shoppingShirt">
                  <img src={product.url}></img>
                  <div className="shoppingShirt-content">
                    <h1>{product.product_name}</h1>
                    <p>{product.price} บาท</p>
                  </div>
                  <div className="btn-shoppingShirt">
                    <button onClick={() => handleAddCart(product.id)}>
                      กดใส่ตะร้า
                    </button>
                  </div>
                </div>
              </>
            );
          })}
    </div>
  );
}
