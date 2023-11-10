import styles from "./ContactUs.module.scss";
import whiteMapIcon from "../../assets/whiteMapIcon.svg";
import whitecallIcon from "../../assets/whitecallIcon.svg";
import whiteWpIcon from "../../assets/whiteWpIcon.svg";
import whiteInstaIcon from "../../assets/whiteInstaIcon.svg";
import whiteFbIcon from "../../assets/whiteFbIcon.svg";
import whiteYoutubeIcon from "../../assets/whiteYoutubeIcon.svg";
import bottomAddressLogo from "../../assets/bottomAddressLogo.svg";

export default function ContactUs({
  contactUs,
  fullName,
  email,
  header,
  message,
  sendButton,
  locationText,
  phoneNumber,
  homePage,
  blog,
  vlog,
  projects,
  Interior,
  Exterior,
  whereToFind,
  ourProjects,
  competitions,
  styless,
  educationalinformation,
  customerReviews,
  aboutUs,
  contactWithUs,
  designerText,
  designer,
}) {
  return (
    <section className={styles.footerContainer}>
      <p className={styles.contactUsText}>{contactUs}</p>
      <div className={styles.inputsContainer}>
        <div className={styles.fullnameAndEmailElements}>
          <input type="text" name="name" id="name" placeholder={fullName} />
          <input type="email" name="email" id="email" placeholder={email} />
        </div>
        <div className={styles.headerAndMessageElements}>
          <input type="text" name="header" id="header" placeholder={header} />
          <input
            className={styles.messageInput}
            type="text"
            name="message"
            id="message"
            placeholder={message}
          />
        </div>
        <div className={styles.sendButtonElement}>
          <button className={styles.sendButton}>{sendButton}</button>
        </div>
      </div>
      <div className={styles.footerWrapper}>
        <div className={styles.footerElements}>
          <div className={styles.firstWrapperElement}>
            <div className={styles.imageAddress}>
              <img
                className={styles.addressLogo}
                src={bottomAddressLogo}
                alt="Address Logo"
              />
            </div>
            <div className={styles.mapAndLocationText}>
              <img src={whiteMapIcon} alt="Map Icon" />
              <p>{locationText}</p>
            </div>
            <div className={styles.iconsContainer}>
              <div className={styles.callAndPhoneNumber}>
                <img src={whitecallIcon} alt="Call Icon" />
                <p>{phoneNumber}</p>
              </div>
              <div className={styles.socialNetworkElements}>
                <img src={whiteFbIcon} alt="Facebook Icon" />
                <img src={whiteWpIcon} alt="Whatsapp Icon" />
                <img src={whiteInstaIcon} alt="Instagram Icon" />
                <img src={whiteYoutubeIcon} alt="Youtube Icon" />
              </div>
            </div>
          </div>
          {/* ------------------responsive1440------------ */}
          <div className={styles.responsive1440WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{homePage}</p>
              <p>{blog}</p>
              <p>{vlog}</p>
              <p>{projects}</p>
              <p>{Interior}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{Exterior}</p>
              <p>{whereToFind}</p>
              <p>{ourProjects}</p>
              <p>{competitions}</p>
            </div>
            <div className={styles.fourthWrapperElement}>
              <p>{styless}</p>
              <p>{educationalinformation}</p>
              <p>{customerReviews}</p>
              <p>{aboutUs}</p>
              <p>{contactWithUs}</p>
            </div>
          </div>
          {/* ------------------responsive768------------ */}
          <div className={styles.responsive768WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{homePage}</p>
              <p>{vlog}</p>
              <p>{projects}</p>
              <p>{Exterior}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{customerReviews}</p>
              <p>{aboutUs}</p>
              <p>{ourProjects}</p>
              <p>{contactWithUs}</p>
              <p>{whereToFind}</p>
            </div>
          </div>
          {/* ------------------responsive1024------------ */}
          <div className={styles.responsive1024WrapperElement}>
            <div className={styles.secondWrapperElement}>
              <p>{homePage}</p>
              <p>{vlog}</p>
              <p>{projects}</p>
            </div>
            <div className={styles.thirdWrapperElement}>
              <p>{Exterior}</p>
              <p>{whereToFind}</p>
              <p>{ourProjects}</p>
            </div>
            <div className={styles.fourthWrapperElement}>
              <p>{customerReviews}</p>
              <p>{aboutUs}</p>
              <p>{contactWithUs}</p>
            </div>
          </div>
        </div>
        {/* ------------------designerPart------------ */}
        <div className={styles.aboutDesigner}>
          <div className={styles.aboutDesignerWrapper}>
            <div className={styles.designerTestElement}>
              <p>{designerText}</p>
            </div>
            <div className={styles.designerCompanyElement}>
              <a href="#">{designer}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
