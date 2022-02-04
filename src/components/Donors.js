import React from "react";
import "./Donors.css";
const Donors = ({ name, btc_amount, date }) => {
  return (
    <div className="donors__container">
      <div className="donors__container-left">
        <h4>{name}</h4>
        <p>{btc_amount}</p>
      </div>

      <p>{date}</p>
    </div>
  );
};

export default Donors;
