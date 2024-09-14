import React from "react";
import "./Feature_section.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";
import icon5 from "../assets/Icon5.png";
import icon6 from "../assets/Icon6.png";
import icon7 from "../assets/Icon7.png";
import icon8 from "../assets/Icon8.png";
import icon9 from "../assets/Icon9.png";

export default function FeatureSection() {
  return (
    <div className="feature-section">
      <h3 className="feature-heading">Features that suit your needs</h3>
      <div className="flex-box">
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon1} alt="logo"></img>
            </div>
            <h3>Setup Employee Groups</h3>
          </div>
          <p>
            Use any parameter to setup distinct employee groups to implement
            policies
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon2} alt="logo"></img>
            </div>
            <h3>The Definitive Rule Engine</h3>
          </div>
          <p>
            Configure ANY policy - and if you can't configure it, we promise to
            work on it for free
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon3} alt="logo"></img>
            </div>
            <h3>Customized Reports</h3>
          </div>
          <p>
            Setup the reports that you want using our seamless reporting engine.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon4} alt="logo"></img>
            </div>
            <h3>Superior Employee Experience</h3>
          </div>
          <p>
            Manage all expenses and travel requests easily. Empower your
            employees with personalized reports.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon5} alt="logo"></img>
            </div>
            <h3>Easy Integrations</h3>
          </div>
          <p>
            Integrate with your upstream, HRMS or your downstream finance system
            to seamlessly deliver value through our Open APIs.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon6} alt="logo"></img>
            </div>
            <h3>Configurable Workflows</h3>
          </div>
          <p>
            Configure approvals or rejections. Escalations and reports. At will.
            Setup new groups.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon7} alt="logo"></img>
            </div>
            <h3>Scan any Bill</h3>
          </div>
          <p>
            The world's best OCR system backs up this product. All data goes in.
            99% success.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon8} alt="logo"></img>
            </div>
            <h3>AI-Based Concierge</h3>
            <div className="coming_soon">Coming soon</div>
          </div>
          <p>
            Ask the concierge to change things during your travel - and it will
            trigger relevant actions 24x7.
          </p>
        </div>
        <div className="flex-item">
          <div className="feature">
            <div className="rectangle"></div>
            <div className="icon-div">
              <img src={icon9} alt="logo"></img>
            </div>
            <h3>AI-Assisted Trip Planning</h3>
            <div className="coming_soon">Coming soon</div>
          </div>
          <p>
            Just tell us what you want to do in normal language and we will try
            and put together the best itinerary for you.
          </p>
        </div>
      </div>
    </div>
  );
}
