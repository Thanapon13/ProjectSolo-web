import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import LoginPage from "./components/LoginAndRegister/login";
import ProvincePage from "./components/ProvincePage/provincePage";
import Kanchanaburireview from "./components/provinceAll/kanchanaburi/kanchanaburireview";
import SkywalkKanchanaburi from "./components/provinceAll/kanchanaburi/SkywalkKanchanaburi/SkywalkKanchanaburi";
import KanMachiCafeKanchanaburi from "./components/provinceAll/kanchanaburi/KanMachiCafeKanchanaburi/KanMachiCafeKanchanaburi";
import KrasaeCaveKanchanaburi from "./components/provinceAll/kanchanaburi/KrasaeCaveKanchanaburi/KrasaeCaveKanchanaburi";
import Chonburireview from "./components/provinceAll/Chonburi/chonburireview";
import TienBeachChonburi from "./components/provinceAll/Chonburi/TienBeach/TienBeach";
import GrandcanyonChonburi from "./components/provinceAll/Chonburi/Grandcanyon/Grandcanyon";
import Bangkokreview from "./components/provinceAll/Bangkok/bangkokreview";
import BangkokJapan from "./components/provinceAll/Bangkok/BangkokJapan/BangkokJapan";
import KingPowerMahanakhon from "./components/provinceAll/Bangkok/KingPowerMahanakhon/KingPowerMahanakhon";
import ChiangMaireview from "./components/provinceAll/ChiangMai/ChiangMai";
import KhlongMaeKhaChiangMai from "./components/provinceAll/ChiangMai/KhlongMaeKhaChiangMai/KhlongMaeKhaChiangMai";
import BaanKangWatChiangMai from "./components/provinceAll/ChiangMai/BaanKangWatChiangMai/BaanKangWatChiangMai";
import NimmanHillChiangMai from "./components/provinceAll/ChiangMai/NimmanHillChiangMai/NimmanHillChiangMai";
import ThaPhaeGateChiangMai from "./components/provinceAll/ChiangMai/ThaPhaeGateChiangMai/ThaPhaeGateChiangMai";
import ReviewPage from "./components/ReviewPage/reviewPage";
import Footer from "./components/Footer/footer";
import CommunityPage from "./components/CommunityPage/communityPage.js";
import ShoppingPage from "./components/shoppingPage/shoppingPage/shoppingPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/provincePage" element={<ProvincePage />} />

            {/* กาญ */}
            <Route
              path="/provincePage/kanchanaburireview"
              element={<Kanchanaburireview />}
            />

            <Route
              path="/provincePage/kanchanaburireview/SkywalkKanchanaburi"
              element={<SkywalkKanchanaburi />}
            />

            <Route
              path="/provincePage/kanchanaburireview/KanMachiCafeKanchanaburi"
              element={<KanMachiCafeKanchanaburi />}
            />
            <Route
              path="/provincePage/kanchanaburireview/KrasaeCaveKanchanaburi"
              element={<KrasaeCaveKanchanaburi />}
            />

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Register */}

            {/* ชลบุรี */}
            <Route
              path="/provincePage/chonburireview"
              element={<Chonburireview />}
            />

            <Route
              path="/provincePage/chonburireview/TienBeach"
              element={<TienBeachChonburi />}
            />

            <Route
              path="/provincePage/chonburireview/Grandcanyon"
              element={<GrandcanyonChonburi />}
            />

            {/* กทม */}
            <Route
              path="/provincePage/bangkokreview"
              element={<Bangkokreview />}
            />

            <Route
              path="/provincePage/bangkokreview/BangkokJapan"
              element={<BangkokJapan />}
            />
            <Route
              path="/provincePage/bangkokreview/KingPowerMahanakhon"
              element={<KingPowerMahanakhon />}
            />

            {/* เชียงใหม่ */}
            <Route
              path="/provincePage/ChiangMai"
              element={<ChiangMaireview />}
            />
            <Route
              path="/provincePage/ChiangMai/KhlongMaeKhaChiangMai"
              element={<KhlongMaeKhaChiangMai />}
            />

            <Route
              path="/provincePage/ChiangMai/BaanKangWatChiangMai"
              element={<BaanKangWatChiangMai />}
            />

            <Route
              path="/provincePage/ChiangMai/NimmanHillChiangMai"
              element={<NimmanHillChiangMai />}
            />

            <Route
              path="/provincePage/ChiangMai/ThaPhaeGateChiangMai"
              element={<ThaPhaeGateChiangMai />}
            />

            <Route path="/reviewPage" element={<ReviewPage />} />
            <Route path="/communityPage" element={<CommunityPage />} />
            <Route path="/shoppingPage" element={<ShoppingPage />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
