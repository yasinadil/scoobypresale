import React from "react";
import "../scss/join.scss";
import img1 from "../assests/capture.jpeg";
const Join = () => {
  return (
    <>
      <section id="join">
        <div className="container">
          <div className="heading">
            <h1>OME JOIN $SCOOB OUR ARMY!</h1>
          </div>
          <div className="content">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
