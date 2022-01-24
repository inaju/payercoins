import React from 'react';
import './CampaignComponent.css';
import {AiOutlineCloudUpload} from 'react-icons/ai'
import {
 Link,
  
} from "react-router-dom";


const CampaignComponent = ({setCloseDonationSuccess,setCreateCampaign}) => {
  return <div className="campaigncomponent__container">

      <h3>Create Campaign</h3>

      <div className="cammpaigncomponent__container-campaigninput">
        
        <p>Campaign Title </p>
      <input type="text"  />
      </div>


      <div className="cammpaigncomponent__container-campaigninput tell_your_story">
      
      <p> Tell Your Story...... </p>
      <input type="text" placeholder='' />
      </div>

      <div className="cammpaigncomponent__container-uploadimage">
        <AiOutlineCloudUpload color="grey" size={30} />
      <p>Upload Image</p>

      </div>

      <p className="paragragh-border">Select Category</p>
      <p className="paragragh-border">Select Currency</p>
  
      
      <div className="cammpaigncomponent__container-campaigninput">
      
          <p>Amount (USD)</p>
          <input type="text" placeholder='' />

      </div>

      
      <Link to="/donationsuccess">

      <button  className="campaigncomponent__container-button" onClick={()=>
        setCreateCampaign(false)
        
        }>
          <p>Create Campaign</p>
      </button>
      </Link>
     

  </div>;
};

export default CampaignComponent;
