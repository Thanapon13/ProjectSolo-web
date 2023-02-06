import React from "react";
import KhlongMaeKha from "./ChiangMai-checkin/KhlongMaeKha/Khlong-Mae-Kha-233.jpg";
import BaanKangWat from "./ChiangMai-checkin/BaanKangWat/Baanklangwat-15.jpg";
import NimmanHill from "./ChiangMai-checkin/NimmanHill/MAYA2.jpg";
import ThaPhaeGate from "./ChiangMai-checkin/ThaPhaeGate/271182015_251136020463037_3880060349599827697_n.jpg";
import "./ChiangMai.css";
import { Link } from "react-router-dom";
function ChiangMaiireviewreview() {
  return (
    <div className="container-ChiangMaireviewreview-all">
      <div className="ChiangMaireviewreview-content">
        <h1>แนะนำสถานที่ท่องเที่ยวใน จังหวัด เชียงใหม่</h1>
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
      <div className="container-card-ChiangMaireviewreview">
        <div className="card-ChiangMai">
          <Link to="/provincePage/ChiangMai/KhlongMaeKhaChiangMai">
            <img src={KhlongMaeKha}></img>
          </Link>

          <Link to="/provincePage/ChiangMai/BaanKangWatChiangMai">
            <img src={BaanKangWat}></img>
          </Link>

          <Link to="/provincePage/ChiangMai/NimmanHillChiangMai">
            <img src={NimmanHill}></img>
          </Link>

          <Link to="/provincePage/ChiangMai/ThaPhaeGateChiangMai">
            {" "}
            <img src={ThaPhaeGate}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChiangMaiireviewreview;
