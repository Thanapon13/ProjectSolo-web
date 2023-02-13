import React from "react";
import "./reviewPage.css";
import BangkokJapan from "./images/Bangkok-inChonburi/Bangkok – Japan/57a19a52c62a8.jpg";
import BangkokKingPowerMahanakhon from "./images/Bangkok-inChonburi/King Power Mahanakhon/King-Power-Mahanakhon3.jpg";
import Chonburigrandcanyon from "./images/Check-inChonburi/grandcanyon/grandchonburi_900.jpg";
import ChonburiTienBeach from "./images/Check-inChonburi/Tien Beach/ถ้ำกระแซ-2.jpg";
import KanMachiCafeKanchanaburi from "./images/Check-inKanchanaburi/KanMachiCafeKanchanaburi/Kanmachi-Cafe02.jpg";
import KrasaeCaveKanchanaburi from "./images/Check-inKanchanaburi/KrasaeCaveKanchanaburi/ถ้ำกระแซ-900.jpg";
import SkywalkKanchanaburi from "./images/Check-inKanchanaburi/SkywalkKanchanaburi/Sky-Walk-07.jpg";
import ChiangMaiBaanKangWat from "./images/ChiangMai-checkin/BaanKangWat/Baanklangwat-15.jpg";
import { Link } from "react-router-dom";

function reviewPage() {
  return (
    <div className="container-reviewPage">
      <h1>แนะนำสถานที่ท่องเที่ยว</h1>

      <div className="card-continer-reviewPage">
        <div className="card-reviewPage">
          <Link to="/provincePage/bangkokreview/BangkokJapan">
            <img alt="img" src={BangkokJapan}></img>
            <h1>Bangkok – Japan</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/bangkokreview/KingPowerMahanakhon">
            <img alt="img" src={BangkokKingPowerMahanakhon}></img>
            <h1>Power Mahanakhon</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/chonburireview/Grandcanyon">
            <img alt="img" src={Chonburigrandcanyon}></img>
            <h1>Grandcanyon</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/chonburireview/TienBeach">
            <img alt="img" src={ChonburiTienBeach}></img>
            <h1>Tien Beach</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/kanchanaburireview/KanMachiCafeKanchanaburi">
            <img alt="img" src={KanMachiCafeKanchanaburi}></img>
            <h1>KanMachi Cafe</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/kanchanaburireview/SkywalkKanchanaburi">
            <img alt="img" src={SkywalkKanchanaburi}></img>
            <h1>Skywalk</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/ChiangMai/BaanKangWatChiangMai">
            <img alt="img" src={ChiangMaiBaanKangWat}></img>
            <h1>BaanKangWat</h1>
          </Link>
        </div>

        <div className="card-reviewPage">
          <Link to="/provincePage/kanchanaburireview/KrasaeCaveKanchanaburi">
            <img alt="img" src={KrasaeCaveKanchanaburi}></img>
            <h1>Krasae Cave</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default reviewPage;
