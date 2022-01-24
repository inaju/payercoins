import React from 'react';
import './Menu.css'
import Tab from './Tab';
import homeicon from '../assets/homeicon.png'
import storeicon from '../assets/storeicon.png'
import paymenticon from '../assets/paymenticon.png'
import walleticon from '../assets/walleticon.png'
import settingsicon from '../assets/settingsicon.png'


const Menu = () => {
  return <div className="menu__container">
          <Tab icon={homeicon} text="Dashboard" />
    <Tab icon={storeicon} text="Store" />
    <Tab icon={paymenticon} text="Payment" />
    <Tab icon={walleticon} text="Wallet" />
    <Tab icon={settingsicon} text="Settings" />


  </div>;
};

export default Menu;
