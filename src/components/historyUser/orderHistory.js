import "./orderHistory.css";
import userOrder from "../../assets/Ako.png";
import * as getOrderUserAPI from "../../apis/user-api";
import { useEffect, useState } from "react";

export default function HistoryOrder() {
  const [userorderHistory, setUserorderHistory] = useState([]);
  console.log(userorderHistory, "userorder");

  const fetchOrderUser = async () => {
    try {
      const res = await getOrderUserAPI.getOrderUser();
      setUserorderHistory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrderUser();
  }, []);

  return (
    <div className="container-all-history">
      <div className="container-content-all">
        <div className="user-order-header">
          <h1>Your Order History</h1>
        </div>
        <div className="container-card-order-all">
          {userorderHistory.map((el, idx) => (
            <div className="user-card-order-all">
              <div className="card-order-left">
                <img src={el.Product.url} alt="img" />
              </div>
              <div className="card-order-riht">
                <div className="card-order-riht-box1">
                  <h1>Product Name :</h1>
                  <h1>Quantity :</h1>
                  <h1>Price :</h1>
                  <h1>Total :</h1>
                  <h1>Url Slip :</h1>
                  <h1>Address :</h1>
                  <h1>Order Status :</h1>
                </div>
                <div className="card-order-riht-box2">
                  <h1>{el.Product.product_name}</h1>
                  <h1>{el.quantity}</h1>
                  <h1>{el.Product.price}</h1>
                  <h1>{el.Product.price * el.quantity}</h1>
                  <h1>{el.Shipment.slipUrl}</h1>
                  <h1>{el.Shipment.shippingAddress}</h1>
                  <h1>{el.OrderStatuses[0].status}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
