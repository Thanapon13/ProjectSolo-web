import React from "react";
import "./SkywalkKanchanaburi.css";
import SkyWalk from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Sky-Walk-07.jpg";
import Skywalkkanchanaburi from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-23-1.jpg";
import Skywalkkanchanaburi02 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-4copy.jpg";
import Skywalkkanchanaburi03 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-2-1.jpg";
import Skywalkkanchanaburi04 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-50.jpg";
import Skywalkkanchanaburi05 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-46.jpg";
import Skywalkkanchanaburi06 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-32.jpg";
import Skywalkkanchanaburi07 from "../../kanchanaburi/Check-inKanchanaburi/SkywalkKanchanaburi/Skywalkkanchanaburi-6.jpg";
import { Link } from "react-router-dom";

function SkywalkKanchanaburi() {
  return (
    <div className="container-all-SkywalkKanchanaburi">
      <div className="container-SkywalkKanchanaburi">
        <div className="SkywalkKanchanaburi-header">
          <h1>Skywalk กาญจนบุรี แลนด์มาร์กแห่งใหม่ที่ต้องไปเช็คอิน!</h1>
          <img src={SkyWalk}></img>
        </div>
        <div className="SkywalkKanchanaburi-content">
          <p>
            <strong>Skywalk กาญจนบุรี </strong>
            แลนด์มาร์กแห่งใหม่ริมแม่น้ำแควบนความสูง 12 เมตรจากพื้นถนน
            และความยาวของ Skywalk กาญจนบุรี อยู่ที่ 150 เมตร ตลอดริมแม่น้ำ
            ตัวพื้นของ Skywalk กาญจนบุรี ทำจากกระจกใสแข็งแรง
            ตลอดทางเดินสามารถมองเห็นแม่น้ำด้านล่าง
            เมื่อเดินไปด้านซ้ายของสะพานจะสามารถมองเห็นแม่น้ำท้ังหมดสามสายด้วยกันคือ
            แม่น้ำแควใหญ่ แม่น้ำแควน้อยที่มาบรรจบกันและกลายเป็นแม่น้ำแม่กลอง
            เป็นไฮไลท์พิเศษของที่นี่เลย
            ส่วนทางด้านขวาของสะพานจะสามารถมองเห็นวิวของหอพระประวัติสมเด็จพระญาณสังวร
            สมเด็จพระสังฆราช สกลมหาสังฆปรินายก
            ซึ่งเป็นอีกหนึ่งสถานที่สำคัญของจังหวัดกาญจนบุรี
          </p>
          <img src={Skywalkkanchanaburi}></img>
          <p>
            จากมุมนี้เราสามารถมองเห็นแม่น้ำสองสีที่มาบรรจบกันของแม่น้ำแควใหญ่และแม่น้ำแควน้อย
            ซึ่งเป็นต้นกำเนิดของแม่น้ำแม่กลอง
          </p>
          <img src={Skywalkkanchanaburi02}></img>
          <p>ภาพมุมสูงสวยๆ ของแม่น้ำแควและ Skywalk กาญจนบุรี</p>
          <img src={Skywalkkanchanaburi03}></img>
          <p>
            ไม่ว่าจะมองไปทางไหนก็สามารถเห็นภาพของภูเขาและแม่น้ำตัดกับท้องฟ้าสวยๆ
            ได้แบบ 360 องศาเลย
          </p>
          <img src={Skywalkkanchanaburi04}></img>
          <img src={Skywalkkanchanaburi05}></img>
          <img src={Skywalkkanchanaburi06}></img>
          <img src={Skywalkkanchanaburi07}></img>
          <p>
            ใครที่อยากมาดูความสวยงามของ Skywalk กาญจนบุรี
            ก็สามารถมาเที่ยวชมกันได้เลย
            ที่นี่ไม่ค่าเข้าชมแต่มีค่ารองเท้าสำหรับใส่เดินบน Skywalk คนละ 60 บาท
            เท่านั้นเอง
            บอกเลยว่าทุกคนจะได้เห็นความสวยงามของจังหวัดกาญจนบุรีในมุมใหม่ๆ
            แน่นอน
          </p>
        </div>
      </div>
      <div className="context">
        <ul>
          <li>
            <strong>Location:</strong> ท่าน้ำหน้าเมืองกาญจนบุรี ตัวอำเภอ
            ต.บ้านใต้ จ.กาญจนบุรี
          </li>
          <li>
            <strong> Google Map: </strong>
            <a href="https://goo.gl/maps/QQTqypzXa1oREjp48">Skywalk</a>
          </li>
          <li>
            <strong> Phone:</strong> 034 511 502
          </li>
          <li>
            <strong>Open-Close:</strong> เปิดให้บริการทุกวัน เวลา 09.00 – 17.00
            น.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SkywalkKanchanaburi;
