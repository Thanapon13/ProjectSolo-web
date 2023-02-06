import React from "react";
import "./KhlongMaeKhaChiangMai.css";
import KhlongMaeKhaChiangMai01 from "../ChiangMai-checkin/KhlongMaeKha/Khlong-Mae-Kha-233.jpg";
import KhlongMaeKhaChiangMai02 from "../ChiangMai-checkin/KhlongMaeKha/Khlong-Mae-Kha-8.jpg";
import KhlongMaeKhaChiangMai03 from "../ChiangMai-checkin/KhlongMaeKha/Khlong-Mae-Kha-85.jpg";
import KhlongMaeKhaChiangMai04 from "../ChiangMai-checkin/KhlongMaeKha/kongmaekha-20.jpg";

function KhlongMaeKhaChiangMai() {
  return (
    <div className="container-all-KhlongMaeKhaChiangMai">
      <div className="container-KhlongMaeKhaChiangMai">
        <div className="KhlongMaeKhaChiangMai-content">
          <h1>คลองแม่ข่า, เชียงใหม่</h1>
          <h1>(Khlong Mae Kha)</h1>
          <p>
            <strong>คลองแม่ข่า</strong>{" "}
            จุดเช็คอินเชียงใหม่ที่หลายคนบอกว่าบรรยากาศสองฝั่งคลองเหมือนกับที่คลองโอตารุ
            ประทเศญี่ปุ่น
            เพราะที่คลองแม่ข่ามีการปรับปรุงภูมิทัศน์จากเดิมให้สวยงามยิ่งขึ้น
            เพื่อให้ชาวเชียงใหม่และนักท่องเที่ยวสามารถเดินเล่น ออกกำลังกาย
            หรือจัดกิจกรรมต่างๆ ได้นั่นเอง
            ใครมาเที่ยวเชียงใหม่ในทริปหน้าอย่าลืมแวะมาเดินเล่นชิลล์ๆ
            ถ่ายรูปเช็คอินกันได้
            แอบกระซิบว่าที่คลองแม่ข่าเปิดให้เที่ยวถึงช่วงค่ำกันเลย
            สามารถมานั่งชิลล์กินของอร่อยกันได้
          </p>
        </div>
        <div className="KhlongMaeKhaChiangMai-picture">
          <img src={KhlongMaeKhaChiangMai01}></img>
          <img src={KhlongMaeKhaChiangMai02}></img>
          <img src={KhlongMaeKhaChiangMai03}></img>
          <img src={KhlongMaeKhaChiangMai04}></img>
        </div>
        <div className="KhlongMaeKhaChiangMai-location">
          <ul>
            <li>
              <strong>Location:</strong> ถ.ระแกง ต.ช้างคลาน อ.เมืองเชียงใหม่
              จ.เชียงใหม่
            </li>

            <li>
              <strong>Facebook:</strong>{" "}
              <a href="https://www.facebook.com/MaeKhaToday/">
                คลองแม่ข่า, เชียงใหม่
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KhlongMaeKhaChiangMai;
