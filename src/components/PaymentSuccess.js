import React from "react";
import {
  AiFillCheckCircle,
  AiOutlineClose,
  AiFillCloseCircle,
} from "react-icons/ai";
import { paymentSuccessState } from "../redux/slice";
import "./PaymentSuccess.css"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const PaymentSuccess = ({ status }) => {
    const dispatch=useDispatch()
    const paymentSuccessToggle = useSelector((state) => state.counter.paymentSuccessToggle);



    console.log(paymentSuccessToggle)
  return (
    <div className="paymentsuccess__container">
<Link to="/donation">
      <AiOutlineClose size={20} onClick={()=>dispatch(paymentSuccessState())}/>

      </Link>
      {status ? (

        <div>
          <AiFillCheckCircle size={40}  color={"#48D189"} />

          <h4>Payment Successful</h4>
          <p>Your payment of NGN 10,000 was successful.</p>
        </div>
      ) : (
        <div>
          <AiFillCloseCircle size={40}  color={"#EB4335"} />

          <h4>Payment Failed</h4>
          <p>
            Your payment could not be processed at the moment, kindly try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
