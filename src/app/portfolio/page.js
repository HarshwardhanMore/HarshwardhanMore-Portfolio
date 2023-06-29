import React from "react";
import styles from "./page.module.css";
import Card from "../../components/comp4/card";
import Comp4 from "@/components/comp4/page";
import skillData from "../../components/data";
import Button2 from "@/components/buttons/button2";

const Portfolio = () => {
  return (
    <div className={styles.mainParent}>
      <Button2 link="/" title="BACK" />
      {/* <Comp4 skillData={skillData} /> */}

      <div className={styles.parent}>
        <div className={styles.heading}>
          <div className={styles.tagline}>
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </div>
          <div className={styles.headline}>My Portfolio</div>
        </div>
        <div className={styles.content}>
          {skillData.map((i) => {
            return <Card data={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
