import React from "react";
import "./BaanKangWatChiangMai.css";
import BaanKangWat01 from "../ChiangMai-checkin/BaanKangWat/Baanklangwat-15.jpg";
import BaanKangWat02 from "../ChiangMai-checkin/BaanKangWat/Baanklangwat-21.jpg";
import BaanKangWat03 from "../ChiangMai-checkin/BaanKangWat/Baanklangwat-6.jpg";
import BaanKangWat04 from "../ChiangMai-checkin/BaanKangWat/Baanklangwat-13.jpg";

function BaanKangWatChiangMai() {
  return (
    <div className="container-all-BaanKangWatChiangMai">
      <div className="container-BaanKangWatChiangMai">
        <div className="BaanKangWatChiangMai-content">
          <h1>บ้านข้างวัด, เชียงใหม่</h1>
          <h1>(Baan Kang Wat)</h1>
          <p>
            ใครชอบงานอาร์ต งานฝีมือ งานคราฟท์ต้องมาเช็คอินที่{" "}
            <strong>บ้านข้างวัด</strong>
            คอมมูนิตี้แบบพื้นเมืองที่เปิดให้นักท่องเที่ยวได้มาช้อปปิ้ง เดินเล่น
            นั่งชิลล์ หรือถ่ายรูปกันได้แบบเพลินๆ
            โดยมีร้านค้ามากมายไม่ว่าจะร้านขายของแฮนด์เมด ร้านเสื้อผ้าพื้นเมือง
            ร้านเซรามิก ร้านหนังสือ ร้านอาหารและเครื่องดื่ม
            ไม่เท่านั้นที่บ้านข้างวัดยังมีกิจกรรม workshop ให้เข้าร่วมอีกด้วย
            บอกเลยว่าใครชอบงานอาร์ตจะต้องตกหลุมรักที่นี่อย่างแน่นอน
          </p>
        </div>
        <div className="BaanKangWatChiangMai-picture">
          <img alt="img" src={BaanKangWat01}></img>
          <img alt="img" src={BaanKangWat02}></img>
          <img alt="img" src={BaanKangWat03}></img>
          <img alt="img" src={BaanKangWat04}></img>
        </div>

        <div className="BaanKangWatChiangMai-location">
          <ul>
            <li>
              <strong>Location:</strong> ตรงข้ามวัดร่ำเปิง ซ.วัดอุโมงค์ ต.สุเทพ
              อ.เมือง จ.เชียงใหม่
            </li>

            <li>
              <strong>Open-Close:</strong> เปิดทุกวัน เวลา10.00 – 18.00 น.
              (ปิดทุกวันจันทร์)
            </li>

            <li>
              <strong>Facebook:</strong>
              <a href="https://www.facebook.com/Baankangwat">
                บ้านข้างวัด, เชียงใหม่
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BaanKangWatChiangMai;
