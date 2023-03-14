import { useEffect, useRef, useState } from "react";
import * as shipmentApi from "../../../apis/cart-api";
import Qrcord from "../image/qrcode/qr-code.png";
import * as createShipmentAPI from "../../../apis/cart-api";
import { createOrder } from "../../../apis/cart-api";

import "./orderList.css";
import { useNavigate } from "react-router-dom";

export default function OrderList(props) {
  const navigate = useNavigate();
  const inputEl = useRef();
  const [shippingAddress, setShippingAddress] = useState("");
  const [file, setFile] = useState(null);
  const [orderId, setOderId] = useState("");
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("slipUrl", file);
      formData.append("shippingAddress", shippingAddress);
      let orderId = await createOrder({ id: props.orderData.id });
      formData.append("orderId", orderId.data.order.id);
      console.log(orderId.data, "orderId");
      // let orderStatus = await createOrder({id:props.orderData})

      await shipmentApi.createShipment(formData);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-order-all">
      <div className="container-box-left">
        <div className="img-qrcord">
          <h1>กรุณาใส่ Slip Url</h1>
          <form onSubmit={handleSubmitForm}>
            <img alt="img" src={Qrcord}></img>
            <textarea
              rows="4"
              cols="30"
              placeholder="กรุณาใส่ที่อยู่ "
              onChange={e => setShippingAddress(e.target.value)}
            ></textarea>
            <input
              type="file"
              ref={inputEl}
              onChange={e => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
            <button className="btn-upload" type="submit">
              Upload
            </button>
          </form>
        </div>
        <div className="btn-qrcode"></div>
      </div>
      <div className="container-box-right">
        <div className="box-right-header">
          <h1 className="right-h1">Your Order Summary</h1>
          <h1 className="number-item">จำนวน {props.quantity} ชิ้น</h1>
        </div>
        <div className="box-right-product">
          <div className="box-right-product-picture">
            <img alt="img" src={props.image}></img>
          </div>
          <div className="right-content">
            <h1>ชื่อสินค้า: {props.productname} </h1>
            <h1>ราคา: {props.price}</h1>
            <h1>Total: {props.total} บาท</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
