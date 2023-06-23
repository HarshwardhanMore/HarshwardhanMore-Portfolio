import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Comp1 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}></div>
      <div className={styles.content}>
        <div className={styles.name}>Harshwardhan More</div>
        <div className={styles.quote}>
          Front-End Designer | Full-Stack Developer
        </div>
      </div>
    </div>
  );
};

export default Comp1;
