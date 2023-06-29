import React from "react";
import styles from "./bar.module.css";

const Bar = ({ title, perc }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.title}>{title}</div>
      <div className={styles.bar}>
        <div className={styles.fill} style={{ width: `${perc}%` }}></div>
      </div>
    </div>
  );
};

export default Bar;
