import React from "react";
import heading from "../assests/about.h.png";
import img1 from "../assests/logo.png";
import "../scss/about.scss";
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="content">
            <div className="heading">
              <h1>ABOUT $SCOOBY</h1>
            </div>
            <div className="para">
              <p>
              $SCOOBY is more than just a meme coin; it's a community-owned sensation directly inspired by Elon and his influential tweets. Time and again, Elon's tweets have transformed various coins into the superstars of the crypto realm. Now, with a nod to our favorite detective dog, we're poised for a spectacular rise. Be part of the community that takes $SCOOBY beyond the stars!
              </p>
            </div>
            <a
              className="btn"
              target="_blank"
              href="https://t.me/ScoobyDooGlobal"
            >
              Join Us!
            </a>
          </div>
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
