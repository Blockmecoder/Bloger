"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import mob from "../../../public/login/mob.png";
import desk from "../../../public/login/desk.png";
import Image from "next/image";
import Link from "next/link";
const Login = () => {
  const [data, setData] = useState({ 
    email: "",
    password: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }; 
  // useEffect(() => {
  //   const submitButton = document.querySelector(".submitButton");
  //   if (submitButton) {
  //     submitButton.style.opacity = data.checkbox ? 1 : 0.6;
  //   }
  // }, [data]);
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit}>
        <h3>Welcome Back to BLOGER</h3>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          required="true"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          required="true"
        />

        <Link href="/" className={styles.submitButton}>
          LOGIN
        </Link>
        <p>OR</p>
        <Link href="/" className={styles.Google}>
          Sign in with Google
        </Link>
      </form>
      <Image
        className={styles.mob}
        src={mob}
        style={{ height: "auto" }}
        width={3000}
        placeholder="blur"
      />
      <Image
        className={styles.desk}
        src={desk}
        style={{ height: "auto" }}
        width={1000}
        placeholder="blur"
      />
    </div>
  );
};

export default Login;
