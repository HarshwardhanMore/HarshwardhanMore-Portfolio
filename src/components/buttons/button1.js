import React from "react";
import styles from "./button1.module.css";
import Link from "next/link";

const Button1 = ({ link, title }) => {
  return (
    <div className={styles.parent}>
      <Link className={styles.main} href={link}>
        {title}
      </Link>
    </div>
  );
};

export default Button1;
