import React from 'react';

export default function Statistics() {
  return (
    <div className="Statistics">
      <div className="Statistic">
        <p className="stat-title">Our Team</p>
        <p className="stat-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laudantium optio cupiditate aliquam, vitae molestias, hic nemo
        </p>
        <p className="stat-description">
          voluptates laboriosam nihil corrupti eius quam velit adipisci
          molestiae repellendus, architecto sequi porro?
        </p>
      </div>
      <div className="Statistic_inside">
        <div className="numbers">
          <div className="number-item">
            <p className="Numbertext">1K</p>
            <p>Member</p>
          </div>
          <div className="number-item">
            <p className="Numbertext">200</p>
            <p>Class</p>
          </div>
          <div className="number-item">
            <p className="Numbertext">5</p>
            <p>Country</p>
          </div>
        </div>
      </div>
    </div>
  );
}
