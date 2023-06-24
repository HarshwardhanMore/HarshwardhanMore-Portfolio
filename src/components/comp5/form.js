import React from "react";

import styles from "./form.module.css";
import InputGrp from "./inputGrp";
import TextAreaGrp from "./textAreaGrp";
import Button3 from "../buttons/button3";

const Form = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.row}>
          <InputGrp title="Name" />
          <InputGrp title="Phone Number" />
        </div>
        <InputGrp title="Email" />
        <InputGrp title="Subject" />
        <TextAreaGrp title="Message" />
        <Button3 link="" title="Send" />
      </div>
    </div>
  );
};

export default Form;
