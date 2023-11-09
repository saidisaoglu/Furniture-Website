import React from "react"; // Make sure to import React
import styles from "./AboutUs.module.scss";
import aboutUsImage from "../Images/aboutUs.png";

export default function AboutUs({ aboutUs, userName, aboutUsText }) {
  return (
    <section className={styles.aboutUsContainer}>
      <div className={styles.aboutUsWrapper}>
        <div className={styles.headerContainer}>
          <p>{aboutUs}</p>
        </div>
        <div className={styles.imageAndTextContainer}>
          <img src={aboutUsImage} alt="About Us" />
          <div className={styles.textContainer}>
            <p>{userName}</p>
            <p>{aboutUsText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
