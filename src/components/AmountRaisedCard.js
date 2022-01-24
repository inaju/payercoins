import React from 'react';
import './AmountRaisedCard.css'

const AmountRaisedCard = ({icon, coin, btc_amount, usd_amount,shortform_coin}) => {
  const coin_shortform=(coin)=>{
    console.log(coin)
    if (coin == "bitcoin"){
      return "BTC"
    }
    else {
      return "ETH"
    }
  }

  return <div className="amountraisedcard__container">
    <div className="amountraisedcard__container-icon">
      <img src={icon} alt="" />
    </div>
    <div className="amountraisedcard__container-details">
      <p className="amountraisedcard__container-details-cointext">Amount Raised in {coin}</p>
      <p className="amountraisedcard__container-details-coinamount">{btc_amount} {shortform_coin}</p>
      <p className="amountraisedcard__container-details-usdamount">{usd_amount} USD</p>
    </div>
  </div>;
};

export default AmountRaisedCard;
