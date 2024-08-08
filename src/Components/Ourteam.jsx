import React from "react";

export default function Ourteam() {
  return (
    <div>
      <div className="Ourteam1">
        <p className="ourteam-title">Our Team</p>
        <p className="ourteam-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium optio cupiditate aliquam, vitae molestias, hic nemo
          voluptates laboriosam nihil corrupti eius quam velit adipisci
          molestiae repellendus, architecto sequi porro?
        </p>
        <div className="Ourteam_inside">
          <div className="Founders">
            <div className="FounderTeam">
              <img src="/Co-Founder_1.png" alt="Co-Founder 1" />
              <p className="founder-name">Sounak Guin</p>
              <p className="founder-role">Co-founder</p>
            </div>
            <div className="FounderTeam">
              <img src="/Co-Founder_2.png" alt="Co-Founder 2" />
              <p className="founder-name">Sounak Guin</p>
              <p className="founder-role">Co-founder</p>
            </div>
            <div className="FounderTeam">
              <img src="/Co-Founder_3.png" alt="Co-Founder 3" />
              <p className="founder-name">Sounak Guin</p>
              <p className="founder-role">Co-founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
