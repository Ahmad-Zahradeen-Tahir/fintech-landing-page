import React from "react";
import classes from "./Footer.module.css";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={classes["footer-item"]}>
        <h2>Contact</h2>
        <a className={classes.link} href="https://portfolio-rouge-phi-73.vercel.app/">ZaheerTech.com</a>
        <div className={classes.icons}>
          <div className={classes.icon}>
            <AiFillFacebook />
          </div>
          <div className={classes.icon}>
            <AiOutlineTwitter />
          </div>
          <div className={classes.icon}>
            <AiOutlineInstagram />
          </div>
          <div className={classes.icon}>
            <AiFillYoutube />
          </div>
          <div className={classes.icon}>
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <div className={classes["footer-item"]}>
        <h2>Lagos</h2>
        <p>126 Joel Ogunnaike Street,<br /> Ikeja GRA, Ikeja,<br /> Lagos, Nigeria</p>
      </div>
      <div className={classes["footer-item"]}>
        <h2>San Fransisco</h2>
        <p>
          354 Oyster Point Blvd.,<br /> South San Francisco,<br /> CA 94080<br /> United States
        </p>
      </div>
      <div className={classes["footer-item"]}>
        <h2>Cape Town</h2>
        <p>
          HOUSE_OF,<br /> Elkay House (4th Floor),<br /> 186 Loop St, Cape Town City<br /> Centre,<br />
          Cape Town, 8001,<br /> South Africa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
