import React from "react";
// import Card from "./card";
// import skillData from "../data";
import Bar from "./bar";

import styles from "./page.module.css";

const Comp6 = () => {
  const skillData1 = [
    {
      title: "C++",
      perc: "90",
    },
    {
      title: "Python",
      perc: "70",
    },
    {
      title: "JavaScript",
      perc: "70",
    },
    {
      title: "Java",
      perc: "50",
    },
  ];
  const skillData2 = [
    {
      title: "HTML5/CSS3",
      perc: "90",
    },
    {
      title: "Tailwind/Bootstrap",
      perc: "80",
    },
    {
      title: "React.Js",
      perc: "75",
    },
    {
      title: "Django",
      perc: "75",
    },
    {
      title: "Next.Js",
      perc: "50",
    },
    {
      title: "Git/GitHub",
      perc: "60",
    },
    {
      title: "SQL",
      perc: "50",
    },
    {
      title: "Adobe XD/Figma",
      perc: "60",
    },
  ];

  return (
    <div className={styles.parent}>
      <div className={styles.heading}>
        <div className={styles.tagline}>THESE ARE THE SKILLS THAT MADE ME</div>
        <div className={styles.headline}>Tech Stack</div>
      </div>
      <div className={styles.content}>
        <div className={styles.part}>
          {skillData1.map((i) => {
            return <Bar title={i.title} perc={i.perc} />;
          })}
        </div>
        <div className={styles.part}>
          {skillData2.map((i) => {
            return <Bar title={i.title} perc={i.perc} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comp6;
