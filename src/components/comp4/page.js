import React from "react";
import Card from "./card";
// import skillData from "../data";

import styles from "./page.module.css";

const Comp4 = ({ skillData }) => {
  // const skillData = [
  //   {
  //     src: "eccomerce2.jpg",
  //     heading: "Tribe Threads",
  //     desc: "A user-driven end-to-end fashion-based ecommerce marketplace.",
  //   },
  //   {
  //     src: "machine-learning-img.jpg",
  //     heading: "PredictXpert",
  //     desc: "AI tool for performing machine learning tasks without writing code.",
  //   },
  //   {
  //     src: "audiobook.jpg",
  //     heading: "ListenBook",
  //     desc: "Application for creating audio books from any uploaded file (.pdf). ",
  //   },
  // ];

  // const topThree = skillData.slice(0, 3);

  return (
    <div className={styles.parent}>
      <div className={styles.heading}>
        <div className={styles.tagline}>
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </div>
        <div className={styles.headline}>My Portfolio</div>
      </div>
      <div className={styles.content}>
        {skillData.map((i) => {
          return <Card data={i} />;
        })}
      </div>
    </div>
  );
};

export default Comp4;
