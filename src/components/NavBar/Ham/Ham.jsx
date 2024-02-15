"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import hamburger from "../../../../public/home/hamburger.png";
import cross from "../../../../public/home/cross.png";
import arrow2 from "../../../../public/home/arrow.png";
import styles from "../page.module.css";
import { useState } from "react";
import Link from "next/link";
const Ham = () => {
  const [on, setOn] = useState(false);
  const [onNav, setOnNav] = useState([false,false,false]);
  const handleClick = () => {
    setOn(!on);
  };
    const handleNav = (e) => {
        const { id } = e.target;
        console.log(id);
        setOnNav((prevData) => {
        const newData = [...prevData];
        newData[id] = !newData[id];
        return newData
    });
    console.log(onNav);
  }; 
  return (
    <div className={styles.HamDiv}>
      {on ? (
        <div className={styles.HamData}>
          <Image
            onClick={handleClick}
            src={cross}
            className={styles.Ham}
            style={{ height: "auto" }}
            width={3000}
          />
          <div className={styles.choose}>
            <div className={styles.dataDiv}>
              <label id="0" onClick={handleNav}>
                Product
                <Image
                  className={!onNav[0] ? styles.arrow2 : styles.arrow2active}
                  src={arrow2}
                  //   style={{ height: "auto" }}
                  width={300}
                />
              </label>
              {onNav[0] && (
                <>
                <ul>
                  <li>
                    <Link href="/">Overview</Link>
                  </li>
                  <li>
                    <Link href="/">Pricing</Link>
                  </li>
                  <li>
                    <Link href="/">Marketplace</Link>
                  </li>
                  <li>
                    <Link href="/">Features</Link>
                  </li>
                  <li>
                    <Link href="/">Integrations</Link>
                  </li>
                </ul><hr className={styles.hr}></hr>
                       </>  
              )}
            </div>
            <div className={styles.dataDiv}>
              <label id="1" onClick={handleNav}>
                Company
                <Image
                  className={!onNav[1] ? styles.arrow2 : styles.arrow2active}
                  src={arrow2}
                  //   style={{ height: "auto" }}
                  width={300}
                />
              </label>
              {onNav[1] && (
                <>
                <ul>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Team</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">Careers</Link>
                  </li>
                  </ul>
                  <hr className={styles.hr}></hr>
                       </>       
              )}
            </div>
            <div className={styles.dataDiv}>
              <label id="2" onClick={handleNav}>
                Product
                <Image
                  className={!onNav[2] ? styles.arrow2 : styles.arrow2active}
                  src={arrow2}
                  //   style={{ height: "auto" }}
                  width={300}
                />
              </label>
              {onNav[2] && (
                <>
                <ul>
                  <li>
                    <Link href="/">Contact</Link>
                  </li>
                  <li>
                    <Link href="/">Newsletter</Link>
                  </li>
                  <li>
                    <Link href="/">LinkedIn</Link>
                  </li>
                </ul>
                <hr className={styles.hr}></hr>
                       </>  
              )}
            </div>
            <div className={styles.signinm}>
              <Link href="/login" className={styles.login}>
                Login
              </Link>
              <Link href="/signup" className={styles.signup}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Image
          onClick={handleClick}
          src={hamburger}
          className={styles.Ham}
          style={{ height: "auto" }}
          width={3000}
        />
      )}
    </div>
  );
};

export default Ham;
