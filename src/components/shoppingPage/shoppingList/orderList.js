import { useRef, useState } from "react";
import * as shipmentApi from "../../../apis/cart-api";
import Qrcord from "../image/qrcode/qr-code.png";
import * as createShipmentAPI from "../../../apis/cart-api";

import "./orderList.css";

export default function OrderList(props) {
  const inputEl = useRef();

  const [shippingAddress, setShippingAddress] = useState("");
  const [file, setFile] = useState(null);
  const [orderId, setOderId] = useState("");

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      console.log(formData, "formData");
      console.log(shippingAddress, "shippingAddress");
      console.log(file, "slipUrl");
      console.log(orderId, "orderIdssss");
      formData.append("slipUrl", file);
      formData.append("shippingaddress", shippingAddress);
      // formData.append("orderId", orderId);

      // console.log(formData, "formData");
      // console.log(shippingAddress, "shippingAddress");
      // console.log(file, "slipUrl");
      await shipmentApi.createShipment(formData);
      await createShipmentAPI.createShipment("/shipment");
      // console.log(createShipmentAPI, "createShipmentAPI");
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
