import "./Admin.css";
import adminproduct from "../../assets/Ako.png";
import * as adminApi from "../../apis/admin-api";
import { useEffect, useState } from "react";
export function AdminPage() {
  const [order, setOrder] = useState([]);

  const fetch = async () => {
    try {
      const res = await adminApi.getOrder();
      setOrder(res.data);
      console.log(res.data, "res.datassssssssssssssss");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="container-adminAll">
      <div className="adminHeader">
        <h1>Admin Order</h1>
      </div>
      <>
        {order.map((el, idx) => (
          <div className="container-card-admin-adminAll" key={idx}>
            <div className="Header-admin">
              <div className="Header-admin-box1">
                <h1>Customer </h1>
                <h1>Image</h1>
                <h1>Order id </h1>
                <h1>Product Name</h1>
              </div>
              <div className="Header-admin-box2">
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Total</h1>
                <h1>Order Status</h1>
              </div>
            </div>

            <div className="card-adminAll">
              <div className="Header-admin-cardbox1">
                <h1>{(el.User.firstName, el.User.lastName)} </h1>
                <img src={el.Product.url} />
                <h1>{el.id}</h1>
                <h1>{el.Product.product_name}</h1>
              </div>
              <div className="Header-admin-cardbox2">
                <h1>{el.quantity}</h1>
                <h1>{el.Product.price}</h1>
                <h1>{el.Product.price * el.quantity}</h1>
                <h1>OrderStatuses</h1>
              </div>
            </div>
            <div className="admin-btn">
              <button className="btn-confirmation-admin">confirmed</button>
              <button className="btn-cancel-admin">cancel order</button>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
