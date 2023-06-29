import React from "react";
import Card from "./card";
// import skillData from "../data";

import styles from "./page.module.css";

const Comp4 = ({ skillData }) => {

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
