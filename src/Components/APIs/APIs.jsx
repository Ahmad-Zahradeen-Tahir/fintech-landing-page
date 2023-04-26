import React from "react";
import classes from "./APIs.module.css";
import Fade from 'react-reveal/Fade';
import {AiFillCheckCircle} from 'react-icons/ai'

const APIs = () => {
  return (
    <section className={classes.Apis}>
      <div className={classes.left}>
        <h2>Build custom payments experiences with well-documented APIs</h2>
        <p>
          Developers love our thorough, well-documented APIs that let you to
          build everything from simple weekend projects, to complex financial
          products serving hundreds of thousands of customers. If you can
          imagine it, you can build it with ZPay.
        </p>

        <ul>
            <li><AiFillCheckCircle className={classes.check}/>Collect one-time and recurring payments from your app or website</li>
            <li><AiFillCheckCircle className={classes.check}/>Make instant transfers</li>
            <li><AiFillCheckCircle className={classes.check}/>Retrieve all your transaction and customer data</li>
            <li><AiFillCheckCircle className={classes.check}/>Verify the identity of customers</li>
        </ul>
      </div>
      <Fade bottom>
      <div className={classes.right}></div>
      </Fade>
    </section>
  );
};

export default APIs;
