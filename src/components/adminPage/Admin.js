import { useEffect, useState } from "react";
import * as adminApi from "../../apis/admin-api";
import * as adminRemoveApi from "../../apis/admin-api";
import { BsXCircleFill } from "react-icons/bs";
import "./Admin.css";

export function AdminPage() {
  const [order, setOrder] = useState([]);
  // console.log(order, "aaa");

  const fetch = async () => {
    try {
      const res = await adminApi.getOrder();
      setOrder(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, [order]);

  // Delete Product
  const handleDeleteOrderAdmin = async orderId => {
    await adminRemoveApi.deleteOrderAdmin(`${orderId}`);
  };

  // ------------------------
  const handleConfirmed = async orderId => {
    try {
      await adminApi.updateConfirmed({
        orderId,
        action: "confirmed"
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancelOrde = async orderId => {
    try {
      await adminApi.updateCancelOrde({
        orderId,
        action: "cancelorder"
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-adminAll">
      <div className="adminHeader">
        <h1>Admin Order</h1>
      </div>
      <>
        {order.map((el, idx) => (
          <div className="container-card-admin-adminAll" key={idx}>
            <div className="adminOrder-btn-colse">
              <button
                onClick={() => {
                  handleDeleteOrderAdmin(el.id);
                }}
              >
                <BsXCircleFill />
              </button>
            </div>
            <div className="Header-admin">
              <div className="Header-admin-box1">
                <h1>UserName </h1>
                <h1>Image</h1>
                <h1>Order id </h1>
                <h1>Product Name</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Total</h1>
                <h1>Order Status</h1>
                <h1>Slip Url</h1>
                <h1>Address</h1>
              </div>
            </div>

            <div className="card-adminAll">
              <div className="Header-admin-cardbox1">
                <h1>{el.User.firstName}</h1>
                <img src={el.Product.url} alt="img" />
                <h1>{el.id}</h1>
                <h1>{el.Product.product_name}</h1>
                <h1>{el.quantity}</h1>
                <h1>{el.Product.price}</h1>
                <h1>{el.Product.price * el.quantity}</h1>
                <h1>{el.OrderStatuses[0].status}</h1>
                <div className="Header-admin-cardbox1-url">
                  <h1>{el.Shipment.slipUrl}</h1>
                </div>
                <h1>{el.Shipment.shippingAddress}</h1>
              </div>
            </div>

            <div className="admin-btn">
              <button
                className="btn-confirmation-admin"
                onClick={() => handleConfirmed(el.id)}
              >
                confirmed
              </button>
              <button
                className="btn-cancel-admin"
                onClick={() => handleCancelOrde(el.id)}
              >
                cancel order
              </button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
