import { useState } from "react";
import * as cartService from "../../../apis/cart-api";
import OrderList from "./orderList";
import "./ShoppingList.css";

const ShoppingList = ({
  basket,
  removeEl,
  handleDeleteProduct,
  fetchBasket
}) => {
  // เพิ่มจำนวน Product
  const addQuantity = async () => {
    await cartService.addQuantity({ productId: basket.productId });
    fetchBasket();
  };

  // ลดจำนวน Product
  const minusQuantity = async () => {
    await cartService.minusQuantity({ productId: basket.productId });
    fetchBasket();
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="container-card-shoppingcart-all">
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

        <div className="card-ShoppingCart">
          <div className="card-ShoppingCart-box1">
            <div className="box1-img">
              <img alt="img" src={basket.Product.url}></img>
            </div>
            <div className="box1-content">
              <div className="name-category">
                <h1>ชื่อสินค้า: {basket.Product.product_name}</h1>
                <h1>ปะเภท:</h1>
              </div>
            </div>
          </div>

          <div className="card-ShoppingCart-box2">
            <div className="box1-btn-state">
              <div className="btn-number">{<p>{basket.quantity}</p>}</div>
              <div className="btn-up-downd">
                <button className="btn-up-downd-plus" onClick={addQuantity}>
                  +
                </button>
                <button className="btn-up-downd-delete" onClick={minusQuantity}>
                  -
                </button>
              </div>
            </div>
            <div className="box2-price">
              <h1>{basket.Product.price}</h1>
            </div>
            <div className="box3-total">
              <h1>{basket.quantity * Number(basket.Product.price)}</h1>
            </div>
          </div>
        </div>
        <div className="btn-btnok-btncancel">
          {modal && (
            <div className="modal">
              <div className="overlay">
                <div className="modal-community">
                  <OrderList />
                  <button onClick={toggleModal} className="close-editprofile">
                    X
                  </button>
                </div>
              </div>
            </div>
          )}
          <button className="btn-ok" onClick={toggleModal}>
            ยืนยันการสั่งซื้อ
          </button>

          {removeEl && (
            <button
              className="btn-cancel"
              onClick={async () => {
                await handleDeleteProduct(basket.Product.id);
                await fetchBasket();
              }}
            >
              ยกเลิก
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingList;
