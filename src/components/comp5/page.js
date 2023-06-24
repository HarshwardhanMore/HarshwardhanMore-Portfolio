import React from "react";
import styles from "./page.module.css";
import Outro from "./outro";
import Form from "./form";

const Comp5 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.heading}>
        <div className={styles.tagline}>Contact</div>
        <div className={styles.headline}>Connect With Me</div>
      </div>
      <div className={styles.content}>
        <div className={styles.part1}>
          <Outro />
        </div>
        <div className={styles.part2}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Comp5;
