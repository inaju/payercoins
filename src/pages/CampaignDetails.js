import React from "react";
import AmountRaisedCard from "../components/AmountRaisedCard";
import AmountRaisedProgress from "../components/AmountRaisedProgress";
import currency_btc from "../assets/currency_btc.png";
import currency_tether from "../assets/currency_tether.png"
import currency_ethereum from "../assets/currency_ethereum.png"
import "./CampaignDetails.css";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import Donors from "../components/Donors";

const CampaignDetails = () => {
  return (
    <div className="campaigndetails__container align__main">
      <div className="campaigndetails__container-header">
        <div className="campaigndetails__container-header-text">
         
         
            <BsArrowLeft  size={20}/> <h4>Campaign Name</h4>{" "}
         
        </div>

        <div className="campaigndetails__container-header_menu_mobile">
          <BsThreeDotsVertical color="#48D189"/>
        </div>
      </div>

      <AmountRaisedProgress raised={300000} target={500000} />

      <h4>Overview</h4>
      <div className="campaigndetails__container-cypto">
        <AmountRaisedCard
          icon={currency_btc}
          shortform_coin={"BTC"}
          coin={"bitcoin"}
          btc_amount={3.2}
          usd_amount={400}
        />
        <AmountRaisedCard
          icon={currency_ethereum}
          shortform_coin={"ETH"}
          coin={"Ethereum"}
          btc_amount={3.2}
          usd_amount={400}
        />
        <AmountRaisedCard
          icon={currency_tether}
          shortform_coin={"USDT"}
          coin={"Tether"}
          btc_amount={3.2}
          usd_amount={400}
        />
      </div>

      <div className="campaigndetails__container-donors">
        <h3>Donations</h3>
        <Donors name={"James Paul"} btc_amount={"10,000.00"} date={"August 10, 2020"} />
        <Donors name={"James Paul"} btc_amount={"10,000.00"} date={"August 10, 2020"} />
        <Donors name={"James Paul"} btc_amount={"10,000.00"} date={"August 10, 2020"} />
        <Donors name={"James Paul"} btc_amount={"10,000.00"} date={"August 10, 2020"} />
        <Donors name={"James Paul"} btc_amount={"10,000.00"} date={"August 10, 2020"} />
      </div>
    </div>
  );
};

export default CampaignDetails;
