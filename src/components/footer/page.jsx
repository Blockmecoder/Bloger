import React from "react";
import styles from "./page.module.css";
import logo from "../../../public/home/logo.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.data}>
        <Image
          src={logo}
          className={styles.logo}
          width={100} 
          // style={{height:'auto'}}
        />
        <div className={styles.slideDiv}>
          <label>Product</label>
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
          </ul>
        </div>

        <div className={styles.slideDiv}>
          <label>Company</label>
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
        </div>

        <div className={styles.slideDiv}>
          <label>Connect</label>
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
