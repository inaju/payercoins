import React, {useState} from 'react';
import './Donations.css'
import campaign_image from '../assets/Frame.png'
import CampaignComponent from '../components/CampaignComponent';
import {GrClose} from 'react-icons/gr'
import DonationSuccess from '../components/DonationSuccess';
import {
  
  Routes,
  Route, 
  Link,
} from "react-router-dom";
import DonationsDetails from '../components/DonationsDetails';
import CampaignDetails from './CampaignDetails';


const donationsDetailsStore=[
  {'Education Fund' : [{'amount':"500,000.00"},
                      {"date":"10 Oct. 2021"}]
      },
    ]


const Donations = () => {

  const [createCampaign,setCreateCampaign]=useState(false)
  const [closeDonationSuccess,setCloseDonationSuccess]=useState(false)
  const [emptyDonation,setEmptyDonation]=useState(false)



  const donationSuccess=()=>{
    return <div className="donations__container-donationsuccess__container">
              <div className="donations__container-donationsuccess__container-main">

                  {/* {
                    closeDonationSuccess && (
                      <>
                      <GrClose color="blue" size={20} onClick={()=>{setCloseDonationSuccess(!closeDonationSuccess)}}  />
                        <DonationSuccess />

                        
                      </>

                    )
                  } */}

                  <GrClose color="blue" size={20} onClick={()=>{setCloseDonationSuccess(!closeDonationSuccess)}}  />
                        <DonationSuccess />

              </div>
          </div>
    }

    const donationsContainerMain=()=>{

      return <div className={createCampaign ? "donations__container align__main transparent" : "donations__container align__main" }>
      <div className="donations__container-prompt">
        <h3>Donations Page</h3>
        <button onClick={() => setCreateCampaign(true)}>
            <p>+</p>
            <p>Create New</p>
        </button>
      </div>

      {
        emptyDonation && (
      <div className="donations__container-createcampaign">
          <img src={campaign_image} alt="" />
          <h4>
              Create Your Campaign
          </h4>
          <p>
          Raise funds easily for a cause that matters to you and get donors from all over the world to donate using major cryptocurrency.
          </p>
            </div>
        )
      }

      {
      createCampaign
      &&
      (
        <div className="donations__container-campaigncontainer show">
          <Link to="/donation">
          <GrClose color="blue" size={20} onClick={()=>setCreateCampaign(false)}/>
        </Link>
        <CampaignComponent setCreateCampaign={setCreateCampaign} setCloseDonationSuccess={setCloseDonationSuccess} />
    </div>
      )
      }


      <div className="donations__container-campaigncontainer-details">
        <div className="donations__container-campaigncontainer-details_text">
            <h4>CAMPAIGN TITLE</h4>
            <h4>AMOUNT</h4>
            <h4> DATE</h4>
        </div>

          <div className="donations__container-campaigncontainer-details_data">
            
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
          <Link style={{"text-decoration":"none"}}to="/donationdetails">
            <DonationsDetails title="Education Fund" amount="500,000.00 USD" date="Oct 10, 2021" />
          </Link>
 


          </div>
      </div>        
  </div>;
    }


  return <div>

    <Routes>
      <Route path="/donationsuccess" element={donationSuccess()}/>
      <Route path="/donation" element={donationsContainerMain()}/>
      <Route path="/donationdetails" element={<CampaignDetails />}/>
      <Route path="/:donationdetails" element={<CampaignDetails />}/>

        </Routes>
  </div>;
};

export default Donations;
