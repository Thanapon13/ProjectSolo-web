import React from "react";
import "./NimmanHillChiangMai.css";
import NimmanHillChiangMai01 from "../ChiangMai-checkin/NimmanHill/MAYA2.jpg";
import NimmanHillChiangMai02 from "../ChiangMai-checkin/NimmanHill/MAYA14.jpg";
import NimmanHillChiangMai03 from "../ChiangMai-checkin/NimmanHill/MAYA17.jpg";
import NimmanHillChiangMai04 from "../ChiangMai-checkin/NimmanHill/MAYA33.jpg";

function NimmanHillChiangMai() {
  return (
    <div className="container-all-NimmanHillChiangMai">
      <div className="container-NimmanHillChiangMai">
        <div className="NimmanHillChiangMai-content">
          <h1>นิมมานฮิลล์, เชียงใหม่</h1>
          <h1>(Nimman Hill)</h1>
          <p>
            อยากชมวิวเมืองเชียงใหม่จากมุมสูงที่ตัดด้วยภาพดอยสุเทพอย่างสวยงามแบบพาโนราม่า
            ขอแนะนำ <strong>Nimman Hill</strong> จุดเช็คอินเชียงใหม่
            ที่ตั้งอยู่บนชั้น 6 ของห้างสรรพสินค้า MAYA
            ที่เปิดให้นักท่องเที่ยวและชาวเชียงใหม่ได้มานั่งรับลมเย็นๆ
            ยืนชมวิวอย่างชิลล์ๆ
            ยิ่งช่วงพระอาทิตย์ตกบอกเลยว่าตอนท้องฟ้ากำลังเปลี่ยนสีสวยงามมากๆ
            เป็นอีกหนึ่งจุดเช็คอินในตัวเมืองที่แนะนำเลยว่าสายชิลล์ห้ามพลาด
          </p>
        </div>
        <div className="NimmanHillChiangMai-picture">
          <img src={NimmanHillChiangMai01}></img>
          <img src={NimmanHillChiangMai02}></img>
          <img src={NimmanHillChiangMai03}></img>
          <img src={NimmanHillChiangMai04}></img>
        </div>

        <div className="NimmanHillChiangMai-location">
          <ul>
            <li>
              <strong>Location:</strong> Nimman Hill ชั้น 6 ถ.ห้วยแก้ว ต.สุเทพ
              อ.เมือง จ.เชียงใหม่
            </li>

            <li>
              <strong>Open-Close:</strong> เปิดทุกวัน เวลา 16.00 – 01.00 น.
            </li>

            <li>
              <strong>Facebook:</strong>{" "}
              <a href="https://www.facebook.com/maya.chiangmai/">
                {" "}
                Nimman Hill
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NimmanHillChiangMai;
