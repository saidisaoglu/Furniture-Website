import styles from "./Menu.module.scss";
import addressLogo from "../../assets/Logo.svg";
import shoppingCardIcon from "../../assets/Shopping_card_icon.svg";
import DropDownLanguage from "./DropDownLanguage";

export default function Menu({
  homePage,
  projects,
  whereToFind,
  vlog,
  customerReviews,
  contact,
  addressWood,
  toggleDropdown,
  toggleDropDownNavbar,
  setTexts,
}) {
  const refreshPage = () => {
    window.location.reload(); // Reloads the entire page
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.addressElement}>
        <img onClick={refreshPage} src={addressLogo} alt="Address Logo" />
      </div>
      <div className={styles.textsElement}>
        <div>
          <a href="" onClick={refreshPage}>
            {homePage}
          </a>
        </div>
        <div>
          <a href="">{projects}</a>
        </div>
        <div>
          <a href="#">{whereToFind}</a>
        </div>
        <div>
          <a href="#">{vlog}</a>
        </div>
        <div>
          <a href="#">{customerReviews}</a>
        </div>
        <div>
          <a href="#">{contact}</a>
        </div>
      </div>
      <div className={styles.languageAndButtonElements}>
        <div className={styles.dropdownElement1440}>
          <DropDownLanguage />
        </div>
        <button className={styles.iconAndTextButton}>
          <div className={styles.buttonElements}>
            <img src={shoppingCardIcon} alt="Shopping Card Icon" />
            <p>{addressWood}</p>
          </div>
        </button>
      </div>
      <div className={styles.dropdownAndMenuBar}>
        <div className={styles.dropdownElement}>
          <DropDownLanguage />
        </div>
        <button className={styles.iconAndTextButton768}>
          <div className={styles.buttonElements}>
            <img src={shoppingCardIcon} alt="Shopping Card Icon" />
            <p>{addressWood}</p>
          </div>
        </button>
        <div className={styles.menuBarElement}>
          <p className={styles.firstMenuText} onClick={toggleDropdown}>
            Menu
          </p>
          <p className={styles.secondMenuText} onClick={toggleDropDownNavbar}>
            Menu
          </p>
        </div>
      </div>
    </div>
  );
}
