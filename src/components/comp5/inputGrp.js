import React from "react";
import styles from "./inputGrp.module.css";

const InputGrp = ({ title }) => {
  return (
    <div className={styles.parent}>
      <div className={styles.title}>{title}</div>
      <input className={styles.input} type="text" />
    </div>
  );
};

export default InputGrp;
