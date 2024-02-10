"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import bgd from "../../../public/faq/bg-d.svg";
import bgm from "../../../public/faq/bg-m.svg";
import minus from "../../../public/faq/minus.svg";
import plus from "../../../public/faq/plus.svg";
import star from "../../../public/faq/star.svg";
import Image from "next/image";
const faq = () => {
    const [close, setClose] = useState(true);
    const handleClose = () => {
        setClose(!close);
    }
  const data = [
    {
      id: 1,
      que: "What is Frontend Mentor, and how will it help me?",
      ans: " Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building. ",
    },
    {
      id: 2,
      que: " Is Frontend Mentor free?",
      ans: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of  projects suitable for all skill levels.",
    },
    {
      id: 3,
      que: "Can I use Frontend Mentor projects in my portfolio?",
      ans: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! ",
    },
    {
      id: 4,
      que: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      ans: "The best place to get help is inside Frontend Mentor's Discord community,There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];
    const displayData = {
      
  };
  return (
    <div className={styles.main}>
      <Image
        src={bgd}
        width={500}
        style={{ height: "auto" }}
        className={styles.bgd}
      />
      <Image
        src={bgm}
        width={100}
        style={{ height: "auto" }}
        className={styles.bgm}
      />
      <div className={styles.dataDiv}>
        <div className={styles.mainHeading}>
          <Image
            src={star}
            width={25}
            style={{ height: "auto" }}
            className={styles.star}
          />
          <h1>FAQs</h1>
        </div>

        {data.map((item, index) => (
          <div className={styles.qa} key={index}> 
              <button onClick={handleClose}>
                {item.que}
                <span>
                  {close ? (
                    <Image
                      src={plus}
                      width={20}
                      style={{ height: "auto" }}
                      className={styles.plus}
                    />
                  ) : (
                    <Image
                      src={minus}
                      width={20}
                      style={{ height: "auto" }}
                      className={styles.minus}
                    />
                  )}
                </span>
              </button> 
            <p>{item.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;
