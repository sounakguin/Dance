import React from "react";

export default function Ourteam() {
  return (
    <div className="Ourteam">
      <div className="OurteamContent">
        <p className="OurteamTitle">Our Team</p>
        <p className="OurteamDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium optio cupiditate aliquam, vitae molestias, hic nemo
          voluptates laboriosam nihil corrupti eius quam velit adipisci
          molestiae repellendus, architecto sequi porro?
        </p>
        <div className="OurteamStats">
          <div className="FounderStat">
            <p className="StatNumber">1K</p>
            <p>Member</p>
          </div>
          <div className="FounderStat">
            <p className="StatNumber">200</p>
            <p>Class</p>
          </div>
          <div className="FounderStat">
            <p className="StatNumber">5</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
