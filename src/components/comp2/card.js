import React from "react";
import styles from "./card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.parent} data-aos="fade-up">
      <div className={styles.content}>
        <img className={styles.firstImg} src={data.src1} alt="" />
        <img className={styles.secondImg} src={data.src2} alt="" />
        <div className={styles.heading}>{data.heading}</div>
        <div className={styles.desc}>{data.desc}</div>
        <div className={styles.explore}>
          <img src="/icons/arrow.png" alt="Explore" />
        </div>
      </div>
    </div>
  );
};

export default Card;
