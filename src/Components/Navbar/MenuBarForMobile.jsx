import styles from "./MenuBarForMobile.module.scss";
import Xicon from "../../assets/Xicon.svg";
import ShoppingIcon from "../../assets/Shopping_card_icon.svg";

export default function MenuForMobile({
  homePage,
  projects,
  whereToFind,
  vlog,
  customerReviews,
  contact,
  addressWood,
  closeDropdown,
}) {
  return (
    <div className={styles.dropdownElement}>
      <div className={styles.XiconElement}>
        <img onClick={closeDropdown} src={Xicon} alt="X Icon" />
      </div>
      <div className={styles.textsInMenu}>
        <a>{homePage}</a>
        <a>{projects}</a>
        <a>{whereToFind}</a>
        <a>{vlog}</a>
        <a>{customerReviews}</a>
        <a>{contact}</a>
        <button className={styles.buttonContainer}>
          <div className={styles.buttonElements}>
            <img src={ShoppingIcon} alt="Shopping Icon" />
            <p>{addressWood}</p>
          </div>
        </button>
      </div>
    </div>
  );
}
