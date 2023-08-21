import React from "react";
import img1 from "../assests/Tokenomics-h.png";
import t1 from "../assests/scob1.png";
import t2 from "../assests/scob2.png";
import t3 from "../assests/scob3.png";
import "../scss/tokenomics.scss";
import img from "../assests/scoob/pngwing.com (11).png";
const Tokenomics = () => {
  return (
    <>
      <section id="tokenomics">
        <div className="container">
          <div className="start">
            <div className="heading">
              <h1>TOKENOMICS</h1>
            </div>
            <div className="content">
              <div className="box">
                <ul>
                  <div>
                    <li>
                      <p>Total Supply</p>
                      <span>1,000,000,000 $SCOOB</span>
                    </li>
                    <li>
                      <p> Presale Reserve</p> <span>60% </span>
                    </li>
                    <li>
                      <p> $SCOOBY Staking</p> <span>20% </span>
                    </li>
                    <li>
                      {" "}
                      <p> DEX Liquidity Pool</p>{" "}
                      <span>10% </span>
                    </li>
                    <li>
                      <p> CEX Liquidity Pool</p>{" "}
                      <span>10%</span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div className="end">
            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
