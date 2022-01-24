import React from 'react';
import './DonationsDetails.css'
import {GrNext} from 'react-icons/gr'
import { Link } from "react-router-dom";


function DonationsDetails({title, amount, date}) {
  return <div className="donationsdetails__container" >
      <div  className="donationsdetails__container-info">

      <p className="donationsdetails__container-title">{title}</p>
      <p className="donationsdetails__container-amount">{amount}</p>
      <p className="donationsdetails__container-date">{date}</p>

    </div>

      <p className="donationsdetails__container-more"> <GrNext color="#909198"/> </p>
  </div>;
}

export default DonationsDetails;


