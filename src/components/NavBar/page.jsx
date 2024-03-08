import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"; 
import logo from "../../../public/home/logo.png";
import arrow from "../../../public/home/arrow2.png";
import Link from 'next/link';
import Ham from './Ham/Ham';

const NavBar = () => {
  return (
    <div className={styles.Nav}>
      <div className={styles.datalogo}>
        <Link href="/">
          <Image
            src={logo}
            className={styles.logo}
            style={{ height: "auto" }}
            width={200}
          />
        </Link>
        <div className={styles.data}>
          <div className={styles.slideDiv}>
            <label>
              Product
              <Image
                className={styles.arrow}
                src={arrow}
                style={{ height: "auto" }}
                width={3000}
              />
            </label>
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
            <label>
              Company
              <Image
                className={styles.arrow}
                src={arrow}
                style={{ height: "auto" }}
                width={2000}
              />
            </label>
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
            <label>
              Connect
              <Image
                className={styles.arrow}
                src={arrow}
                style={{ height: "auto" }}
                width={2000}
              />
            </label>
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
      <div className={styles.signin}>
        <Link href="/login" className={styles.login}>
          Login
        </Link>
        <Link href="/signup" className={styles.signup}>
          Sign Up
        </Link>
      </div>

      <Ham />
    </div>
  );
}

export default NavBar