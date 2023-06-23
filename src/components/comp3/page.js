import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Comp3 = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.part1}>
          {/* <Image src="/me.jpg" /> */}
          <img className={styles.img} src="/me.jpg" alt="" />
        </div>
        <div className={styles.part2}>
          <div className={styles.content}>
            <div className={styles.tagline}>VISIT MY PORTFOLIO & HIRE ME</div>
            <div className={styles.heading}>About Me</div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus hic at libero, laborum rem impedit voluptatem harum
              quos quidem? Ipsum adipisci dolorum autem hic quas odit tempora
              laudantium soluta asperiores dolore? Aliquid reiciendis nihil,
              earum quo in dolore? Suscipit reprehenderit quo dicta iusto
              adipisci nostrum doloremque sapiente pariatur recusandae earum
              voluptatibus, quasi quae quas possimus quam perferendis. Odio,
              repellat inventore.
            </div>
            <a
              href="/Harshwardhan_More_Resume.pdf"
              target="_blank"
              className={styles.btn}
            >
              DOWNLOAD MY RESUME
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp3;
