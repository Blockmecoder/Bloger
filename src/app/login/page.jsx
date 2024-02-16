"use client"
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

const Login = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    checkbox:false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleCheck = () => {
    setData((...prevData) => ({ 
      ...prevData,
      checkbox : !data.checkbox }));
  };
  // useEffect(() => {
  //   const submitButton = document.querySelector(".submitButton");
  //   if (submitButton) {
  //     submitButton.style.opacity = data.checkbox ? 1 : 0.6;
  //   }
  // }, [data]);
console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={styles.main}>
    <div className={styles.Login}>
      <div className={styles.dataDiv}>
        <h2>Learn to code by watching others</h2>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className={styles.formDiv}>
        <button>
          Try it free 7 days then $20/mo. thereafter Claim your free trial
        </button>

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
          <span>
            <input
              type="checkbox"
              name="checkbox"
              value={data.checkbox}
              onChange={handleCheck}
              required="true"
            />
            <p>
              By clicking the button, you are agreeing to our Terms and Services
            </p>
          </span>

          <button className={styles.submitButton} type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
