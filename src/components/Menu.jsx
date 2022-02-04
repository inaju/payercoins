import React from 'react';
import './Menu.css'
import Tab from './Tab';
import homeicon from '../assets/homeicon.png'
import storeicon from '../assets/storeicon.png'
import paymenticon from '../assets/paymenticon.png'
import walleticon from '../assets/walleticon.png'
import settingsicon from '../assets/settingsicon.png'
import { useSelector, useDispatch } from "react-redux";
import {
   
  sidebarPaymentToggleState,
} from "../redux/slice";


const Menu = () => {
  const dispatch = useDispatch();
  const sidebarPaymentToggle = useSelector((state) => state.counter.sidebarPaymentToggle);

  return <div className="menu__container">
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


  </div>;
};

export default Menu;
