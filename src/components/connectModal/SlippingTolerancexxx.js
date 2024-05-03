import React, { useState, useEffect } from "react";
import "./SlippingTolerance.css";
import PhnxLogo from "../../assets/phnxLogo.png";
import CloseIcon from "@mui/icons-material/Close";
import percentage from "../../assets/percentage.svg";
import searchIcon from "../../assets/search.svg";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, InputAdornment, Modal, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_SLIPPAGE_ADD_LIQUIDITY,
  SET_SLIPPAGE_REMOVE_LIQUIDITY,
} from "../../redux/types/local.types";


const SlippingTolerancexxx = ({
  status,
  handleClose,
  slippageValue,
  slippageType,
}) => {
  const dispatch = useDispatch();
  const [slippageVal, setSlippageVal] = useState(0.1);
  const [warningMsg, setWarningMsg] = useState(false);
  const slippageAddLiquidityxxx = useSelector(
    (state) => state.localReducer.slippageAddLiquidityxxx
  );
  const slippageRemoveLiquidity = useSelector(
    (state) => state.localReducer.slippageRemoveLiquidity
  );

  useEffect(() => {
    if (slippageValue) {
      setSlippageVal(slippageValue);
    }
  }, [slippageValue]);

  useEffect(() => {
    // if (slippageValue > 0 && slippageValue < 0.1) {
    //   setWarningMsg(true);
    // } else {
    //   setWarningMsg(false);
    // }
    // console.log("slippageVal", slippageVal);
    // console.log("slippageValue", slippageValue);
  }, [slippageVal]);

  // useEffect(() => {
  //   if (Number(slippageVal) <= 0 || Number(slippageVal) > 1) {
  //     return;
  //   } else {
  //     if (slippageType == "add") {
  //       dispatch({
  //         type: SET_SLIPPAGE_ADD_LIQUIDITY,
  //         payload: slippageVal,
  //       });
  //     } else if (slippageType == "remove") {
  //       dispatch({
  //         type: SET_SLIPPAGE_REMOVE_LIQUIDITY,
  //         payload: slippageVal,
  //       });
  //     }
  //   }
  // }, [slippageVal]);

  const handleOnPressSetSlippage = () => {
    if (Number(slippageVal) <= 0 || Number(slippageVal) > 1) {
      return;
    } else {
      if (slippageType == "add") {
        dispatch({
          type: SET_SLIPPAGE_ADD_LIQUIDITY,
          payload: slippageVal,
        });
      } else if (slippageType == "remove") {
        dispatch({
          type: SET_SLIPPAGE_REMOVE_LIQUIDITY,
          payload: slippageVal,
        });
      }
    }
    handlePressClose();
  };

  const handleSetSlippageValue = (val) => {
    // console.log("handleOnChangeSlippageValue ", val);
    if (val < 0 || val > 1) {
      return;
    } else {
      if (val > 0 && val < 0.1) {
        setWarningMsg(true);
      } else {
        setWarningMsg(false);
      }
      setSlippageVal(
        val.toString().slice(val.toString().indexOf(".") + 1, -1).length < 15
          ? val
          : slippageVal
      );
    }
  };

  const [open, setOpen] = useState(status);
  const handleOpen = () => setOpen(true);

  const handlePressClose = () => {
    if (slippageType == "add") {
      setSlippageVal(slippageAddLiquidityxxx);
    } else if (slippageType == "remove") {
      setSlippageVal(slippageRemoveLiquidity);
    }
    handleClose(false);
  };

  const handlePercentageInput = (e) => {
    if (e.target.value == "" || isNaN(e.target.value)) {
      handleSetSlippageValue("");
    } else if (e.target.value > 0.5) {
      handleSetSlippageValue(e.target.value);
    } else {
      handleSetSlippageValue(e.target.value);
    }
  };

  return (
    <div>
      <Modal
        open={status}
        onClose={handlePressClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="slippingLiq-div">

          <div className="slippingLiq-heading"
            style={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <div>Select Token</div>
            <div className="">
              <div className="closeModalSlipper">
                <span className="cursorPointer">
                  <CloseIcon
                    sx={{ transform: "scale(1.2)" }}
                    onClick={handlePressClose}
                  />
                </span>
              </div>
            </div>
          </div>

          <TextField
            sx={{
              borderRadius: "6px",
              "& .MuiOutlinedInput-input": {
                fontSize: "20px",
                fontWeight: "500",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <img src={searchIcon} className="textFieldIcon" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className="slippingLiq-ps-input"
            placeholder="Search name or paste address"
            onChange={(e) => {
              handlePercentageInput(e);
            }}
          />

          {/* <div className="slippingLiq-ps-div">
            <div
              className="slippingLiq-ps"
              style={{
                backgroundColor: slippageVal == 0.1 ? "#332545" : "#eee",
                color: slippageVal == 0.1 ? "#fff" : "#000",
                marginRight: "15px",
              }}
              onClick={() => {
                handleSetSlippageValue(0.1);
              }}
            >
              0.1%
            </div>
            <div
              className="slippingLiq-ps"
              style={{
                backgroundColor: slippageVal == 0.5 ? "#332545" : "#eee",
                color: slippageVal == 0.5 ? "#fff" : "#000",
                marginRight: "15px",
              }}
              onClick={() => {
                handleSetSlippageValue(0.5);
              }}
            >
              0.5%
            </div>
            <div
              className="slippingLiq-ps"
              style={{
                backgroundColor: slippageVal == 1 ? "#332545" : "#eee",
                color: slippageVal == 1 ? "#fff" : "#000",
                marginRight: "15px",
              }}
              onClick={() => {
                handleSetSlippageValue(1);
              }}
            >
              1.0%
            </div>
            <div
              className="slippingLiq-ps"
              style={{
                backgroundColor:
                  slippageVal != 0.1 && slippageVal != 0.5 && slippageVal != 1
                    ? "#332545"
                    : "#eee",
                color:
                  slippageVal != 0.1 && slippageVal != 0.5 && slippageVal != 1
                    ? "#fff"
                    : "#000",
              }}
              onClick={() => {
                return;
              }}
            >
              Auto
            </div>
          </div> */}
          <div className="my-4">
            <ul style={{ listStyleType: "none", padding: "0" }}>
              <li>
                <div className="coin-wrapper"
                  style={{ 
                    backgroundColor: slippageVal == 0.1 ? "rgb(195, 183, 255)" : "#eee",
                   }}
                   onClick={() => {
                    handleSetSlippageValue(0.1);
                  }}
                >
                  <div className="coin-name">
                    <img alt="logo" src={PhnxLogo} />
                    <p style={{ marginLeft: "8px" }}>
                      ASNODT
                    </p>
                  </div>
                  <div className="coin-balance">
                    <p>
                      999
                    </p>
                    <p>
                      ASNODT
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="coin-wrapper">
                  <div className="coin-name">
                    <img alt="logo" src={PhnxLogo} />
                    <p style={{ marginLeft: "8px" }}>
                      ASNODT
                    </p>
                  </div>
                  <div className="coin-balance">
                    <p>
                      999
                    </p>
                    <p>
                      ASNODT
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="coin-wrapper">
                  <div className="coin-name">
                    <img alt="logo" src={PhnxLogo} />
                    <p style={{ marginLeft: "8px" }}>
                      ASNODT
                    </p>
                  </div>
                  <div className="coin-balance">
                    <p>
                      999
                    </p>
                    <p>
                      ASNODT
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <br></br>
          

          <button
            className="slippingLiq-btn"
            disabled={
              Number(slippageVal) <= 0 || Number(slippageVal) > 1 ? true : false
            }
            onClick={handleOnPressSetSlippage}
            style={{
              backgroundColor:
                Number(slippageVal) <= 0 || Number(slippageVal) > 1
                  ? "#afafaf"
                  : "#332545",
              fontSize: "16px",
              height: "50px",
              fontWeight: "700",
              cursor:
                Number(slippageVal) <= 0 || Number(slippageVal) > 1
                  ? "inherit !important"
                  : "pointer",
            }}
          >
            Select Token
          </button>

          <br></br>
        </div>
      </Modal>
    </div>
  );
};

export default SlippingTolerancexxx;
