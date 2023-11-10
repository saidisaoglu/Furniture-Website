import styles from "./ThirdNavbarMenu.module.scss";

export default function ThirdNavbarMenu({
  homePage,
  projects,
  whereToFind,
  vlog,
  customerReviews,
  contactWithUs,
}) {
  return (
    <div className={styles.dropDownNavbarElement}>
      <div className={styles.menuBar}>
        <a href="#">{homePage}</a>
        <a href="#">{projects}</a>
        <a href="#">{whereToFind}</a>
        <a href="#">{vlog}</a>
        <a href="#">{customerReviews}</a>
        <a href="#">{contactWithUs}</a>
      </div>
    </div>
  );
}
