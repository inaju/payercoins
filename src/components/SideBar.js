import React, { useState } from "react";
import Tab from "./Tab";
import homeicon from "../assets/homeicon.png";
import storeicon from "../assets/storeicon.png";
import paymenticon from "../assets/paymenticon.png";
import walleticon from "../assets/walleticon.png";
import settingsicon from "../assets/settingsicon.png";
import "./sidebar.css";
import logo from "../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import {
   
  sidebarPaymentToggleState,
} from "../redux/slice";


function SideBar() {
  const dispatch = useDispatch();
  const sidebarPaymentToggle = useSelector((state) => state.counter.sidebarPaymentToggle);


  return (
    <div className="sidebar__container">
      <div className="sidebar__container-main">
        <div className="sidebar__container-logo">
          <img src={logo} alt="" />
        </div>

        <div className="sidebar__container-businessdetails">
          <h4>Grazac</h4>
          <p>ID: 23430843</p>
        </div>

        <div className="sidebar__container-tab">
          <Tab icon={homeicon} text="Dashboard" />
          

          

          <Tab icon={walleticon} text="Wallet" />
          <div onClick={() => dispatch(sidebarPaymentToggleState())}>
            <Tab icon={paymenticon} text="Payment" />
            {sidebarPaymentToggle && (
              <div className={sidebarPaymentToggle == true ? "show tab__indent" : "hide"}>
                <Tab text="Payment Page" />
                <Tab text="Donation" />
              </div>
            )}
          </div>
          <Tab icon={storeicon} text="Store" />
          <Tab icon={settingsicon} text="Settings" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
