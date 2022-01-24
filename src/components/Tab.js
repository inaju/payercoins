import { useState } from 'react';
import './Tab.css'
import { Link } from "react-router-dom";


const Tab = ({icon, text}) => {
  // const [show, setShow]= useState(true)
  // console.log(show)
  // return <div className={text == "Payment" && show==true ? "tab__container show" : "tab__container"}  onClick={()=> setShow(!show)}>
return <div className="tab__container" >

      <p><img src={icon} alt=""/> 
      
      <Link to={`/${text}`}>{text}</Link>
     </p>
  </div>;
};

export default Tab;


