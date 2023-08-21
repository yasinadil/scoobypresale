import React from "react";
import {
  FaAccessibleIcon,
  FaDiscord,
  FaInstagram,
  FaPage4,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineTelegram } from "react-icons/ai";
import "../scss/footer.scss";
import { LinkRounded } from "@material-ui/icons";
import bac from "../assests/footer-bac.jpg";
import logo1 from "../assests/logo.png";
import logo2 from "../assests/logo-2.webp";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="top">
            <div className="logo">
              <a href="#">
                <img src={logo1} alt="" />
              </a>
            </div>
            <p></p>
          </div>
          <div className="bottom">
            <span>Copyright © 2023 Scooby Doo. All Rights Reserved.</span>
            <div className="icons">
              <a href=" https://twitter.com/scoobydooglobal ">
                <FaTwitter />
              </a>
              <a href=" https://t.me/ScoobyDooGlobal">
                <FaTelegramPlane />
              </a>
              <a href="  https://www.instagram.com/Scoobydooglobal/ ">
                <FaInstagram />
              </a>
              <a href="  https://www.tiktok.com/@scoobydoocoin  ">
                <FaTiktok />
              </a>
            </div>
          </div>
          <div className="center">
            <p>
              Cryptocurrency may be unregulated in your jurisdiction. The value
              of cryptocurrencies may go down as well as up. Profits may be
              subject to capital gains or other taxes applicable in your
              jurisdiction
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
