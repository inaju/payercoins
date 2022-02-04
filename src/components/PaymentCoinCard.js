import React from "react";
import "./PaymentCoinCard.css";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { qrpayState,selectPayementState } from "../redux/slice";
import { useSelector, useDispatch } from "react-redux";


function PaymentCoinCard({ coin_name, coin_name_short, icon, coin_rate }) {
  

  const dispatch = useDispatch();

  return (
    <div className="paymentcoincard__container" onClick={()=>{
      dispatch(qrpayState())
      // dispatch(selectPayementState())
      console.log("pretty messed up yo")
    }}>
      <div className="paymentcoincard__container-left">
          
        <img src={icon} alt="" />

        <div className="paymentcoincard__container-text">
          <h4>{coin_name}</h4>
          <p>
            1 {coin_name_short} = NGN {coin_rate}
          </p>
        </div>

       
      </div>
      <div className="paymentcoincard__container-next">
          <BsArrowRightCircleFill size={27} color={"#31373D"}/>
        </div>
    </div>
  );
}

export default PaymentCoinCard;
