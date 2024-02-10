"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import star from "../../../public/rating/icon-star.svg";
import submitI from "../../../public/rating/submit.svg";
import Image from "next/image";
const Rate = () => {
  const [submit, setSubmit] = useState(false);
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    console.log(parseInt(e.target.dataset.value));
    setValue(parseInt(e.target.dataset.value));
  };
  const handleSubmit = () => {
    setSubmit(!submit);
  };
  const activeStyle = (num) => ({
    backgroundColor: value === num ? "#959eac" : "#252d37"
   
  });
  return (
    <div className={styles.main0}>
      {submit ? (
        <div className={styles.thankYou}>
          <Image
            src={submitI}
            className={styles.submit}
            style={{ height: "auto" }}
            width={25}
          />
          <h2>You selected {value} out of 5</h2>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className={styles.main}>
          <Image
            src={star}
            className={styles.star}
            style={{ height: "auto" }}
            width={25}
          />
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className={styles.rate}>
            <h3 onClick={handleChange} style={activeStyle(1)} data-value={1}>
              1
            </h3>
            <h3 onClick={handleChange} style={activeStyle(2)} data-value={2}>
              2
            </h3>
            <h3 onClick={handleChange} style={activeStyle(3)} data-value={3}>
              3
            </h3>
            <h3 onClick={handleChange} style={activeStyle(4)} data-value={4}>
              4
            </h3>
            <h3 onClick={handleChange} style={activeStyle(5)} data-value={5}>
              5
            </h3>
          </div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      )}
    </div>
  );
};

export default Rate;
