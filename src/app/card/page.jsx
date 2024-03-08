"use client"
import Card from "@/components/Card/Card";
import React, { useState } from "react"; 
import styles from "./page.module.css";
import bgImg1 from "../../../public/Card/bgImg1.png";
import bgImg2 from "../../../public/Card/bgImg2.jpg";
import bgImg3 from "../../../public/Card/bgImg3.png";
import bgImg4 from "../../../public/Card/bgImg4.png";
import bgImg5 from "../../../public/Card/bgImg5.png";
import bgImg6 from "../../../public/Card/bgImg6.png";
import prof1 from "../../../public/Card/prof1.webp";
import prof2 from "../../../public/Card/prof2.webp";
import prof3 from "../../../public/Card/prof3.webp";
import prof4 from "../../../public/Card/prof4.webp";
import prof5 from "../../../public/Card/prof5.webp";
import prof6 from "../../../public/Card/prof6.webp";

const page = () => {
  const Category = ['Learning','Cooking','Fashion','Technology','Sports']
  const CardData = [
    {
      id: "1",
      category: "Learning",
      image1: bgImg1,
      image2: prof1,
      date: "21 Dec 2023",
      title: "HTML & CSS foundations",
      content:
        "These languages are the backbone of every website, defining structure, content, and presentation.",
      author: "Greg Hooper",
     },
    {
      id: "2",
      category: "Learning",
      image1: bgImg2,
      image2: prof2,
      date: "15 Jan 2024",
      title: "JavaScript Fundamentals",
      content:
        "JavaScript is a programming language used to create interactive effects within web browsers.",
      author: "Emily Smith",
    },
    {
      id: "3",
      category: "Learning",
      image1: bgImg3,
      image2: prof3,
      date: "10 Feb 2024",
      title: "Responsive Web Design",
      content:
        "Responsive web design ensures that web pages render well on a variety of devices and window or screen sizes.",
      author: "David Johnson",
    },
    {
      id: "4",
      category: "Learning",
      image1: bgImg4,
      image2: prof4,
      date: "25 Mar 2024",
      title: "Introduction to Bootstrap",
      content:
        "Bootstrap is a popular front-end framework for developing responsive and mobile-first websites.",
      author: "Sophia Adams",
    },
    {
      id: "5",
      category: "Learning",
      image1: bgImg5,
      image2: prof5,
      date: "5 Apr 2024",
      title: "Advanced CSS Techniques",
      content:
        "Learn advanced CSS techniques such as animations, transitions, and flexbox layouts.",
      author: "Michael Brown",
    },
    {
      id: "6",
      category: "Learning",
      image1: bgImg6,
      image2: prof6,
      date: "20 May 2024",
      title: "Introduction to React",
      content:
        "React is a JavaScript library for building user interfaces, often used for single-page applications.",
      author: "Sarah Clark",
    },
  ];

  const [option, setOption ] = useState("Learning");
  const completted = (e) => {
    const val = e.target.value;
    console.log(val);
    setOption(val);
     console.log(option);
  }

  return (
    <div className={styles.mainData}>
      <select value={option} onChange={completted}>
        {Category.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className={styles.main}>
        {CardData.map((item, index) => (
          (item.category===option&&<Card key={index} props={item} />)
        ))}
      </div>
    </div>
  );
};

export default page;
