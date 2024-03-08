import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

const Card = ({ props }) => {
   const { category, date, title, content, author, image1, image2 } = props;
  return (
    <div className={styles.main}>
      <Image
        className={styles.cardBg}
        src={image1}
        width={300}
        style={{ height: "auto" }}
        placeholder="blur"
      />
      <h4>{category}</h4>
      <h3>Published on {date}</h3>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className={styles.profDiv}>
        <Image
          className={styles.prof}
          src={image2}
          width={100}
          style={{ height: "auto" }}
          placeholder="blur"
        />
        <div>{author}</div>
      </div>
    </div>
  );
};

export default Card;
