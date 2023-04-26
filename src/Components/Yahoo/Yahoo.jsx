import React from "react";
import classes from "./Yahoo.module.css";
import cyber from "../../assets/cyber.avif";
import Fade from "react-reveal/Fade";

const Yahoo = () => {
  return (
    <section className={classes.yahoo}>
      <Fade left>
        <div className={classes.left}>
          <img src={cyber} alt="cyber security" />
        </div>
      </Fade>
      <Fade right>
        <div className={classes.right}>
          <h2>
            Protect yourself and your customers with advanced fraud detection
          </h2>
          <p>
            ZPay’s combination of automated and manual fraud systems protect you
            from fraudulent transactions and associated chargeback claims.
          </p>
          <h2>Detailed reporting for accounting, reconciliation, and audits</h2>
          <p>
            Understand your customers’ purchase patterns and do easy
            reconciliations with a robust data Dashboard and easy exports.
          </p>
        </div>
      </Fade>
    </section>
  );
};

export default Yahoo;
