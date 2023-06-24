import React from "react";

import styles from "./outro.module.css";

const Outro = () => {
  return (
    <div className={styles.parent} data-aos="fade-up">
      <div className={styles.content}>
        <div className={styles.img}>
          <img src="/shakehands.jpg" alt="" />
        </div>
        <div className={styles.info}>
          <div className={styles.heading}>Harshwardan More</div>
          <div className={styles.desc}>
            Software Engineer <br /> I am available for freelance work. <br />{" "}
            <br />
            Connect with me via and call in to my account. <br />
            Phone: +91 9822608159 <br />
            Email: harshawardhanmore14@gmail.com
          </div>
        </div>

        <div className={styles.media}>
          <div className={styles.tagline}>FIND WITH ME</div>
          <div className={styles.links}>
            <a target="_blank" href="">
              <img className={styles.email} src="/icons/email.png" alt="" />
              <img
                className={styles.emailHover}
                src="/icons/email-hover.png"
                alt=""
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/harshwardhanmore/"
            >
              <img
                className={styles.linkedin}
                src="/icons/linkedin.png"
                alt=""
              />
              <img
                className={styles.linkedinHover}
                src="/icons/linkedin-hover.png"
                alt=""
              />
            </a>
            <a target="_blank" href="https://github.com/HarshwardhanMore">
              <img className={styles.github} src="/icons/github.png" alt="" />
              <img
                className={styles.githubHover}
                src="/icons/github-hover.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outro;
