import React from "react";
import styles from "./inputGrp.module.css";

const TextAreaGrp = ({ title }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.title}>{title}</div>
      <textarea className={styles.input} type="text" rows={4} />
    </div>
  );
};

export default TextAreaGrp;
