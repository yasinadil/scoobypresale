import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";

import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import About from "../components/About";
import RoadMapOne from "../components/RoadMapOne";
import Tokenomics from "../components/Tokenomics";
import Join from "../components/Join";
import ElonMusk from "../components/ElonMusk";
import Disclaimer from "../components/Disclaimer";

const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      <>
        <main>
          <Navigation />
          <Banner />
          <About />
          <ElonMusk />
          <Roadmap />
          <Tokenomics />
          <Faq/>
          <Disclaimer/>
          <Footer />
        </main>
      </>
    </>
  );
};

export default Home;
