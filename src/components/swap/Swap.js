import React from "react";
import { useState } from "react";

import "./Swap.css";
import SwapModal from "../swapComponent";
import MyLiquidity from "./myLiquidity/MyLiquidity";

function Swap() {
  
  const [currentTab, setCurrentTab] = useState("addLiquidity");

  const ChangeTab = (tab) => {
    if (tab === "addLiquidity") {
      setCurrentTab("addLiquidity");
    } else {
      setCurrentTab("myLiquidity");
    }
  };

  return (
    <div>
    <div style={{ paddingBottom: "50px" }}>
      <div className="switch-tabs-div">
        <div
          onClick={() => ChangeTab("addLiquidity")}
          className="switch-tabs-btns"
          style={{
            background: currentTab === "addLiquidity" ? "#332545" : "#fff",
            color: currentTab === "addLiquidity" ? "#fff" : "#73727D",
          }}
        >
          Swap
        </div>
        <div
          onClick={() => ChangeTab("myLiquidity")}
          className="switch-tabs-btns"
          style={{
            background: currentTab === "myLiquidity" ? "#332545" : "#fff",
            color: currentTab === "myLiquidity" ? "#fff" : "#73727D",
          }}
        >
          My Liquidity
        </div>
      </div>

      {currentTab === "addLiquidity" ? (
        <div className="liq-modal-res">
          <div>
            <SwapModal componentName="addLiquidity" closeBtn={false} />
          </div>
        </div>
      ) : (
        <MyLiquidity ChangeTab={ChangeTab} />
      )}
    </div>

    </div>
  );
}

export default Swap;
