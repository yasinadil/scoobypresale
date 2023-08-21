import React from "react";
import "../scss/moreinfo.scss";
const MoreInfo = () => {
  return (
    <>
      <section id="section-2">
        <div className="container">
          <div className="about-content">
            <div className="about-top">
              <div className="first">
                <h1> RISING OF THE LAYER ONE WOLVES HAS BEGUN</h1>
              </div>
              <div className="second">
                <h2>I STAND WITH THE HUNGRY WOLVES</h2>{" "}
              </div>
            </div>
            <div className="about-bottom">
              <a href={"https://discord.gg/yMTXSGBmVE"} target={"_black"}>
                {/* <button>More Info</button> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
