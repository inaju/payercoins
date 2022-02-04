import React from "react";
import "./CampaignComponent.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,toggleStateFalse, toggleStateTrue, toggleState } from "../redux/slice";



const CampaignComponent = ({ setCloseDonationSuccess, setCreateCampaign }) => {

  const count = useSelector((state) => state.counter.value);
  const toggleStateValue = useSelector((state) => state.counter.toggle);

  const toggleStateValueTrue = useSelector((state) => state.counter.toggle);

  const dispatch = useDispatch();

  return (
    <div className="campaigncomponent__container">
      <h3>Create Campaign</h3>

      <div className="cammpaigncomponent__container-campaigninput">
        {/* <p> </p> */}
        <input type="text" placeholder=" Campaign Title" />
      </div>

      <div className="cammpaigncomponent__container-campaigninput tell_your_story">
        {/* <p> </p> */}
        <input type="text" placeholder="Tell Your Story......" />
      </div>

      <div className="cammpaigncomponent__container-uploadimage">
        <AiOutlineCloudUpload color="grey" size={30} />
        <p>Upload Image</p>
      </div>

      <select
        className="paragragh-border"
        name="Select Category"
        id="Select Category"
      >
        <option value="volvo">Select Category</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <select
        className="paragragh-border"
        name="Select Currency"
        id="Select Currency"
      >
        <option value="volvo">Select Currency</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>

      <div className="cammpaigncomponent__container-campaigninput">
        {/* <p></p> */}
        <input type="text" placeholder="Amount (USD)" />
      </div>

      <button
          className="campaigncomponent__container-button"
          onClick={() =>{ setCreateCampaign(false)
            dispatch(toggleState())
          
           }}
        >
          Create Campaign
        </button>
      <Link to="/donationsuccess">
        
      </Link>
    </div>
  );
};

export default CampaignComponent;
