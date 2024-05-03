import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";

//pages
import SwitchTabs from "../components/switchTabs/SwitchTabs";
import Pool from "../pages/pool/Pool";
import NotFound from "../pages/Page404";
import ComingSoon from "../pages/Comingsoon"
import Terms from "../components/Terms";
import Farm from "../components/farm/Farm";
import Stake from "../components/stake/Stake"
//import CoinSwapper from "../components/CoinSwapper/CoinSwapper";
//import CoinSwapper from "../CoinSwapper/CoinSwapper";
import Swap from "../components/swap/Swap";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        // { element: <Navigate to="/home" replace /> },
        { path: "home", element: <Pool /> },
        { path: "liquidity", element: <SwitchTabs /> },
        { path: "farm", element: <Farm /> },
        { path: "stake", element: <Stake /> },
        { path: "faucet", element: <ComingSoon /> },
        { path: "terms", element: <Terms /> },
        { path: "404", element: <NotFound /> },
        { path: "lottery", element: <ComingSoon />},
        { path: "swap", element: <Swap />},
        { path: "nameservice", element: <ComingSoon />},
        { path: "voting", element: <ComingSoon />},
        { path: "launchpad", element: <ComingSoon />},
        { path: "", element: <Navigate to="/home" /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "/", element: <Navigate to="/home" replace /> },
    // { path: "*", element: <Navigate to="/v2/404" replace /> },
  ]);
}
