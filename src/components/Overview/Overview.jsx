"use client";
import React, { useEffect, useState } from "react";
import styles from "./Overview.module.css";
import image1 from '../../../public/Overview/bg.jpg';
import Image from "next/image";
const Overview = () => {
  const Category = ["Learning", "Cooking", "Fashion", "Technology", "Sports"];
  const [create, setCreate] = useState(false);
  const [data, setData] = useState({
    image: "",
    category: "",
    date: "",
    title: "",
    content: "",
    Image: "",
    author: "",
  });
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setToday(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  const [option, setOption] = useState("Learning");

  const completted = (e) => {
    const val = e.target.value;
    console.log(val);
    setOption(val);
    console.log(option);
  };
  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const uploadedImage = e.target.result;
        console.log("Uploaded image:", uploadedImage);
      };

      reader.readAsDataURL(file);
    }
  }
  const submitEvent = () => {
    e;
  };
  useEffect(() => {});
  return (
    <div className={styles.main}>
      {create ? (
        <div className={styles.createDiv}>
          <input
            className={styles.image}
            type="file"
            onChange={handleImageUpload}
          />
          <select value={option} onChange={completted}>
            {Category.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input className={styles.title} type="text" placeholder="Title" />

          <textarea
            id="myTextArea"
            className={styles.blog}
            placeholder="Write Your Blog"
            rows="4"
            cols="50"
          ></textarea>

          <button onClick={submitEvent}>PUBLISH</button>
        </div>
      ) : (
        <div className={styles.weDo}>
          <h2>Publish your passions, your way</h2>
          <h4>Create a unique and beautiful blog easily.</h4>
          <button
            onClick={() => {
              setCreate(!create);
            }}
          >
            CREATE YOUR BLOG
          </button>
          <Image
            className={styles.blogbg}
            src={image1}
            width={1000}
            style={{ height: "auto" }}
            placeholder="blur"
          />
        </div>
      )}
    </div>
  );
};

export default Overview;
