import React from "react";
import heading from "../assests/about.h.png";
import img1 from "../assests/scoob/banner 4.png";
import "../scss/elonmusk.scss";
const ElonMusk = () => {
  return (
    <>
      <section id="elon">
        <div className="container">

        <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <div className="heading">
              <h1>THE ELON MUSK EFFECT</h1>
            </div>
            <div className="para">
              <p>
              Crypto’s godfather and largest personality can’t be wrong. Elon Musk has already mentioned Scooby Doo Coin in one of his tweets. Don’t believe us? Just click and see it with your own eyes!
              </p>
            </div>
            <div className="elon_btn">
                <a href="https://twitter.com/elonmusk/status/1681691639922806784?s=20  ">
                TAKE ME TO ELON’S TWEET
                </a>
            </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default ElonMusk;
