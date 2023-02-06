import React from "react";
import "./provincePage.css";
import bgKanchanaburi from "../ProvincePage/images/bg-Kanchanaburi.jpg";
import bgChonburi from "../ProvincePage/images/bg-Chonburi.jpg";
import bgBangkok from "../ProvincePage/images/bg-Bangkok.jpg";
import bgChiangMai from "../ProvincePage/images/bg-ChiangMai.jpg";
import bgChiangRai from "../ProvincePage/images/bg-ChiangRai.jpg";
import bgchumphon from "../ProvincePage/images/bg-chumphon.jpg";
import bgnan from "../ProvincePage/images/bg-nan.jpg";
import bgSukhothai from "../ProvincePage/images/bg-Sukhothai.jpg";
import { Link } from "react-router-dom";

function ProvincePage() {
  return (
    <div className="container-provincepage">
      <h1>จังหวัด</h1>

      <div className="card-continer-provincepage">
        <div className="card-provincepage">
          <Link to="/provincePage/kanchanaburireview">
            <img src={bgKanchanaburi}></img>
            <h1>จังหวัดกาญจนบุรี</h1>
          </Link>
        </div>

        <div className="card-provincepage">
          <Link to="/provincePage/chonburireview">
            <img src={bgChonburi}></img>
            <h1>จังหวัดชลบุรี</h1>
          </Link>
        </div>

        <div className="card-provincepage">
          <Link to="/provincePage/bangkokreview">
            <img src={bgBangkok}></img>
            <h1>จังหวัดกรุงเทพมหานคร</h1>
          </Link>
        </div>

        <div className="card-provincepage">
          <Link to="/provincePage/ChiangMai">
            <img src={bgChiangMai}></img>
            <h1>จังหวัดเชียงใหม่</h1>
          </Link>
        </div>

        <div className="card-provincepage">
          <img src={bgChiangRai}></img>
          <h1>จังหวัดเชียงราย</h1>
        </div>

        <div className="card-provincepage">
          <img src={bgchumphon}></img>
          <h1>จังหวัดชุมพร</h1>
        </div>

        <div className="card-provincepage">
          <img src={bgnan}></img>
          <h1>จังหวัดน่าน</h1>
        </div>

        <div className="card-provincepage">
          <img src={bgSukhothai}></img>
          <h1>จังหวัดสุโขทัย</h1>
        </div>
      </div>
    </div>
  );
}

export default ProvincePage;
