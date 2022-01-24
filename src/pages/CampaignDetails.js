import React from 'react';
import AmountRaisedCard from '../components/AmountRaisedCard';
import AmountRaisedProgress from '../components/AmountRaisedProgress';
import currency_btc from '../assets/currency_btc.png'
import "./CampaignDetails.css"

const CampaignDetails = () => {
  return <div className="campaigndetails__container align__main">

      <div className="campaigndetails__container-header">
         <span> - Campaign Name ... </span> 
      </div>

      <AmountRaisedProgress raised={300000} target={500000}/>

      <h4>
          Overview
      </h4>
      <div className="campaigndetails__container-cypto">
        <AmountRaisedCard icon={currency_btc} shortform_coin={"BTC"} coin={"bitcoin"} btc_amount={3.2} usd_amount={400}/>
        <AmountRaisedCard icon={currency_btc} shortform_coin={"BTC"} coin={"bitcoin"} btc_amount={3.2} usd_amount={400}/>
        <AmountRaisedCard icon={currency_btc} shortform_coin={"BTC"} coin={"bitcoin"} btc_amount={3.2} usd_amount={400}/>

      </div>

  </div>;
};

export default CampaignDetails;
