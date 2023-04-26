import React from "react";
import classes from "./Payments.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { Fade } from "react-reveal";

const Payments = () => {
  return (
    <section className={classes.payments}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Simple, easy payments</h1>
          <p>Building a business is hard. Getting paid shouldn’t be.</p>
        </div>
        <Fade left><div className={classes.pos}></div></Fade>
      </div>
      <div className={classes.right}>
        <h2 className={classes["top-right"]}>
          Delight customers with a seamless payments experience
        </h2>
        <p>
          Give your customers the gift of modern, frictionless, painless
          payments. Integrate ZPay once and let your customers pay you however
          they want.
        </p>
        <ul>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Card
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Bank Account
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Bank Transfer
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            USSD
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Apple Pay
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Visa QR
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            Mobile Money
          </li>
          <li>
            <AiFillCheckCircle className={classes.check} />
            POS
          </li>
        </ul>
        <h2>Enjoy phenomenal transaction success rates</h2>
        <p>
          We automatically route payments through the most optimal channels,
          ensuring the highest transaction success rates in the market.
        </p>
      </div>
    </section>
  );
};

export default Payments;
