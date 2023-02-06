import React from "react";
import "./KingPowerMahanakhon.css";
import KingPowerMahanakhon01 from "../Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon3.jpg";
import KingPowerMahanakhon02 from "../Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon5.jpg";
import KingPowerMahanakhon03 from "../Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon2.jpg";
import KingPowerMahanakhon04 from "../Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon1.jpg";
import KingPowerMahanakhon05 from "../Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon4.jpg";

function KingPowerMahanakhon() {
  return (
    <div className="container-all-KingPowerMahanakhon">
      <div className="container-KingPowerMahanakhon">
        <div className="KingPowerMahanakhon-content">
          <h1>คิง พาวเวอร์ มหานคร, กรุงเทพฯ </h1>
          <h1>(King Power Mahanakhon)</h1>
          <p>
            เปลี่ยนบรรยากาศจากสวนสาธารณะมา{" "}
            <strong>King Power Mahanakhon</strong>
            ชมวิวเมืองกรุงเทพฯ บนตึกสูงชั้น 78 หรือที่เรียกกันว่ามหานคร
            สกายวอล์ค ข้างบนนี้บรรยากาศดีมากกก
            ยิ่งตอนเย็นเป็นจุดชมพระอาทิตย์ตกดินที่โรแมนติกมากๆ
            เป็นภาพแสงสีส้มสะท้อนกับตึกระยิบระยับ
            ส่วนดาดฟ้าข้างบนมีไฮไลท์ที่เป็นพื้นกระจกใสที่สามารถมองเห็นวิวเมืองข้างล่างได้แบบเต็มๆ
            และเป็นมุมถ่ายรูปที่สวยเก๋มากๆ นอกจากนี้เอาใจสายนั่งชิลล์ด้วย
            Mahanakhon Rooftop Bar จิบเครื่องดื่มเย็นๆ ชมวิวเมืองยามเย็น
            ฟินไม่ไหวแล้ววว
          </p>
        </div>
        <div className="KingPowerMahanakhon-picture">
          <img src={KingPowerMahanakhon01}></img>
          <img src={KingPowerMahanakhon02}></img>
          <img src={KingPowerMahanakhon03}></img>
          <img src={KingPowerMahanakhon04}></img>
          <img src={KingPowerMahanakhon05}></img>
        </div>
        <div className="KingPowerMahanakhon-location">
          <ul>
            <li>
              <strong>Location:</strong> 114/1 ถ.นราธิวาสราชนครินทร์ เเขวงสีลม
              เขตบางรัก จ.กรุงเทพฯ
            </li>

            <li>
              <strong>Phone:</strong> 02 677 8721
            </li>

            <li>
              <strong>Fee:</strong> ค่าเข้าชมวันจันทร์ – ศุกร์ 530 บาท, วันเสาร์
              – อาทิตย์ 880 บาท
            </li>

            <li>
              <strong>Open-Close:</strong> เปิดให้บริการทุกวัน เวลา 10.00 –
              00.00 น.
            </li>

            <li>
              <strong>Facebook:</strong>{" "}
              <a href="https://www.facebook.com/KingPowerMahanakhon/">
                King Power Mahanakhon
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KingPowerMahanakhon;
