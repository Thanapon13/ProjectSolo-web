import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import HomePage from "../components/HomePage/HomePage";
import LoginPage from "../components/LoginAndRegister/login";
import ProvincePage from "../components/ProvincePage/provincePage";
import ReviewPage from "../components/ReviewPage/reviewPage";
import CommunityPage from "../components/CommunityPage/communityPage.js";
import Kanchanaburireview from "../components/provinceAll/kanchanaburi/kanchanaburireview";
import SkywalkKanchanaburi from "../components/provinceAll/kanchanaburi/SkywalkKanchanaburi/SkywalkKanchanaburi";
import KanMachiCafeKanchanaburi from "../components/provinceAll/kanchanaburi/KanMachiCafeKanchanaburi/KanMachiCafeKanchanaburi";
import KrasaeCaveKanchanaburi from "../components/provinceAll/kanchanaburi/KrasaeCaveKanchanaburi/KrasaeCaveKanchanaburi";
import Chonburireview from "../components/provinceAll/Chonburi/chonburireview";
import TienBeachChonburi from "../components/provinceAll/Chonburi/TienBeach/TienBeach";
import GrandcanyonChonburi from "../components/provinceAll/Chonburi/Grandcanyon/Grandcanyon";
import Bangkokreview from "../components/provinceAll/Bangkok/bangkokreview";
import BangkokJapan from "../components/provinceAll/Bangkok/BangkokJapan/BangkokJapan";
import KingPowerMahanakhon from "../components/provinceAll/Bangkok/KingPowerMahanakhon/KingPowerMahanakhon";
import ChiangMaireview from "../components/provinceAll/ChiangMai/ChiangMai";
import KhlongMaeKhaChiangMai from "../components/provinceAll/ChiangMai/KhlongMaeKhaChiangMai/KhlongMaeKhaChiangMai";
import BaanKangWatChiangMai from "../components/provinceAll/ChiangMai/BaanKangWatChiangMai/BaanKangWatChiangMai";
import NimmanHillChiangMai from "../components/provinceAll/ChiangMai/NimmanHillChiangMai/NimmanHillChiangMai";
import ThaPhaeGateChiangMai from "../components/provinceAll/ChiangMai/ThaPhaeGateChiangMai/ThaPhaeGateChiangMai";
import ProtectedRout from "../features/auth/ProtectedRoute";
import Header from "../components/Header/Header";
import Useraccount from "../components/Useraccount/useraccount";
import ShoppingPage from "../components/shoppingPage/shoppingPage/shoppingPage";
import ShoppingCart from "../components/shoppingPage/shoppingCart/shoppingcart";
import ShoppingShirt from "../components/shoppingPage/shoppingShirt/shoppingShirt";
import { AdminPage } from "../components/adminPage/Admin";
import AdminProtectedRoute from "../auth/AdminProtectedRoute";
import HistoryOrder from "../components/historyUser/orderHistory";

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/admin",
        element: (
          <AdminProtectedRoute>
            <AdminPage />
          </AdminProtectedRoute>
        )
      },
      {
        path: "/historyorder",
        element: <HistoryOrder />
      },
      {
        path: "/provincePage",
        element: <ProvincePage />
      },
      //   กาญ
      {
        path: "/provincePage/kanchanaburireview",
        element: <Kanchanaburireview />
      },
      {
        path: "/provincePage/kanchanaburireview/SkywalkKanchanaburi",
        element: <SkywalkKanchanaburi />
      },
      {
        path: "/provincePage/kanchanaburireview/KanMachiCafeKanchanaburi",
        element: <KanMachiCafeKanchanaburi />
      },
      {
        path: "/provincePage/kanchanaburireview/KrasaeCaveKanchanaburi",
        element: <KrasaeCaveKanchanaburi />
      },

      // ชลบุรี
      {
        path: "/provincePage/chonburireview",
        element: <Chonburireview />
      },
      {
        path: "/provincePage/chonburireview/TienBeach",
        element: <TienBeachChonburi />
      },
      {
        path: "/provincePage/chonburireview/Grandcanyon",
        element: <GrandcanyonChonburi />
      },

      // กทม
      {
        path: "/provincePage/bangkokreview",
        element: <Bangkokreview />
      },
      {
        path: "/provincePage/bangkokreview/BangkokJapan",
        element: <BangkokJapan />
      },
      {
        path: "/provincePage/bangkokreview/KingPowerMahanakhon",
        element: <KingPowerMahanakhon />
      },

      // เชียงใหม่
      {
        path: "/provincePage/ChiangMai",
        element: <ChiangMaireview />
      },
      {
        path: "/provincePage/ChiangMai/KhlongMaeKhaChiangMai",
        element: <KhlongMaeKhaChiangMai />
      },
      {
        path: "/provincePage/ChiangMai/BaanKangWatChiangMai",
        element: <BaanKangWatChiangMai />
      },
      {
        path: "/provincePage/ChiangMai/NimmanHillChiangMai",
        element: <NimmanHillChiangMai />
      },
      {
        path: "/provincePage/ChiangMai/ThaPhaeGateChiangMai",
        element: <ThaPhaeGateChiangMai />
      },
      {
        path: "/reviewPage",
        element: <ReviewPage />
      },
      {
        path: "/communityPage",
        element: (
          <ProtectedRout>
            <CommunityPage />
          </ProtectedRout>
        )
      },
      {
        path: "/shoppingPage",
        element: (
          <ProtectedRout>
            <ShoppingPage />
          </ProtectedRout>
        )
      },
      {
        path: "/shoppingcart",
        element: <ShoppingCart />
      },
      {
        path: "/shoppingShirt/shoppingShirt",
        element: <ShoppingShirt />
      },

      {
        path: "/login",
        element: (
          <RedirectIfAuthenticate>
            <LoginPage />
          </RedirectIfAuthenticate>
        )
      },
      {
        path: "/useraccount",
        element: <Useraccount />
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
