import React from "react";
import styles from "./card.module.css";

const Card = ({ data }) => {
  return (
    <div className={styles.parent} data-aos="fade-up">
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={data.src} alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.heading}>{data.heading}</div>
          <div className={styles.desc}>{data.desc}</div>
        </div>
        <div className={styles.links}>
          <a target="_blank" href={data.githubLink}>
            <img className={styles.github} src="/icons/github.png" alt="" />
            <img
              className={styles.githubHover}
              src="/icons/github-hover.png"
              alt=""
            />
          </a>
          <a target="_blank" href={data.liveLink}>
            <img className={styles.live} src="/icons/live.png" alt="" />
            <img
              className={styles.liveHover}
              src="/icons/live-hover.png"
              alt=""
            />
          </a>
          <a target="_blank" href={data.videoLink}>
            <img className={styles.video} src="/icons/video.png" alt="" />
            <img
              className={styles.videoHover}
              src="/icons/video-hover.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
