import React from "react";
import styles from "./Icons.module.scss";
import mapIcon from "../../assets/basil_location-outline.svg";
import callIcon from "../../assets/basil_phone-solid.svg";
import whatsappIcon from "../../assets/basil_whatsapp-outline.svg";
import instagramIcon from "../../assets/basil_instagram-outline.svg";
import facebookIcon from "../../assets/basil_facebook-outline.svg";
import youtubeIcon from "../../assets/basil_youtube-outline.svg";

export default function Icons({ locationText, phoneNumber }) {
  return (
    <div className={styles.iconsContainer}>
      <div className={styles.mapIconAndTextElements}>
        <img src={mapIcon} alt="Map Icon" />
        <a
          href="https://www.google.com/maps/place/Ahmad+Rajabli,+Baku/@40.4088765,49.8615856,17z/data=!3m1!4b1!4m6!3m5!1s0x40307d55f483215d:0x6579b75be1ed3d12!8m2!3d40.4088765!4d49.8641605!16s%2Fg%2F1tvw3d__?entry=ttu"
          target="blank"
        >
          {locationText}
        </a>
      </div>
      <div className={styles.otherIconsElements}>
        <div className={styles.callIconElement}>
          <img src={callIcon} alt="Call Icon" />
          <a href="#">{phoneNumber}</a>
        </div>
        <div className={styles.socialMediaElements}>
          <a href="#">
            <img src={whatsappIcon} alt="Whatsapp Icon" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a href="#">
            <img src={youtubeIcon} alt="Youtube Icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
