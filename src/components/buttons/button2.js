import React from "react";
import styles from "./button2.module.css";
import Link from "next/link";

const Button2 = ({ link, title }) => {
  return (
    <div className={styles.parent}>
      <Link className={styles.main} href={link}>
        {title}
      </Link>
    </div>
  );
};

export default Button2;
