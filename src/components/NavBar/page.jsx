import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css";
import one from "../../../public/1.jpg";

const NavBar = () => {
  return (
    <div className={styles.Nav}>
      <Image
        className={styles.Logo}
        src={one}
        width={2}
        style={{ height: "auto" }}
        placeholder="blur"
      />
      <div className={styles.data}>
        <h4>Home</h4>
        <h4>Register</h4>
              <h4>Login</h4>
              <input placeholder='SEARCH'/>
      </div>
    </div>
  );
}

export default NavBar