import { useRef, useState } from "react";
import Qrcord from "../image/qrcode/qr-code.png";
import ProductItem from "../image/เสื้อ/faith-yarn-Wr0TpKqf26s-unsplash.jpg";
import "./orderList.css";
export default function OrderList(props) {
  const inputEl = useRef();
  const [file, setFile] = useState(null);

  return (
    <div className="container-order-all">
      <div className="container-box-left">
        <div className="img-qrcord">
          <h1>กรุณาใส่ Qr Code</h1>
          <img
            alt="img"
            src={Qrcord}
            onClick={() => inputEl.current.click()}
          ></img>
          <textarea
            rows="4"
            cols="30"
            placeholder="กุส่งไม่ถูก กรุณาใส่ที่อยู่ "
          ></textarea>
        </div>
        <div className="btn-qrcode">
          <input
            type="file"
            style={{ display: "none" }}
            ref={inputEl}
            onChange={e => {
              if (e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <button className="btn-upload">Upload</button>
        </div>
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
