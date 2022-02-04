import React, { useState } from "react";
import "./PublicDonation.css";
import public_donation_image from "../assets/public_donation_image.png";
import profile_image from "../assets/profile_image.png";
import logo_footer from "../assets/logo_footer.png";
import qr_1 from "../assets/qr_1.png";

import { BsCheckCircleFill } from "react-icons/bs";
import { BiLoaderAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  AiOutlineClose,
  AiOutlineArrowLeft,
  AiOutlineCopy,
} from "react-icons/ai";

import ProgressBar from "@ramonak/react-progress-bar";
import PaymentCoinCard from "../components/PaymentCoinCard";
import currency_btc from "../assets/currency_btc.png";
import currency_ethereum from "../assets/currency_ethereum.png";
import currency_tether from "../assets/currency_tether.png";
import { useSelector, useDispatch } from "react-redux";

import {
  selectPayementState,
  qrpayState,
  paymentSuccessState,
} from "../redux/slice";
import PaymentSuccess from "../components/PaymentSuccess";

const PublicDonation = () => {
  // const [dontate, setDonateToggle] = useState(false)
  const dispatch = useDispatch();
  const qrpay = useSelector((state) => state.counter.qrpay);
  const selectPayement = useSelector((state) => state.counter.selectPayement);
  const paymentSuccessToggle = useSelector(
    (state) => state.counter.paymentSuccessToggle
  );

  const [donteToggle, setDonateToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [QRCodePaymentMethod, setQRCodePaymentMethod] = useState(false);

  return (
    <div className="publicdonation__container align__main">
      <div className="publicdonation__container-description">
        <img src={public_donation_image} />
        <h4>Help Feed One Thousand Children</h4>
        <p>
          <CgProfile size={27} /> John Doe is organizing this fundraiser
        </p>
        <p>
          <BsCheckCircleFill size={27} /> Charity
        </p>
        <p>
          In the United States, in 2007, the Bureau of Labor Statistics found
          that American households in the lowest fifth in terms of wealth, gave
          on average a higher percentage of their incomes to charitable
          organizations than those households in the highest fifth.[1] Charity
          Navigator writes that, according to Giving USA, Americans gave $298
          billion in 2011 (about 2% of GDP).[2] The majority of donations were
          from individuals (73%), then from bequests (about 12%), foundations
          (2%) and less than 1% from corporations. The largest sector to receive
          donations was religious organizations (32%), then education (13%).
          Giving has increased in 3 out of 4 years since 1971 (with the
          occasional declines occurring around recession years).
        </p>
      </div>

      <div className="publicdonation__container-goal">
        <h3>Goal</h3>
        <ProgressBar
          completed={60}
          height="10px"
          width="100%"
          borderRadius="0"
          labelSize="0.6rem"
          bgColor="#48D189"
        />

        <p>60,000 USD raised of 500,000 USD goal</p>
        <button
          className="publicdonation__container-description-button_green"
          onClick={() => setDonateToggle(true)}
        >
          Donate Now
        </button>
        <button className="publicdonation__container-description-button_white white">
          Share
        </button>

        <h3 className="publicdonation__container-description-footer">
          Powered by <img src={logo_footer} alt="" />
        </h3>
      </div>

      {donteToggle && (
        <div className="publicdonation__container-makedonation">
          <div className="makedontation__container-parent">
            <div className="makedontation__container">
              <div className="makedontation__container-head">
                <h3>Donate</h3>{" "}
                <AiOutlineClose
                  onClick={() => setDonateToggle(false)}
                  size={25}
                />
              </div>

              <p>
                <input type="text" placeholder="Enter Amount To Donate" />
              </p>
              <p>
                <input type="checkbox" class="checkbox-round" />
                Don't Display my name publicly
              </p>
              <p>
                <input type="text" placeholder="Name" />
              </p>
              <p>
                <input type="text" placeholder="Email Addrees" />
              </p>
              <button
                onClick={() => {
                  dispatch(selectPayementState())
                  setDonateToggle(false)
                  // setPaymentMethod(!paymentMethod);
                  // console.log(selectPayement);
                  // console.log("open mic");
                }}
              >
                Make Donation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* {console.log(selectPayement)} */}

      {selectPayement && (
        <div className="publicdonation__container-payment__method">
          <div className="payment__method__container-parent">
            <div className="payment__method__container" />
            <h3>Select Payment Method</h3>
            <h4>PAY WITH</h4>
            <PaymentCoinCard
              coin_name={"Bitcoin"}
              coin_name_short={"BTC"}
              icon={currency_btc}
              coin_rate={"19,233,343"}
            />
            <PaymentCoinCard
              coin_name={"Etherum"}
              coin_name_short={"ETH"}
              icon={currency_ethereum}
              coin_rate={"345,243"}
            />
            <PaymentCoinCard
              coin_name={"Tether"}
              coin_name_short={"USDT"}
              icon={currency_tether}
              coin_rate={"153,738"}
            />
          </div>
        </div>
      )}

      {qrpay && (
        <div className="publicdonation__container-qrcodepayment__method">
          <div className="publicdonation__container-qrcodepayment__method-parent">
            <div className="publicdonation__container-qrcodepayment__method-heading">
              <AiOutlineArrowLeft size={20} />
              <h4>Pay</h4>
              <AiOutlineClose size={20} />
            </div>

            <p>
              To Pay, open your crypto wallet app and send the BTC amount to the
              wallet address below. John will automatically receive the payment
              after confirmation.
            </p>
            <img
              src={qr_1}
              alt=""
              onClick={() => {
                
                dispatch(paymentSuccessState())
                dispatch(selectPayementState())
                dispatch(qrpayState())
              
              }}
            />

            <div className="publicdonation__container-qrcodepayment__method-input">
              <p>AMOUNT</p>

              <div className="publicdonation__container-qrcodepayment__method-input_data">
                <p>
                  {" "}
                  0.00067 <b>BTC</b> (10,000 NGN){" "}
                </p>
                <AiOutlineCopy />
              </div>
            </div>

            <div className="publicdonation__container-qrcodepayment__method-input">
              <p>WALLET ADDRESS</p>

              <div className="publicdonation__container-qrcodepayment__method-input_data">
                <p>3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5 </p>
                <AiOutlineCopy />
              </div>
            </div>
            <div className="publicdonation__container-qrcodepayment__method-amountrefresh-text">
              <p>Amount will refresh in </p> <p>1:26</p>
            </div>
            <div className="publicdonation__container-qrcodepayment__method-amountrefresh">
              <BiLoaderAlt color="green" />

              <p>30:00</p>
              <p>Awaiting Payment...</p>
            </div>
          </div>
        </div>
      )}

      {console.log(paymentSuccessToggle)}

      {paymentSuccessToggle && (
        <div className="publicdonation__container-paymentsuccess">
          <div className="publicdonation__container-paymentsuccess-parent">

          
          <PaymentSuccess status={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PublicDonation;
