"use client";
import NavBar from "@/components/NavBar/page";
import Footer from "@/components/footer/page";
import React, { useState } from "react";
import styles from "./page.module.css";
import bgd from "../../../public/faq/bg-d.png";
import bgm from "../../../public/faq/bg-m.png";
import minus from "../../../public/faq/minus.png";
import plus from "../../../public/faq/plus.png";
import star from "../../../public/faq/star.png";
import Image from "next/image";
const faq = () => {
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
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));
  const toggleAnswer = (index) => {
    const changeIsOpen = [...isOpen];
    changeIsOpen[index] = !changeIsOpen[index];
    console.log("New state:", changeIsOpen);
    setIsOpen(changeIsOpen);
  };
  return (
    <div className={styles.main}>
      <Image
        src={bgd}
        width={3000}
        style={{ height: "auto" }}
        className={styles.bgd}
      />
      <Image
        src={bgm}
        width={1000}
        style={{ height: "auto" }}
        className={styles.bgm}
      />
      <div className={styles.dataDiv}>
        <div className={styles.mainHeading}>
          <Image
            src={star}
            width={400}
            style={{ height: "auto" }}
            className={styles.star}
          />
          <h1>FAQs</h1>
        </div>

        {data.map((item, index) => (
          <div
            className={styles.qa}
            onClick={() => toggleAnswer(index)}
            key={index}
          >
            <button>
              {item.que}
              <span>
                <Image
                  src={isOpen[index] ? minus : plus}
                  width={100}
                  style={{ height: "auto" }}
                  className={isOpen[index] ? styles.minus : styles.plus}
                />
              </span>
            </button>
            {isOpen[index] && <p>{item.ans}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default faq;
