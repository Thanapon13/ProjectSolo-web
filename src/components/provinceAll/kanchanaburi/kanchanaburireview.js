import React from "react";
import "./kanchanaburireview.css";
import SkyWalk from "./Check-inKanchanaburi/SkywalkKanchanaburi/Sky-Walk-07.jpg";
import KanMachiCafe from "./Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-Cafe01.jpg";
import KrasaeCaveKanchanaburi from "./Check-inKanchanaburi/KrasaeCaveKanchanaburi/ถ้ำกระแซ-900.jpg";
import { Link } from "react-router-dom";
function Kanchanaburireview() {
  return (
    <div className="container-Kanchanaburireview-all">
      <div className="Kanchanaburireview-content">
        <h1>แนะนำสถานที่ท่องเที่ยวใน จังหวัด กาญจนบุรี</h1>
        <p>
          กาญจนบุรี อยู่ใกล้กับกรุงเทพฯ ตั้งอยู่ในภาคตะวันตกของประเทศไทย
          รองจากจังหวัดนครราชสีมา และจังหวัดเชียงใหม่
          และมีพื้นที่ใหญ่ที่สุดในภาคตะวันตก
          พื้นที่ส่วนใหญ่ของที่นี่เป็นป่าไม้และภูเขาสูง
          เหมาะกับคนที่ชอบวิวธรรมชาติ ให้เราพาเพื่อนๆไปเที่ยวกาญจนบุรีกัน
          มาเพลินตาไปกับป่าเขียว ภูเขา และลำธารที่สวยงาม วันนี้ เพจ
          ไปด้วยมายเฟรนด์ จะแนะนำ มาเที่ยวกาญจนบุรี เราควรไปเที่ยวที่ไหนดี
        </p>
      </div>
      <div className="container-card-Kanchanaburireview">
        <div className="card-kanchanaburi">
          <Link to="/provincePage/kanchanaburireview/SkywalkKanchanaburi">
            <img alt="img" src={SkyWalk}></img>
          </Link>

          <Link to="/provincePage/kanchanaburireview/KanMachiCafeKanchanaburi">
            <img alt="img" src={KanMachiCafe}></img>
          </Link>

          <Link to="/provincePage/kanchanaburireview/KrasaeCaveKanchanaburi">
            <img alt="img" src={KrasaeCaveKanchanaburi}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Kanchanaburireview;
