import React from "react";
import "./bangkokreview.css";
import BangkokJapan from "../Bangkok/Bangkok-inChonburi/Bangkok – Japan/57a19a52c62a8.jpg";
import KingPowerMahanakhon from "./Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon3.jpg";

import { Link } from "react-router-dom";
function Bangkokreview() {
  return (
    <div className="container-bangkokreview-all">
      <div className="bangkokreview-content">
        <h1>แนะนำสถานที่ท่องเที่ยวใน จังหวัด กรุงเทพมหานคร</h1>
        <p>
          อยากไปเที่ยว แต่ก็ไม่มีรถ หรือบางทีจะขับรถไปก็กังวลเรื่องรถติด
          ไหนจะค่าน้ำมัน แถมยงต้องหาที่จอดรถอีก เลยทำให้หลายๆ ครั้ง
          เราลังเลที่จะออกไปใช้ชีวิต แต่ต้องบอกว่าทุกวันนี้ที่เที่ยวมากมาย
          หรือย่านของกินต่างก็มีรถไฟฟ้าไปถึงแล้ว ทริปเก็ทเตอร์เลยรวมเอา 6
          ทริปเที่ยวด้วยรถไฟฟ้า จัด One Day Trip ได้แบบสบายๆ มาฝากให้ทุกๆ คน
          ได้ลองไปดูกัน จะมีทริปไหนบ้าง ตามไปดูกันเลย!
        </p>
      </div>
      <div className="container-card-bangkokreview">
        <div className="card-bangkok">
          <Link to="/provincePage/bangkokreview/BangkokJapan">
            <img src={BangkokJapan}></img>
          </Link>

          <Link to="/provincePage/bangkokreview/KingPowerMahanakhon">
            <img src={KingPowerMahanakhon}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Bangkokreview;
