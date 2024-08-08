import React from "react";

export default function ClassLevel() {
  return (
    <div className="ClassLevel">
      <div className="C_level">
        <p className="C_Name">Class Level</p>
      </div>
      <div className="C_box">
        <div className="Allboxs">
          <p>Dance</p>
          <img src="public/Class_Level_Girl.png" alt="Dance" />
          <p>$100.00</p>
          <p>Lorem ipsum dolor sit amet</p>
          <button className="join_now_button">Join Now</button>
        </div>
        <div className="Allboxs">
          <p>Basic</p>
          <img src="public/Class_Level_Girl.png" alt="Basic" />
          <p>$50.00</p>
          <p>Lorem ipsum dolor sit amet</p>
          <button className="join_now_button">Join Now</button>
        </div>
        <div className="Allboxs">
          <p>Professional</p>
          <img src="public/Class_Level_Girl.png" alt="Professional" />
          <p>$500.00</p>
          <p>Lorem ipsum dolor sit amet</p>
          <button className="join_now_button">Join Now</button>
        </div>
      </div>
    </div>
  );
}
