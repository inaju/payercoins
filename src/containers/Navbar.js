import "./Navbar.css";
import React, { useState } from "react";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";

import { IoIosArrowDown } from "react-icons/io";

import menu from "../assets/menu.png";
import logo from "../assets/Logo.png";
import avatar from "../assets/Avatar.png";

import "./Navbar.css";
import SideBar from "../components/SideBar";
import Menu from "../components/Menu";

const Navbar = () => {
  const [toggleTest, setToggleTest] = useState(false);

  return (
    <div className="navbar__container">
      <p>Test</p>

      {toggleTest ? (
        <BsToggleOff
          onClick={() => setToggleTest(false)}
          size={30}
          color="#909198"
        />
      ) : (
        <BsToggleOn
          size={30}
          color="#909198"
          onClick={() => setToggleTest(true)}
        />
      )}
      <p>Live</p>
      <img src={avatar} alt="" />
      <p className="nameofuser">John Doe</p>
      <IoIosArrowDown color="#909198" size={22} />
    </div>
  );
};

export default Navbar;
