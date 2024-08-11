import React from "react";

export default function Ourteam() {
  return (
    <div className="Ourteam">
      <div className="OurteamContent">
        <p className="OurteamTitle">Our Statistics</p>
        <p className="OurteamDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium optio cupiditate aliquam, vitae molestias, hic nemo
          voluptates laboriosam nihil corrupti eius quam velit adipisci
          molestiae repellendus, architecto sequi porro?
        </p>
        <div className="OurteamStats">
          <div className="FounderStat">
            <p className="StatNumber">1K</p>
            <p className="Star_text">Member</p>
          </div>
          <div className="Divider"></div>
          <div className="FounderStat">
            <p className="StatNumber">200</p>
            <p className="Star_text">Class</p>
          </div>
          <div className="Divider"></div>
          <div className="FounderStat">
            <p className="StatNumber">5</p>
            <p className="Star_text">Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
