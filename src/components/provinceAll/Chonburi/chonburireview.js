import React from "react";
import "./chonburireview.css";
import TienBeach from "./Check-inChonburi/Tien Beach/ถ้ำกระแซ-2.jpg";
import Grandcanyon from "./Check-inChonburi/grandcanyon/grandchonburi_900.jpg";
import { Link } from "react-router-dom";
function Chonburireview() {
  return (
    <div className="container-Kanchanaburireview-all">
      <div className="Kanchanaburireview-content">
        <h1>
          แนะนำสถานที่ท่องเที่ยวใน จังหวัด ชลบุรี ทะเล ภูเขา มุมชิคๆ รวมมาให้ครบ
          เที่ยวได้ง่ายสบายงบ แถมใกล้กรุงเทพมาก!
        </h1>
        <p>
          ถ้าพูดถึงจังหวัดชลบุรี ใครๆ ก็คงคิดถึงพัทยา บางแสน
          คิดถึงทะเลแต่ความจริงแล้วชลบุรีมีสถานที่ท่องเที่ยวมากมายไม่ว่าจะเป็น
          วัด พิพิธภัณฑ์และตลาดน้ำที่รอเพื่อนๆ
          ไปสัมผัสกับบรรยากาศแบบไม่ไกลกรุงเทพ เรียกได้ว่าไปเช้าเย็นกลับก็ยังได้
          ที่สำคัญเดินทางง่ายและไม่เปลืองงบอย่างแน่นอน วันนี้ทริปเก็ทเตอร์เลยเอา
          10 จุดน่าเช็คอินชลบุรีมาฝากเพื่อนๆ แบบจัดเต็มกันเลยทีเดียว
          ใครที่กำลังวางแพลนหาที่เที่ยวอยู่บอกเลยห้ามพลาด!!!
        </p>
      </div>
      <div className="container-card-Kanchanaburireview">
        <div className="card-kanchanaburi">
          <Link to="/provincePage/chonburireview/TienBeach">
            <img src={TienBeach}></img>
          </Link>

          <Link to="/provincePage/chonburireview/Grandcanyon">
            {" "}
            <img src={Grandcanyon}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chonburireview;
