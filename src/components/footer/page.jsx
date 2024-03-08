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
          width={3000}
          // style={{ height: "auto" }}
        />
        <div className={styles.slideDiv}>
          <label>Product</label>
          <ul>
            <li>
              <Link href="/overview">Overview</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/card">Marketplace</Link>
            </li>
            <li>
              <Link href="/features">Features</Link>
            </li>
            <li>
              <Link href="/rating">Rating</Link>
            </li>
          </ul>
        </div>

        <div className={styles.slideDiv}>
          <label>Company</label>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
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
