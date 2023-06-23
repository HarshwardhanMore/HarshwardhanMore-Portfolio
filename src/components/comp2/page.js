import React from "react";
import Card from "./card";

import styles from "./page.module.css";

const Comp2 = () => {
  const skillData = [
    {
      src1: "./icons/problem-solving-hover.png",
      src2: "./icons/problem-solving.png",
      heading: "Problem Solving",
      desc: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      src1: "/icons/front-end-hover.png",
      src2: "/icons/front-end.png",
      heading: "Front-End Design",
      desc: "lorem lorem lorem lorem lorem lorem lorem",
    },
    {
      src1: "/icons/full-stack-hover.png",
      src2: "/icons/full-stack.png",
      heading: "Full-Stack Development",
      desc: "lorem lorem lorem lorem lorem lorem lorem",
    },
  ];

  return (
    <div className={styles.parent}>
      {/* <div className="heading"></div> */}
      <div className={styles.content}>
        {skillData.map((i) => {
          return <Card data={i} />;
        })}
      </div>
    </div>
  );
};

export default Comp2;
