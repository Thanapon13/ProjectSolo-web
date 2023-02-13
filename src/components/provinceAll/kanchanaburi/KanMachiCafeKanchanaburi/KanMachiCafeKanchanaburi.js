import React from "react";
import "./KanMachiCafeKanchanaburi.css";
import Kanmachi01 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-1edit.jpg";
import Kanmachi02 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-13edit.jpg";
import Kanmachi03 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-24edit.jpg";
import Kanmachi04 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-46edit.jpg";
import Kanmachi05 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-Cafe02.jpg";
import Kanmachi06 from "../Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-Cafe03.jpg";

function KanMachiCafeKanchanaburi() {
  return (
    <div className="container-all-KanMachiCafeKanchanaburi">
      <div className="container-KanMachiCafeKanchanaburi">
        <div className="KanMachiCafeKanchanaburi-content">
          <h1>กาญมาชิ คาเฟ่, กาญจนบุรี (Kan Machi Cafe)</h1>
          <p>
            <strong> กาญมาชิ คาเฟ่</strong>
            คาเฟ่สไตล์ญี่ปุ่นที่บอกได้เลยว่าเป็นคาเฟ่ที่สวยตั้งแต่ทางเข้าเพราะจุดเด่นของคาเฟ่นี้จะอยู่ที่
            ซุ้มเสาโทริอิสีแดง ภายในคาเฟ่จะมีมุมสุดเก๋มากมาย
            ไม่ว่าจะเดินไปมุมไหนของคาเฟ่ก็ให้บรรยากาศเหมือนกับอยู่ท่ามกลางประเทศญี่ปุ่นเลยทีเดียว
            ภายในคาเฟ่เต็มไปด้วยร้านอาหารและเครื่องดื่มในแบบฉบับญี่ปุ่นมาให้ลิ้มลองมากมาย
            ไม่ว่าจะเป็นไอศครีม ทาโกะยากิ นอกจากนี้ยังมี Photobooth
            ให้ได้เก็บภาพเป็นที่ระลึกอีกด้วย พลาดไม่ได้เลยเด็ดขาด
          </p>
        </div>
        <div className="KanMachiCafeKanchanaburi-picture">
          <img alt="img" src={Kanmachi01}></img>
          <img alt="img" src={Kanmachi02}></img>
          <img alt="img" src={Kanmachi03}></img>
          <img alt="img" src={Kanmachi04}></img>
          <img alt="img" src={Kanmachi05}></img>
          <img alt="img" src={Kanmachi06}></img>
        </div>
        <div className="KanMachiCafeKanchanaburi-location">
          <ul>
            <li>
              <strong>Location:</strong> 55/55 ม.2 ต.ท่ามะขาม อ.เมือง
              จ.กาญจนบุรี
            </li>
            <li>
              <strong> Facebook: </strong>
              <a href="    https://web.facebook.com/kanmachicafe?_rdc=1&_rdr">
                กาญมาชิ คาเฟ่
              </a>
            </li>
            <li>
              <strong> Phone:</strong> 094 592 6553
            </li>
            <li>
              <strong>Open-Close:</strong> เปิดบริการทุกวันเวลา 10.00 – 18.00 น.{" "}
              <span>(หยุดทุกวันพุธ)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KanMachiCafeKanchanaburi;
