import React from "react";
import rh from "../assests/Road-map.png";
import "../scss/road.scss";
const RoadMapOne = () => {
  return (
    <>
      <section id="roadmap">
        <div className="container">
          <div className="heading">
            <img src={rh} alt="" />
          </div>
          <div className="content">
            <div className="box">
              <ul className="road-list">
                <h2>PHASE 1</h2>
                <li>Create official social media accounts</li>
                <li>Launch a community-driven website</li>
                <li>Build a community around the project</li>
                <li>Develop the smart contract for $SCOOB</li>
                <li>Test the smart contract</li>
              </ul>
              <div className="none"></div>
            </div>
            <div
              className="box"
              style={{ gridTemplateColumns: "1fr", marginLeft: "400px" }}
            >
              <div className="none"></div>

              <ul className="road-list">
                <h2>PHASE 2</h2>
                <li>Whitepaper V1</li>
                <li>500 Holders</li>
                <li>Community competitions and giveaways</li>
                <li>Partner with influencers</li>
                <li>Dextools/Etherscan Update</li>
              </ul>
            </div>
            <div className="box">
              <ul className="road-list">
                <h2>PHASE 3</h2>
                <li>$SCOOB Utility</li>
                <li>1000-3000 holders</li>
                <li>Community competitions and giveaways</li>
                <li>Listing on CMC & CG</li>
                <li>CEX Listing</li>
              </ul>
              <div className="none"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMapOne;
