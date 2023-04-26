import React from "react";
import classes from "./Backed.module.css";
import { FaStripe, FaYCombinator } from "react-icons/fa";
import { SiVisa } from "react-icons/si";

const Backed = () => {
  return (
    <section className={classes.backed}>
      <div className={classes.top}>
        <h1>Backed by strong global partners</h1>
        <p>
          ZPay is backed by notable investors as well as some of the best
          payments companies on the planet.
        </p>
      </div>
      <div className={classes.divs}>
        <div className={classes.div}>
          <FaStripe className={classes.icon} />
          <p className={classes.text}>
            ZPay is highly technical and fanatically customer oriented.
            We’re excited to back such people in one of the world’s
            fastest-growing regions.
          </p>
          <p className={classes.name}>Patrick Collison</p>
        </div>
        <div className={classes.div}>
          <SiVisa className={classes.icon} />
          <p className={classes.text}>
            Our investment in ZPay aligns with the kind of investments we
            look for – those that will help extend our reach into the global
            commerce ecosystem
          </p>
          <p className={classes.name}>Otto Williams</p>
        </div>
        <div className={classes.div}>
          <FaYCombinator className={classes.icon} />
          <p className={classes.text}>
            As YC’s first Nigerian startup ZPay leads the charge of great
            companies coming out of Africa, powering modern payments for an
            entire continent.
          </p>
          <p className={classes.name}>Michael Seibel</p>
        </div>
      </div>
    </section>
  );
};

export default Backed;
