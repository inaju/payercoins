import React from 'react';
import './DonationSuccess.css'
import {AiOutlineCopy} from 'react-icons/ai'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiFillCheckCircle} from 'react-icons/ai'


const  DonationSuccess = () => {
  return <div className="donationsucess__container">

      <AiFillCheckCircle size={40} color="#48D189" />
      <h3>
      Your donation page has been created
      </h3>
      <p>
      You can now raise funds easily for your campaign and get donors from all over the world to donate using cryptocurrency.
      </p>

      <div className="donationsuccess__container-buttons">
    

          <button id="Copy__button">
              <AiOutlineCopy size={25} color="#fff" />
              <p>Copy Link</p>
          </button>
          <button id="view__button">
                    <BsArrowUpRight size={25} color="#48D189" />
                    <p>View Link</p>
                </button>

      </div>
  </div>;
};

export default DonationSuccess;
