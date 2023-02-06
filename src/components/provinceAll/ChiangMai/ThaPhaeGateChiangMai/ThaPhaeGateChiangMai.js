import React from "react";
import "./ThaPhaeGateChiangMai.css";
import ThaPhaeGateChiangMai01 from "../ChiangMai-checkin/ThaPhaeGate/271182015_251136020463037_3880060349599827697_n.jpg";
import ThaPhaeGateChiangMai02 from "../ChiangMai-checkin/ThaPhaeGate/270040057_251136257129680_8384566111631668551_n.jpg";
import ThaPhaeGateChiangMai03 from "../ChiangMai-checkin/ThaPhaeGate/ThaPhaeGate6.jpg";
import ThaPhaeGateChiangMai04 from "../ChiangMai-checkin/ThaPhaeGate/ThaPhaeGate15.jpg";
import ThaPhaeGateChiangMai05 from "../ChiangMai-checkin/ThaPhaeGate/ThaPhaeGate29.jpg";
import ThaPhaeGateChiangMai06 from "../ChiangMai-checkin/ThaPhaeGate/ThaPhaeGate62.jpg";

function ThaPhaeGateChiangMai() {
  return (
    <div className="container-all-ThaPhaeGateChiangMai">
      <div className="container-ThaPhaeGateChiangMai">
        <div className="ThaPhaeGateChiangMai-content">
          <h1>ประตูท่าแพ, เชียงใหม่</h1>
          <h1>(Tha Phae Gate)</h1>
          <p>
            แพลนเที่ยวในตัวเมืองเชียงใหม่ทั้งทีก็ต้องห้ามพลาดมาเช็คอินที่
            <strong>ประตูท่าแพ</strong>
            สถานที่สำคัญทางประวัติศาสตร์และแลนด์มาร์กที่ยืนยันว่ามาถึงเชียงใหม่แล้วนั่นเอง
            ที่นี่เป็น 1 ใน 5 ประตูเมืองชั้นในของเชียงใหม่
            สำหรับประตูท่าแพเป็นประตูทางทิศตะวันออก สามารถมาเดินเล่นถ่ายรูปชิคๆ
            ได้แบบสบายๆ หรือใครมาเที่ยวตรงกับวันอาทิตย์
            ช่วงเย็นก็สามารถมาเดินช้อปปิ้งที่ถนนคนเดินท่าแพ
            ถนนคนเดินที่ใหญ่ที่สุดของเชียงใหม่ที่ขายสินค้าพื้นเมือง ของกิน
            ของใช้มากมายกันได้
          </p>
        </div>
        <div className="ThaPhaeGateChiangMai-picture">
          <img src={ThaPhaeGateChiangMai01}></img>
          <img src={ThaPhaeGateChiangMai02}></img>
          <img src={ThaPhaeGateChiangMai03}></img>
          <img src={ThaPhaeGateChiangMai04}></img>
          <img src={ThaPhaeGateChiangMai05}></img>
          <img src={ThaPhaeGateChiangMai06}></img>
        </div>

        <div className="ThaPhaeGateChiangMai-location">
          <ul>
            <li>
              <strong>Location:</strong> ถ.ท่าแพ ต.ช้างคลาน อ.เมือง จ.เชียงใหม่
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ThaPhaeGateChiangMai;
