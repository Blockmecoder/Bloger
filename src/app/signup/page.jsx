"use client";
import React, {useState} from "react";
import styles from "./page.module.css"; 
import Image from "next/image";
import Link from "next/link";
const SignUp = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
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
    <div className={styles.Login}>
      <div className={styles.dataDiv}>
        <h2>Learn to write by watching others</h2>
        <p>
          See how experienced professionals solve problems in real-time.
          Watching scripted tutorials is great, but understanding how
          professionals think is invaluable.
        </p>
      </div>
      <div className={styles.formDiv}>
        <Link href="/trial" className={styles.button1}>
          <b>Try it free 7 days</b> then $20/mo. thereafter
        </Link>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            value={data.fname}
            onChange={handleChange}
            placeholder="First Name"
            required="true"
          />
          <input
            type="text"
            name="lname"
            value={data.lname}
            onChange={handleChange}
            placeholder="Last Name"
            required="true"
          />
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
            Claim your free trial
          </Link>
          <p>
            By clicking the button, you are agreeing to our{" "}
            <Link href="/tnc" className={styles.term}>
              Terms and Services
            </Link>
          </p>
        </form>
      </div>
      {/* <Image
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
      /> */}
    </div>
  );
};

export default SignUp;
