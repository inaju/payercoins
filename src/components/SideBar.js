import React, {useState} from 'react';
import Tab from './Tab';
import homeicon from '../assets/homeicon.png'
import storeicon from '../assets/storeicon.png'
import paymenticon from '../assets/paymenticon.png'
import walleticon from '../assets/walleticon.png'
import settingsicon from '../assets/settingsicon.png'
import './sidebar.css'
import logo from '../assets/Logo.png'


function SideBar() {
  const [show, setShow]= useState(false)

  console.log(show)

  return <div className="sidebar__container">
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
            <Tab icon={storeicon} text="Store" />

            <div  onClick={()=> setShow(!show)} >

            <Tab icon={paymenticon} text="Payment" />
            {

                show &&(
                  <div className={ show==true ? "show tab__indent":"hide"} >

                      <Tab  text="Payment Page" onClick={()=> setShow(true)} />
                      <Tab  text="Donation" onClick={()=> setShow(true)}/>
                      
                      {console.log(show)}
                  </div>
                )

            }

            </div>
           
            <Tab icon={walleticon} text="Wallet" />
            <Tab icon={settingsicon} text="Settings" />
        </div>


    </div>

  </div>;
}

export default SideBar;
