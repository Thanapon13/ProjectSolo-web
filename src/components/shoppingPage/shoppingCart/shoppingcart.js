  import { useEffect, useState } from "react";
  import axios from "../../../config/axios";
  import "./shoppingcart.css";

  export default function ShoppingCart() {
    const [baskets, setBaskets] = useState([]);
    const fetchBasket = async () => {
      try {
        const baskets = await axios.get("/baskets/getCart");
        console.log(baskets.data);
        setBaskets(baskets.data);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      fetchBasket();
    }, []);
    console.log(baskets);

    return (
      <div className="container-ShoppingCart-all">
        {baskets &&
          baskets.map(basket => {
            console.log(basket);
            return (
              <>
                <div className="container-card">
                  <div className="Header-shoppingcart">
                    <div className="Header-shoppingcart-box1">
                      <h1>Image</h1>
                      <h1>Product Name</h1>
                    </div>
                    <div className="Header-shoppingcart-box2">
                      <h1>Quantity</h1>
                      <h1>Price</h1>
                      <h1>Total</h1>
                    </div>
                  </div>

                  <div key={basket.id} className="card-ShoppingCart">
                    <div className="card-ShoppingCart-box1">
                      <div className="box1-img">
                        <img src={basket.Product.url}></img>
                      </div>
                      <div className="box1-content">
                        <div className="name-category">
                          <h1>ชื่อสินค้า:{basket.Product.product_name}</h1>
                          <h1>ปะเภท:</h1>
                        </div>
                      </div>
                    </div>

                    <div className="card-ShoppingCart-box2">
                      <div className="box1-btn-state">
                        <div className="btn-number">
                          <p>1</p>
                        </div>
                        <div className="btn-up-downd">
                          <button className="btn-up-downd-plus"> + </button>
                          <button className="btn-up-downd-delete"> - </button>
                        </div>
                      </div>
                      <div className="box2-price">
                        <h1>{basket.Product.price}</h1>
                      </div>
                      <div className="box3-total">
                        <h1>{basket.Product.price}</h1>
                      </div>
                    </div>
                  </div>
                  <div className="btn-btnok-btncancel">
                    <button className="btn-ok">ยืนยันการสั่งซื้อ</button>

                    <button className="btn-cancel">ยกเลิก</button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    );
  }
