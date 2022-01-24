import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'
import {BsToggleOff} from 'react-icons/gr'
import {BsToggleOn} from 'react-icons/gr'

import {IoIosArrowDown} from 'react-icons/io'

import menu from '../assets/menu.png'
import logo from '../assets/Logo.png'
import avatar from '../assets/Avatar.png'

import './NavbarMobile.css'
import SideBar from '../components/SideBar';
import Menu from '../components/Menu';


const NavbarMobile = () => {

    const [toggleMenu, setToggleMenu]= useState(false)

  return <div className="navbarmobile__container ">
      <div className="navbarmobile__container-items align__main">

     

      <div className="navbarmobile__container-logo">
          {
              toggleMenu ? <GrClose onClick={()=>setToggleMenu(false)} size={22} color='#909198'   />
              : <GiHamburgerMenu size={22}color='#909198' onClick={()=>setToggleMenu(true)} />

          }
          
        <img src={logo} alt="logo" />

        {toggleMenu && (
            <Menu />
        )}
      </div>

      <div className="navbarmobile__container-account">
      
        <img src={avatar} alt="" />
        <IoIosArrowDown color='#909198' size={22}/>
        
      </div>
      </div>
  </div>;
};

export default NavbarMobile;
