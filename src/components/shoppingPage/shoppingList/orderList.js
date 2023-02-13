import Qrcord from "../image/qrcode/qr-code.png";
import ProductItem from "../image/เสื้อ/faith-yarn-Wr0TpKqf26s-unsplash.jpg";
import "./orderList.css";
export default function OrderList() {
  return (
    <div className="container-order-all">
      <div className="container-box-left">
        <div className="img-qrcord">
          <h1>กรุณาใส่ Qr Code</h1>
          <img src={Qrcord}></img>
        </div>
        <div className="btn-qrcode">
          <input type="file" />
          <button className="btn-upload">Upload</button>
        </div>
      </div>
      <div className="container-box-right">
        <div className="box-right-header">
          <h1>Your Order Summary</h1>
          <h1 className="number-item"> 2 Items</h1>
        </div>
        <div className="box-right-product">
          <img src={ProductItem}></img>
          <h1>ชื่อสินค้า:</h1>
          <h1>ราคา:</h1>
          <div>
            <h1>Total Payable : 399 บาท</h1>
          </div>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
}
