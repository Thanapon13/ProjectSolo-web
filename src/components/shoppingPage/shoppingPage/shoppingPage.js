import React from "react";
import "./shoppingPage.css";
import Tshirt from "../images/เสื้อ/ryan-hoffman-6Nub980bI3I-unsplash.jpg";
import Portablemug from "../images/แก้วน้ำพกพา/11103_01_1.jpg";
function ShoppingPage() {
  return (
    <div className="container-all-shopping">
      <nav className="navbar-shopping">
        <ul>
          <a href="/shoppingPage/Showall">
            <li>Show all</li>
          </a>
          <a href="/shoppingPage/tshirtshop">
            <li>เสื้อ</li>
          </a>
          <a href="/shoppingPage/prtablemugShop">
            <li>แก้วน้ำพกพา</li>
          </a>
        </ul>
      </nav>

      <div className="container-all-shopcard">
        {/* 1 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 2  */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>
        {/* 3 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>
        {/* 4 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 5 */}

        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 6 */}

        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 7 */}

        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 8 */}

        <div className="card-shop">
          <div className="top-picture">
            <img src={Tshirt}></img>
          </div>

          <div className="center-content">
            <p>
              Timesaving kitten to save months on development. Playful, cute,
              cheap!
            </p>
            <h2>ราคา 100 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>
      </div>

      {/* PortablemugShop */}
      <div className="container-all-shopcard">
        {/* 1 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 2 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 3 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 4 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 5 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 6 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 7 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>

        {/* 8 */}
        <div className="card-shop">
          <div className="top-picture">
            <img src={Portablemug}></img>
          </div>

          <div className="center-content">
            <p>แก้วน้ำพกพา</p>
            <h2>ราคา 500 บาท</h2>
          </div>

          <div className="bottom-buttom">
            <button className="btn-buy">สั่งซื้อ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
