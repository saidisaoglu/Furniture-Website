import { useState } from "react";
import Icons from "./Icons";
import Menu from "./Menu";
import styles from "./Navbar.module.scss";
import MenuForMobile from "./MenuBarForMobile";
import ThirdNavbarMenu from "./ThirdNavbarMenu";

export default function Navbar({
  locationText,
  phoneNumber,
  homePage,
  projects,
  whereToFind,
  vlog,
  customerReviews,
  contact,
  addressWood,
  setTexts,
}) {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropDownNavbarVisible, setDropDownNavbarVisible] = useState(false);

  function toggleDropdown() {
    setDropdownVisible(!dropdownVisible);
  }

  function closeDropdown() {
    setDropdownVisible(false);
  }

  function toggleDropDownNavbar() {
    setDropDownNavbarVisible(!dropDownNavbarVisible);
  }

  return (
    <header className={styles.headerContainer}>
      <Icons locationText={locationText} phoneNumber={phoneNumber} />
      <Menu
        homePage={homePage}
        projects={projects}
        whereToFind={whereToFind}
        vlog={vlog}
        customerReviews={customerReviews}
        contact={contact}
        addressWood={addressWood}
        toggleDropdown={toggleDropdown}
        toggleDropDownNavbar={toggleDropDownNavbar}
        setTexts={setTexts}
      />
      <div
        className={`${styles.dropdown}${dropdownVisible ? styles.active : ""}`}
      >
        <MenuForMobile
          homePage={homePage}
          projects={projects}
          whereToFind={whereToFind}
          vlog={vlog}
          customerReviews={customerReviews}
          contact={contact}
          addressWood={addressWood}
          closeDropdown={closeDropdown}
        />
      </div>
      <div
        className={`${styles.dropDownMenu}${
          dropDownNavbarVisible ? styles.activeMenu : ""
        }`}
      >
        <ThirdNavbarMenu
          homePage={homePage}
          projects={projects}
          whereToFind={whereToFind}
          vlog={vlog}
          customerReviews={customerReviews}
          contact={contact}
        />
      </div>
    </header>
  );
}
