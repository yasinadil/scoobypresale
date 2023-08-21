import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../scss/roadmap.scss";
import { roadmap } from "../assests/data";
// import { Parallax, Background } from "react-parallax";
// import bg1 from "../assests/images/snow_pattern (1).png";
// import bg2 from "../assests/images/snow_pattern2 (1).png";
// import bg6 from "../assests/images/storybg.png";

// import { Parallax } from "react-parallax";
// import { ParallaxBanner } from "react-scroll-parallax";
// import snow from "../assests/images/snow_pattern2 (1).png";
const Roadmap = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    // how to check page distance from top
  }, []);

  return (
    <>
      <section id="roadmap" className="roadmap">
        <div className="bac"></div>
        <div className="flower"></div>
        <div className="heading">
          <h1> Roadmap</h1>
        </div>
        <div className="container">
          <div className="roadmap__grid">
            {roadmap.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`item ${i % 2 == 0 ? "left" : "right"}`}
                >
                  <h2>Phase {item.id}</h2>
                  <ul>
                    {item.points.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
