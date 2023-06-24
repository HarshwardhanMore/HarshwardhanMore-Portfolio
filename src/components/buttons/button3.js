import React from "react";
import styles from "./button3.module.css";
import Link from "next/link";

const Button3 = ({ link, title }) => {
  return (
    <Link className={styles.main} href={link}>
      {title}
    </Link>
  );
};

export default Button3;
