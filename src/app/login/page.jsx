"use client"
import React, { useState } from "react";
import styles from "./page.module.css";

const Login = () => {
  const [data, setData] = useState({
    name: "",
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
console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className={styles.Login}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default Login;
