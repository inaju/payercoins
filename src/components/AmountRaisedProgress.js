import React from 'react';
import './AmountRaisedProgress.css'
// import ProgressBar from 'react-bootstrap/ProgressBar';

import ProgressBar from "@ramonak/react-progress-bar";


const AmountRaisedProgress = ({raised, target}) => {
  return <div className="amountraisedprogress__container">
    <h4>
      AMOUNT RAISED
    </h4>     
    {/* <ProgressBar now={60} color="green" /> */}
    <ProgressBar completed={60} height="10px" width="50%" borderRadius="0" labelSize="0.6rem" bgColor="#48D189"/>
    <p>{raised} USD out of {target} USD Goal </p>
  </div>;
};

export default AmountRaisedProgress;
